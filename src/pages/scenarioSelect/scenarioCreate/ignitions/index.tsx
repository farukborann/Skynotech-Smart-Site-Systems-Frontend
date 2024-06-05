import styles from "./style.module.css";

const ScenarioIgnitionsForm = ({
  ignitionsState,
  handleIgnitionChange,
}: {
  ignitionsState: { [key: string]: 1 | 0 };
  handleIgnitionChange: (index: number, status: boolean) => void;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>Vanalar</p>
      </div>
      <div className={styles.checkboxes}>
        {Object.keys(ignitionsState).map((ignitionIndex, index) => (
          <div key={index} className="checkbox-wrapper-16">
            <label className="checkbox-wrapper">
              <input
                id={`valve-${index}`}
                className="checkbox-input"
                type="checkbox"
                checked={ignitionsState[ignitionIndex] === 1}
                onChange={(e) =>
                  handleIgnitionChange(index + 1, e.target.checked)
                }
              />
              <span className="checkbox-tile">
                <span className="checkbox-label">{index + 1}</span>
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScenarioIgnitionsForm;
