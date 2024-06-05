import styles from "./style.module.css";
import { LuCalendarDays } from "react-icons/lu";
import ScenarioDetail from "./ScenarioDetail";
import { ScenarioResponse } from "src/services/scenarios/models";
import { SiteResponse } from "src/services/sites/models";
import { SubSystemResponse } from "src/services/sub-systems/models";
import { SensorResponse } from "src/services/sensors/models";

const ScenariosDetails = ({
  siteData,
  subSystems,
  sensors,
  scenarios,
}: {
  scenarios: { [key: string]: ScenarioResponse[] };
  subSystems: SubSystemResponse[];
  sensors: { [key: string]: SensorResponse[] };
  siteData: SiteResponse;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title_sec}>
        <p className={styles.title}>
          <LuCalendarDays />
          Senaryolar
        </p>
      </div>
      <div className={styles.content}>
        {Object.keys(scenarios).map((sensorId) => {
          const sensor = Object.values(sensors)
            .find((sensors) =>
              sensors.find((sensor) => sensor._id === sensorId)
            )
            ?.find((sensor) => sensor._id === sensorId);

          if (!sensor) {
            return null;
          }

          const subSystem = subSystems.find(
            (subSystem) => subSystem._id === sensor.subSystemId
          );

          if (!subSystem) {
            return null;
          }

          const sensorsScenarios = scenarios[sensorId];

          return sensorsScenarios.map((scenario) => {
            return (
              <ScenarioDetail
                key={scenario._id}
                siteData={siteData}
                subSystem={subSystem}
                scenario={scenario}
              />
            );
          });
        })}
      </div>
    </div>
  );
};

export default ScenariosDetails;
