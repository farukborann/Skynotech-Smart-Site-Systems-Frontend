import moment from "moment";
import { LuCalendarClock } from "react-icons/lu";
import { SensorResponse } from "src/services/sensors/models";
import getIconForSubSystem from "src/utils/sub-systems/getIcon";

import styles from "./style.module.css";

const SensorDetail = ({ sensor }: { sensor: SensorResponse }) => {
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
          {getIconForSubSystem(sensor.system).icon}
        </div>
        <div className={styles.title}>
          <p className={styles.name}>{sensor.name}</p>
          <p className={styles.times}>
            <LuCalendarClock />
            {formatDate(sensor.lastUpdated)}
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.battery}>
          <div
            className={styles.percent}
            style={{ height: `${sensor.sensor}%` }}
          ></div>
        </div>
        <div className={styles.sensorDiv}>
          <p className={styles.sensor}>{sensor.sensor}</p>
          <p className={styles.birim}>
            {getIconForSubSystem(sensor.system).birim}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SensorDetail;
