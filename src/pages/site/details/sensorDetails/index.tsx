import { MdSensors } from "react-icons/md";
import { SensorResponse } from "src/services/sensors/models";

import SensorDetail from "./sensorDetail";

import styles from "./style.module.css";
import { SubSystemResponse } from "src/services/sub-systems/models";

const SensorsDetail = ({
  sensors,
  subSystems,
}: {
  sensors: { [key: string]: SensorResponse[] };
  subSystems: SubSystemResponse[];
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
        {Object.keys(sensors).map((subSystemsId) =>
          sensors[subSystemsId].map((sensor, index) => (
            <SensorDetail
              key={`${subSystemsId}-${index}`}
              sensor={sensor}
              subSystem={subSystems.find((x) => x._id === subSystemsId)!}
            />
          ))
          //<SensorDetail key={index} sensor={sensor} subSystem={} />
        )}
      </div>
    </div>
  );
};

export default SensorsDetail;
