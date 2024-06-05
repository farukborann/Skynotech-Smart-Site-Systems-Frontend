import { IoCloseCircleOutline } from "react-icons/io5";

import styles from "./style.module.css";

const ScenarioNameForm = ({
  scenarioName,
  setScenarioName,
  scenarioDesc,
  setScenarioDesc,
}: {
  scenarioName: string;
  setScenarioName: (value: string) => void;
  scenarioDesc: string;
  setScenarioDesc: (value: string) => void;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.input_group}>
        <label className={styles.title}>Senaryo Adı</label>
        <input
          type="text"
          name="name"
          value={scenarioName}
          onChange={(e) => setScenarioName(e.target.value)}
          className={styles.input}
          placeholder="Bir Senaryo Adı Girin"
        />
        {scenarioName && (
          <button
            onClick={() => setScenarioName("")}
            className={styles.clearButton}
          >
            <IoCloseCircleOutline />
          </button>
        )}
      </div>
      <div className={styles.input_group}>
        <label className={styles.title}>Senaryo Açıklaması</label>
        <textarea
          maxLength={180}
          className={styles.input}
          name="desc"
          value={scenarioDesc}
          onChange={(e) => setScenarioDesc(e.target.value)}
          rows={5}
          placeholder="Senaryo Açıklamanızı Ekleyin"
        />
      </div>
    </div>
  );
};

export default ScenarioNameForm;
