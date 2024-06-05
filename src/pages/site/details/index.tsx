import { ScenarioResponse } from "src/services/scenarios/models";
import { SensorResponse } from "src/services/sensors/models";
import { SiteResponse } from "src/services/sites/models";
import { SubSystemResponse } from "src/services/sub-systems/models";

import MainDetails from "./mainDetails";
import SensorsDetail from "./sensorDetails";

// import SiteProfileScenariosComponent from "./siteScenarios";
// import SiteProfileSensorsComponent from "./siteSensors";
import styles from "./style.module.css";
import ScenariosDetails from "./scenariosDetails";

const SiteDetails = ({
  siteData,
  subSystems,
  sensors,
  scenarios,
}: {
  siteData: SiteResponse;
  subSystems: SubSystemResponse[];
  sensors: { [key: string]: SensorResponse[] };
  scenarios: { [key: string]: ScenarioResponse[] };
}) => {
  return (
    <div className={styles.main}>
      <MainDetails
        siteData={siteData}
        subSystemsCount={subSystems.length}
        sensorsCount={Object.values(sensors).reduce((previous, current) => {
          return previous + current.length;
        }, 0)}
        scenariosCount={Object.values(scenarios).reduce((previous, current) => {
          return previous + current.length;
        }, 0)}
      />
      <div className={styles.infos}>
        <div className={styles.sensor}>
          <SensorsDetail sensors={sensors} subSystems={subSystems} />
        </div>
        <div className={styles.scenario}>
          <ScenariosDetails
            siteData={siteData}
            subSystems={subSystems}
            sensors={sensors}
            scenarios={scenarios}
          />
        </div>
      </div>
    </div>
  );
};

export default SiteDetails;
