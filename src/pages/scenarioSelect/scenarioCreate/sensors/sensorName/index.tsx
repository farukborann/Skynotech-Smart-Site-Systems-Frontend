import { useState, useRef } from "react";
import gsap from "gsap";
import { SensorResponse } from "src/services/sensors/models";

import styles from "./style.module.css";

const ScenarioSensorSelect = ({
  selectedSensorId,
  setSelectedSensorId,
  sensors,
}: {
  selectedSensorId: string;
  setSelectedSensorId: (id: string) => void;
  sensors: SensorResponse[];
}) => {
  const [dropdown, setDropdown] = useState(true);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    const dropdownReference = dropdownRef.current;

    setDropdown(!dropdown);

    dropdown
      ? gsap.to(dropdownReference, { scaleY: 0, duration: 0.1 })
      : gsap.to(dropdownReference, { scaleY: 1, duration: 0.1 });
  };

  return (
    <div className={styles.container}>
      <div className={styles.input_group}>
        <label className={styles.title}>Sensör Seçiniz</label>
        <div className={styles.inputTime}>
          <button
            type="button"
            className={styles.trigger}
            onClick={toggleDropdown}
          >
            {sensors &&
              selectedSensorId &&
              sensors.find((sensor) => sensor._id === selectedSensorId)?.name}
          </button>

          <div
            className={styles.dropdown}
            style={{ transform: "scaleY(0)" }}
            ref={dropdownRef}
          >
            {sensors
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((sensor) => {
                return (
                  <label
                    htmlFor={sensor._id}
                    key={sensor._id}
                    className={styles.item}
                    onClick={() => {
                      setSelectedSensorId(sensor._id);
                      gsap.to(dropdownRef.current, {
                        scaleY: 0,
                        duration: 0.1,
                      });
                    }}
                  >
                    <input
                      id={sensor._id}
                      value={sensor._id}
                      name="sensor"
                      type="radio"
                      className={styles.input}
                      onChange={(e) => setSelectedSensorId(e.target.value)}
                    />
                    {sensor.name}
                  </label>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScenarioSensorSelect;
