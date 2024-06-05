import { useEffect, useState } from "react";
import { getSensorsValue } from "src/services/sensors";
import {
  SensorResponse,
  SensorValueResponse,
} from "src/services/sensors/models";
import { SubSystemProp } from "src/utils/sub-systems/getProps";

import styles from "./style.module.css";

const ScenarioSensors = ({
  subSystemProp,
  sensors,
}: {
  subSystemProp?: SubSystemProp;
  sensors: SensorResponse[];
}) => {
  const [sensorValues, setSensorValues] = useState<{
    [key: string]: SensorValueResponse;
  }>({});

  useEffect(() => {
    const interval = setInterval(async () => {
      for (const sensor of sensors) {
        const response = await getSensorsValue({ id: sensor._id });
        if ("error" in response) {
          // TODO: Handle error
          return;
        }
        setSensorValues((prev) => ({
          ...prev,
          [sensor._id]: response.result,
        }));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sensors]);

  const formatDate = (timestamp: string) => {
    if (!timestamp) return ""; // timestamp tanımsızsa boş bir string döndür
    const date = new Date(timestamp); // Firestore serverTimestamp'i JavaScript Date nesnesine dönüştürür
    return date.toLocaleString(); // Tarihi yerel saat dilimine göre string olarak formatlar
  };

  return (
    <div className={styles.container}>
      {sensors.map((sensor, index) => {
        const lastValue = sensorValues[sensor._id] ?? {
          value: 0,
          timestamp: "",
        };

        const formattedDate = formatDate(lastValue.timestamp);
        return (
          <div className={styles.sensor} key={index}>
            <div className={styles.sensorOran}>
              <div
                className={styles.sensorPer}
                style={{ height: `${lastValue.value}%` }}
              ></div>
            </div>
            <div className={styles.info}>
              <div className={styles.header}>
                <h3 className={styles.title}>{subSystemProp?.icon}</h3>
                <h3 className={styles.title}>{sensor.name}</h3>
              </div>
              <h1>
                {lastValue.value} {subSystemProp?.birim}
              </h1>
              <h6>Son güncelleme: {formattedDate}</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ScenarioSensors;
