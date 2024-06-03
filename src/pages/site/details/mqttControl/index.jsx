"use client";

import React, { useState, useEffect, useRef } from "react";
import { Client, Message } from "paho-mqtt";
import styles from "./style.module.css";
import getIconForSystem from "@/utils/getIconForSystems";

const mqttOptions = {
  brokerUrl:
    "wss://7a50b1f143844737b1ec3ac2c2477c76.s2.eu.hivemq.cloud:8884/mqtt",
  clientId: "skynotech",
  userName: "yeqq99",
  password: "d2BfvrT4T9pg.8P",
};

const SiteProfileControlMQTTComponent = ({ siteDetail, selectedSystem }) => {
  const systemInfo = getIconForSystem(selectedSystem);

  const topic = `test/${siteDetail.siteParams}/${systemInfo.link}`;

  const initialKontakDurum =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("kontakDurum")) || {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 0,
          10: 0,
          11: 0,
          12: 0,
          13: 0,
          14: 0,
          15: 0,
          16: 0,
        }
      : {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 0,
          10: 0,
          11: 0,
          12: 0,
          13: 0,
          14: 0,
          15: 0,
          16: 0,
        };

  const [kontakDurum, setKontakDurum] = useState(initialKontakDurum);

  const mqttClientRef = useRef(null);

  useEffect(() => {
    const mqttClient = new Client(mqttOptions.brokerUrl, mqttOptions.clientId);

    mqttClientRef.current = mqttClient;

    mqttClient.onConnectionLost = onConnectionLost;
    mqttClient.onMessageArrived = onMessageArrived;

    mqttClient.connect({
      userName: mqttOptions.userName,
      password: mqttOptions.password,
      onSuccess: () => {
        console.log("MQTT broker ile bağlantı kuruldu.");
        console.log(`"${topic}" topic'ine abone olundu.`);
        mqttClient.subscribe(
          `test/${siteDetail.siteParams}/${systemInfo.link}_kontaklar`
        );
      },
      onFailure: (error) => {
        console.error("MQTT bağlantı hatası:", error);
      },
    });

    return () => {
      if (mqttClient.isConnected()) {
        mqttClient.disconnect();
      }
    };
  }, [siteDetail.siteParams, systemInfo.link, topic]);

  useEffect(() => {
    // Save kontakDurum to localStorage whenever it changes
    localStorage.setItem("kontakDurum", JSON.stringify(kontakDurum));

    // Send MQTT message when kontakDurum changes
    if (mqttClientRef.current && mqttClientRef.current.isConnected()) {
      const result = {
        kontakDurum: kontakDurum,
      };
      const mqttMessage = new Message(JSON.stringify(result));
      mqttMessage.destinationName = topic;
      mqttClientRef.current.send(mqttMessage);
      console.log(`"${topic}" topic'ine mesaj gönderildi:`, result);
    } else {
      console.error("MQTT broker ile bağlantı kurulamadı.");
    }
  }, [kontakDurum, topic]);

  const onConnectionLost = (responseObject) => {
    if (responseObject.errorCode !== 0) {
      console.error("MQTT bağlantısı kaybedildi:", responseObject.errorMessage);
      alert(responseObject.errorCode + ": " + responseObject.errorMessage);
    }
  };

  const onMessageArrived = (message) => {
    const newMessage = JSON.parse(message.payloadString);
    console.log("Mesaj alındı:", newMessage);
    setKontakDurum(newMessage.kontakDurum);
  };

  const handleCheckboxChange = (kontak) => {
    setKontakDurum((prevDurum) => {
      // Ensure kontak is a string
      const kontakString =
        typeof kontak === "number" ? `Kontak_${kontak}` : kontak;

      // Extracting the number from the "Kontak_" prefix
      const kontakNumber = parseInt(kontakString.replace("Kontak_", ""), 10);

      const updatedDurum = {
        ...prevDurum,
        [kontakNumber.toString()]:
          prevDurum[kontakNumber.toString()] === 0 ? 1 : 0,
      };

      return updatedDurum;
    });
  };

  return (
    <div className={styles.checkboxes}>
      <h1 className={styles.title}>{systemInfo.title} Sistemleri</h1>
      <div className={styles.kontaklar}>
        {Array.from({ length: 16 }, (_, index) => index + 1).map((kontak) => (
          <div
            className={styles.kontak}
            key={kontak}>
            <p>{`Kontak ${kontak}`}</p>
            <div className={styles.checkboxDiv}>
              <label
                htmlFor={`checkbox-${kontak}`}
                className={styles.switch}>
                <input
                  id={`checkbox-${kontak}`}
                  className={styles.checkbox}
                  type="checkbox"
                  checked={kontakDurum[kontak.toString()] === 1}
                  onChange={() => handleCheckboxChange(kontak)}
                />
                <span className={styles.slider}></span>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SiteProfileControlMQTTComponent;
