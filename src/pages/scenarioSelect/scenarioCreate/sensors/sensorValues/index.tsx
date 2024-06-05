import { SubSystemProp } from "src/utils/sub-systems/getProps";

import styles from "./style.module.css";

const ScenarioSensorValueForm = ({
  minValue,
  setMinValue,
  maxValue,
  setMaxValue,
  subSystemProp,
  onCancel,
}: {
  minValue: number;
  setMinValue: (value: number) => void;
  maxValue: number;
  setMaxValue: (value: number) => void;
  subSystemProp?: SubSystemProp;
  onCancel: () => void;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.input_group}>
          <label className={styles.label} htmlFor="min">
            {subSystemProp?.icon}
            Minimum
          </label>
          <div className={styles.inputIcon}>
            <input
              type="number"
              name="min"
              value={minValue}
              onChange={(e) => setMinValue(Number(e.target.value))}
              className={styles.input}
              min="1"
              max="100"
              placeholder="min"
            />
            <span className={styles.birim}>{subSystemProp?.birim}</span>
          </div>
        </div>
        <div className={styles.input_group}>
          <label className={styles.label} htmlFor="max">
            {subSystemProp?.icon}
            Maksimum
          </label>
          <div className={styles.inputIcon}>
            <input
              type="number"
              name="max"
              value={maxValue}
              onChange={(e) => setMaxValue(Number(e.target.value))}
              className={styles.input}
              min="1"
              max="100"
              placeholder="max"
            />
            <span className={styles.birim}>{subSystemProp?.birim}</span>
          </div>
        </div>
      </div>
      <div className={styles.button} onClick={onCancel}>
        İptal Et
      </div>
    </div>
  );
};

export default ScenarioSensorValueForm;
