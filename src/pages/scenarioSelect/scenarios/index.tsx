import ScenarioDivs from "src/pages/scenarioSelect/scenarios/scenario";
import { ScenarioResponse } from "src/services/scenarios/models";
import { SubSystemProp } from "src/utils/sub-systems/getProps";

import styles from "./style.module.css";

const ScenariosRUD = ({
  subSystemProp,
  scenarios,
  handleDeleteScenario,
}: {
  subSystemProp?: SubSystemProp;
  scenarios: ScenarioResponse[];
  handleDeleteScenario: (scenario: ScenarioResponse) => void;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {scenarios.map((scenario, index) => (
          <ScenarioDivs
            key={scenario._id}
            scenario={scenario}
            subSystemProp={subSystemProp}
            handleDeleteScenario={handleDeleteScenario}
          />
        ))}
      </div>
    </div>
  );
};

export default ScenariosRUD;
