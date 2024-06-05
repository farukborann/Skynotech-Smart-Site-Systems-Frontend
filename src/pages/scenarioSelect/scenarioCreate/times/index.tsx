import moment from "moment";

import styles from "./style.module.css";

const ScenarioTimesForm = ({
  startTime,
  setStartTime,
  endTime,
  setEndTime,
}: {
  startTime: Date;
  setStartTime: (value: Date) => void;
  endTime: Date;
  setEndTime: (value: Date) => void;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>Senaryo Saatleri</p>
      </div>
      <div className={styles.content}>
        <div className={styles.input_group}>
          <input
            type="time"
            name="startTime"
            value={moment(startTime).format("HH:mm")}
            onChange={(e) =>
              setStartTime(moment(e.target.value, "HH:mm").toDate())
            }
            className={styles.timeInput}
          />
        </div>
        <div className={styles.input_group}>
          <input
            type="time"
            name="endTime"
            value={moment(endTime).format("HH:mm")}
            onChange={(e) =>
              setEndTime(moment(e.target.value, "HH:mm").toDate())
            }
            className={styles.timeInput}
          />
        </div>
      </div>
    </div>
  );
};

export default ScenarioTimesForm;
