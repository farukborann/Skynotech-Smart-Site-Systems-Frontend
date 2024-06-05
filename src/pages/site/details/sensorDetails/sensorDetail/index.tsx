import moment from "moment";
import { LuCalendarClock } from "react-icons/lu";
import {
  SensorResponse,
  SensorValueResponse,
} from "src/services/sensors/models";
import getSubSystemProps from "src/utils/sub-systems/getProps";

import styles from "./style.module.css";
import { SubSystemResponse } from "src/services/sub-systems/models";
import { useEffect, useState } from "react";
import { getSensorsValue } from "src/services/sensors";

const SensorDetail = ({
  sensor,
  subSystem,
}: {
  sensor: SensorResponse;
  subSystem: SubSystemResponse;
}) => {
  const [lastValue, setLastValue] = useState<SensorValueResponse>({
    value: "",
    timestamp: "",
  });

  useEffect(() => {
    // Her 1 saniyede bir sensör değerini güncelle
    const interval = setInterval(async () => {
      const response = await getSensorsValue({ id: sensor._id });

      if ("error" in response) {
        // TODO: Handle error
        return;
      }

      setLastValue(response.result);
    }, 1000);

    return () => clearInterval(interval);
  }, [sensor]);

  const formatDate = (timestamp: string) => {
    if (!timestamp) return ""; // timestamp tanımsızsa boş bir string döndür

    const now = moment(); // Şu anki zamanı al
    const lastUpdated = moment(timestamp); // Firestore serverTimestamp'i moment nesnesine dönüştür

    const diff = now.diff(lastUpdated, "seconds"); // Şu an ile verilen zaman damgası arasındaki farkı saniye cinsinden hesapla

    if (diff < 60) {
      return `${diff} saniye önce`;
    } else if (diff < 3600) {
      return `${Math.floor(diff / 60)} dakika önce`;
    } else if (diff < 86400) {
      return `${Math.floor(diff / 3600)} saat önce`;
    } else if (diff < 604800) {
      return `${Math.floor(diff / 86400)} gün önce`;
    } else if (diff < 2592000) {
      return `${Math.floor(diff / 604800)} hafta önce`;
    } else {
      return `${Math.floor(diff / 2592000)} ay önce`;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.icon}>
          {getSubSystemProps(subSystem.systemType)?.icon}
        </div>
        <div className={styles.title}>
          <p className={styles.name}>{sensor.name}</p>
          <p className={styles.times}>
            <LuCalendarClock />
            {formatDate(lastValue.timestamp)}
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.battery}>
          <div
            className={styles.percent}
            style={{ height: `${lastValue.value}%` }}
          ></div>
        </div>
        <div className={styles.sensorDiv}>
          <p className={styles.sensor}>{lastValue.value}</p>
          <p className={styles.birim}>
            {getSubSystemProps(subSystem.systemType)?.birim}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SensorDetail;
