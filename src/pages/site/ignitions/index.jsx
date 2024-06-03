"use client";

import React, { useState, useEffect, useRef } from "react";
import { Client, Message } from "paho-mqtt";
import styles from "./style.module.css";
import getIconForSystem from "@/utils/getIconForSystems";
import isEqual from "@/utils/isEqual";
import SiteProfileControlSystemsComponent from "../details/systems";

const mqttOptions = {
  brokerUrl: "wss://skynotech-0u674v.a01.euc1.aws.hivemq.cloud:8884/mqtt",
  clientId: "skynotech",
  userName: "yeqq99",
  password: "d2BfvrT4T9pg.8P",
};

const SiteProfileControlMQTTComponent = ({
  siteDetail,
  selectedSystem,
  handleSystemSelect,
}) => {
  const systemInfo = getIconForSystem(selectedSystem);
  const topic = `test/${siteDetail.siteParams}/${systemInfo.link}`;

  const initialKontakDurum = JSON.parse(
    localStorage.getItem("kontakDurum")
  ) || {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
  };

  const [kontakDurum, setKontakDurum] = useState(initialKontakDurum);
  const mqttClientRef = useRef(null);
  const previousKontakDurumRef = useRef(initialKontakDurum);

  useEffect(() => {
    const mqttClient = new Client(mqttOptions.brokerUrl, mqttOptions.clientId);
    mqttClientRef.current = mqttClient;

    mqttClient.connect({
      onSuccess: () => {
        console.log("MQTT istemcisi başarıyla bağlandı.");
        mqttClient.onMessageArrived = onMessageArrived;
        mqttClient.onConnectionLost = onConnectionLost;
        mqttClient.subscribe(topic);
      },
      onFailure: (responseObject) => {
        console.error(
          "MQTT bağlantısı başarısız oldu:",
          responseObject.errorMessage
        );
        alert("MQTT bağlantısı başarısız oldu: " + responseObject.errorMessage);
      },
      userName: mqttOptions.userName,
      password: mqttOptions.password,
    });

    return () => {
      mqttClient.disconnect();
    };
  }, [topic, selectedSystem]);

  useEffect(() => {
    if (
      mqttClientRef.current &&
      mqttClientRef.current.isConnected() &&
      !isEqual(previousKontakDurumRef.current, kontakDurum)
    ) {
      const result = { kontakDurum: kontakDurum };
      const mqttMessage = new Message(JSON.stringify(result));
      mqttMessage.destinationName = topic;
      mqttClientRef.current.send(mqttMessage);
      console.log(`"${topic}" topic'ine mesaj gönderildi:`, result);
      previousKontakDurumRef.current = kontakDurum;
    }
  }, [kontakDurum, topic]);

  const onConnectionLost = (responseObject) => {
    if (responseObject.errorCode !== 0) {
      console.error("MQTT bağlantısı kaybedildi:", responseObject.errorMessage);
      alert(responseObject.errorCode + ": " + responseObject.errorMessage);
    }
  };

  const onMessageArrived = (message) => {
    try {
      const newMessage = JSON.parse(message.payloadString);
      console.log("Mesaj alındı:", newMessage);
      setKontakDurum(newMessage.kontakDurum);
    } catch (error) {
      console.error("Gelen veri JSON formatında değil:", error);
      // Gelen veri JSON formatında değilse burada bir hata işleme mekanizması ekleyebilirsiniz.
    }
  };

  const handleCheckboxChange = (kontak) => {
    setKontakDurum((prevDurum) => {
      const updatedDurum = { ...prevDurum };
      updatedDurum[kontak.toString()] =
        prevDurum[kontak.toString()] === 0 ? 1 : 0;
      return updatedDurum;
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles.h1}>
          {getIconForSystem(selectedSystem).icon}{" "}
          {getIconForSystem(selectedSystem).title} Sistemi
        </h1>
      </div>
      <SiteProfileControlSystemsComponent
        siteDetail={siteDetail}
        selectedSystem={selectedSystem}
        handleSystemSelect={handleSystemSelect}
      />
      <div className={styles.kontaklar}>
        {Array.from({ length: 8 }, (_, index) => index + 1).map((kontak) => (
          <div className={styles.kontak} key={kontak}>
            <p>{`Kontak ${kontak}`}</p>
            <div className={styles.checkboxDiv}>
              <label htmlFor={`checkbox-${kontak}`} className={styles.switch}>
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
