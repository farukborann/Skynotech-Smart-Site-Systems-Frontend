import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getScenariosBySensorId } from "src/services/scenarios";
import { ScenarioResponse } from "src/services/scenarios/models";
import { getSensorsBySubSystemIdReq } from "src/services/sensors";
import { SensorResponse } from "src/services/sensors/models";
import { getSiteByIdReq } from "src/services/sites";
import { SiteResponse } from "src/services/sites/models";
import { getSubSystemsBySiteIdReq } from "src/services/sub-systems";
import { SubSystemResponse } from "src/services/sub-systems/models";

import SiteDetails from "./details";
import SiteHeader from "./header";

// import SiteProfileControlMQTTComponent from "./mqttControl";
import styles from "./style.module.css";
import SubSystemIgnitions from "./subSystemIgnitions";

const SiteDetail = () => {
  const { siteId } = useParams();
  const [siteData, setSiteData] = useState<SiteResponse>({
    _id: "",
    name: "",
    address: "",
    province: "",
    district: "",
    mqttTopic: "",
    admins: [],
    users: [],
    deleted: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    __v: 0,
  });
  const [subSystems, setSubSystems] = useState<SubSystemResponse[]>([]);

  // subSystemId -> sensors
  const [sensors, setSensors] = useState<{
    [key: string]: SensorResponse[];
  }>({});

  // sensorId -> scenarios
  const [scenarios, setScenarios] = useState<{
    [key: string]: ScenarioResponse[];
  }>({});

  async function updateSiteData() {
    getSiteByIdReq({ id: siteId ?? "" }).then((res) => {
      if ("error" in res) {
        // TODO: check error and show
        return;
      }

      setSiteData(res.result);
    });
  }

  async function updateSubSystems() {
    if (!siteData) {
      return;
    }

    getSubSystemsBySiteIdReq({ id: siteData._id }).then((res) => {
      if ("error" in res) {
        // TODO: check error and show
        return;
      }

      setSubSystems(res.result);
    });
  }

  async function updateSensors() {
    const newSensors: { [key: string]: SensorResponse[] } = {};

    for (const subSystem of subSystems) {
      const sensors = await getSensorsBySubSystemIdReq({ id: subSystem._id });

      if ("error" in sensors) {
        // TODO: check error and show
        return;
      }

      newSensors[subSystem._id] = sensors.result;
    }

    setSensors(newSensors);
  }

  async function updateScenarios() {
    const newScenarios: { [key: string]: ScenarioResponse[] } = {};

    for (const sensor of Object.values(sensors).flat()) {
      const scenarios = await getScenariosBySensorId({ id: sensor._id });

      if ("error" in scenarios) {
        // TODO: check error and show
        return;
      }

      newScenarios[sensor._id] = scenarios.result;
    }

    setScenarios(newScenarios);
  }

  useEffect(() => {
    if (!siteId) return;

    updateSiteData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siteId]);

  useEffect(() => {
    updateSubSystems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siteData]);

  useEffect(() => {
    updateSensors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subSystems]);

  useEffect(() => {
    updateScenarios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sensors]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <SiteHeader siteData={siteData!} subSystems={subSystems} />
      </div>
      <div className={styles.main}>
        <SiteDetails
          siteData={siteData!}
          subSystems={subSystems}
          sensors={sensors}
          scenarios={scenarios}
        />
        <SubSystemIgnitions subSystems={subSystems} />
      </div>
    </div>
  );
};

export default SiteDetail;
