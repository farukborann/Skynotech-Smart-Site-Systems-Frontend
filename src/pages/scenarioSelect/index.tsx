import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { MdDelete } from "react-icons/md";
import { useParams } from "react-router-dom";
import CreateScenario from "src/pages/scenarioSelect/scenarioCreate";
import ScenariosRUD from "src/pages/scenarioSelect/scenarios";
import ScenarioSensors from "src/pages/scenarioSelect/sensors";
import {
  deleteScenarioReq,
  getScenariosBySensorId,
  getScenariosBySubSystemId,
} from "src/services/scenarios";
import { ScenarioResponse } from "src/services/scenarios/models";
import { getSensorsBySubSystemIdReq } from "src/services/sensors";
import { SensorResponse } from "src/services/sensors/models";
import { getSiteByIdReq } from "src/services/sites";
import { SiteResponse } from "src/services/sites/models";
import { getSubSystemByIdReq } from "src/services/sub-systems";
import { SubSystemResponse } from "src/services/sub-systems/models";
import getSubSystemProps from "src/utils/sub-systems/getProps";

import styles from "./style.module.css";

const ScenarioSelect = () => {
  const { siteId, subSystemId } = useParams();

  const [siteData, setSiteData] = useState<SiteResponse | null>(null);
  const [subSystem, setSubSystem] = useState<SubSystemResponse | null>(null);
  const [sensors, setSensors] = useState<SensorResponse[]>([]);

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [scenarios, setScenarios] = useState<ScenarioResponse[]>([]);
  const pageRef = useRef(null);

  const [deleteScenarioId, setDeleteScenarioId] = useState<string | null>(null);

  async function updateSite() {
    if (!siteId || !subSystemId) return;

    const siteData = await getSiteByIdReq({ id: siteId });

    if ("error" in siteData) {
      // TODO: Handle error
      return;
    }

    setSiteData(siteData.result);
  }

  async function updateSubSystem() {
    if (!subSystemId) return;

    const subSystem = await getSubSystemByIdReq({ id: subSystemId });

    if ("error" in subSystem) {
      // TODO: Handle error
      return;
    }

    setSubSystem(subSystem.result);
  }

  async function updateSensors() {
    if (!subSystem) return;

    const sensors = await getSensorsBySubSystemIdReq({ id: subSystem._id });

    if ("error" in sensors) {
      // TODO: Handle error
      return;
    }

    setSensors(sensors.result);
  }

  async function updateScenarios() {
    if (!subSystem) return;

    const scenarios = await getScenariosBySubSystemId({ id: subSystem._id });

    if ("error" in scenarios) {
      // TODO: Handle error
      return;
    }

    setScenarios(scenarios.result);
  }

  useEffect(() => {
    updateSite();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    updateSubSystem();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siteData]);

  useEffect(() => {
    updateSensors();
    updateScenarios();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subSystem]);

  useEffect(() => {
    if (showDeleteConfirmation) {
      gsap.to(pageRef.current, {
        // Access the DOM element using current
        duration: 0.2,
        filter: "blur(10px)",
        ease: "power3.out",
      });
    } else {
      gsap.to(pageRef.current, {
        // Access the DOM element using current
        filter: "blur(0px)",
        duration: 0.2,
        ease: "power3.in",
      });
    }
  }, [showDeleteConfirmation]);

  const onCreationSuccess = async () => {
    await updateScenarios();
  };

  const handleDeleteScenario = async (scenario: ScenarioResponse) => {
    // TODO: Implement delete scenario
    setDeleteScenarioId(scenario._id);
    setShowDeleteConfirmation(true);
  };

  return (
    <>
      {showDeleteConfirmation && (
        <div className={styles.confirmationBox} id="confirmationBox">
          <div className={styles.box}>
            <h1 className={styles.text}>Silmeden önce onaylıyor musunuz?</h1>
            <div className={styles.confirmationButtons}>
              <button
                className={`${styles.confirmationButton} ${styles.confirm}`}
                onClick={async () => {
                  if (!deleteScenarioId) return;

                  const res = await deleteScenarioReq({ id: deleteScenarioId });

                  setShowDeleteConfirmation(false);

                  if ("error" in res) {
                    // TODO: Handle error
                    return;
                  }

                  await updateScenarios();
                }}
              >
                <MdDelete />
                Sil
              </button>
              <button
                className={`${styles.confirmationButton} ${styles.cancel}`}
                onClick={() => setShowDeleteConfirmation(false)}
              >
                İptal
              </button>
            </div>
          </div>
        </div>
      )}
      <div className={styles.container} ref={pageRef}>
        <div className={styles.sidebar}>
          <div className={styles.header}>
            <div className={styles.titleContainer}>
              <div className={styles.header}>
                <div className={styles.title}>
                  <p className={styles.p}>SİTE YÖNETİMİ</p>
                  <p className={styles.h1}>{`${
                    getSubSystemProps(subSystem?.systemType)?.title ?? ""
                  } ${subSystem?.name ?? ""}`}</p>
                </div>
              </div>
              <div className={styles.activities}></div>
            </div>
          </div>
          <div className={styles.form}>
            {subSystem && (
              <CreateScenario
                key={`${subSystem?._id}`}
                sensors={sensors}
                subSystem={subSystem}
                onSuccess={onCreationSuccess}
              />
            )}
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.sensorler}>
            <ScenarioSensors
              sensors={sensors}
              subSystemProp={
                getSubSystemProps(subSystem?.systemType) ?? undefined
              }
            />
          </div>
          <div className={styles.senaryolar}>
            <ScenariosRUD
              scenarios={scenarios}
              subSystemProp={
                getSubSystemProps(subSystem?.systemType) ?? undefined
              }
              handleDeleteScenario={handleDeleteScenario}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ScenarioSelect;
