import { MdAddChart } from "react-icons/md";
import { SensorResponse } from "src/services/sensors/models";
import { SubSystemProp } from "src/utils/sub-systems/getProps";

import ScenarioSensorSelect from "./sensorName";
import ScenarioSensorValueForm from "./sensorValues";

import styles from "./style.module.css";

const ScenarioSensorForms = ({
  sensors,
  subSystemProp,
  selectedSensorId,
  setSelectedSensorId,
  minValue,
  setMinValue,
  maxValue,
  setMaxValue,
  hasCondition,
  setHasCondition,
}: {
  sensors: SensorResponse[];
  subSystemProp?: SubSystemProp;
  selectedSensorId: string;
  setSelectedSensorId: (id: string) => void;
  minValue: number;
  setMinValue: (value: number) => void;
  maxValue: number;
  setMaxValue: (value: number) => void;
  hasCondition: boolean;
  setHasCondition: (value: boolean) => void;
}) => {
  return (
    <div className={styles.container}>
      <button
        style={!hasCondition ? { display: "flex" } : { display: "none" }}
        type="button"
        className={styles.button}
        onClick={() => setHasCondition(true)} // Butona tıklama işlevi ekle
      >
        <span className={styles.icon}>
          <MdAddChart />
        </span>
        Sensör Senaryosu Ekle
      </button>
      <div
        className={`${styles.content} ${!hasCondition ? styles.scaled : ""}`}
      >
        <ScenarioSensorSelect
          setSelectedSensorId={setSelectedSensorId}
          selectedSensorId={selectedSensorId}
          sensors={sensors}
        />
        <ScenarioSensorValueForm
          minValue={minValue}
          setMinValue={setMinValue}
          maxValue={maxValue}
          setMaxValue={setMaxValue}
          subSystemProp={subSystemProp}
          onCancel={() => setHasCondition(false)}
        />
      </div>
    </div>
  );
};

export default ScenarioSensorForms;
