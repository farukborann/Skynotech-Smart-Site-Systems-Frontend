import { MdSensors } from "react-icons/md";
import { SensorResponse } from "src/services/sensors/models";

import SensorDetail from "./sensorDetail";

import styles from "./style.module.css";

const SensorsDetail = ({
  sensors,
}: {
  sensors: { [key: string]: SensorResponse[] };
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title_sec}>
        <p className={styles.title}>
          <MdSensors />
          Sensörler
        </p>
      </div>
      <div className={styles.content}>
        {Object.values(sensors).map((sensor, index) => (
          <SensorDetail key={index} sensor={sensor} />
        ))}
      </div>
    </div>
  );
};

export default SensorsDetail;
