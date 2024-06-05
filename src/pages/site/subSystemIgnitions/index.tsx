import { useEffect, useState } from "react";
import { SubSystemResponse } from "src/services/sub-systems/models";
import styles from "./style.module.css";
import getSubSystemProps, {
  SubSystemProp,
} from "src/utils/sub-systems/getProps";
import {
  getSubSystemByIdReq,
  updateIgnitionStatusReq,
} from "src/services/sub-systems";

const SubSystemIgnitions = ({
  subSystems,
}: {
  subSystems: SubSystemResponse[];
}) => {
  const [selectedSubSystem, setSelectedSubSystem] =
    useState<SubSystemResponse | null>(subSystems[0] ?? null);

  const [selectedSubSystemProps, setSelectedSubSystemProps] =
    useState<SubSystemProp | null>(null);

  useEffect(() => {
    setSelectedSubSystem(subSystems[0] ?? null);
  }, [subSystems]);

  useEffect(() => {
    if (selectedSubSystem) {
      setSelectedSubSystemProps(
        getSubSystemProps(selectedSubSystem.systemType)
      );
    }
  }, [selectedSubSystem]);

  async function updateSubSystem() {
    if (!selectedSubSystem) {
      return;
    }

    const newData = await getSubSystemByIdReq({ id: selectedSubSystem._id });

    if ("error" in newData) {
      // TODO: show error
      return;
    }

    setSelectedSubSystem(newData.result);
  }

  async function updateIgnitionStatus(
    ignitionIndex: number,
    newStatus: boolean
  ) {
    if (!selectedSubSystem) {
      return;
    }

    const status = await updateIgnitionStatusReq(
      { id: selectedSubSystem._id },
      {
        ignitionIndex,
        status: newStatus,
      }
    );

    if ("error" in status) {
      // TODO: show error
      return;
    }

    await updateSubSystem();
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles.h1}>
          {selectedSubSystemProps?.icon}{" "}
          {selectedSubSystemProps
            ? `${selectedSubSystemProps.title} ${selectedSubSystem?.name} Sistemi`
            : ""}
        </h1>
      </div>

      <div className={styles.systems}>
        {subSystems.map((subSystem) => {
          const systemInfo = getSubSystemProps(subSystem.systemType);

          if (systemInfo) {
            return (
              <label
                key={subSystem._id}
                className={`${styles.card} ${
                  selectedSubSystem?._id === subSystem._id ? styles.checked : ""
                }`}
              >
                <input
                  className={styles.radioBtn}
                  type="radio"
                  name="systemSelector"
                  value={subSystem._id}
                  checked={selectedSubSystem?._id === subSystem._id}
                  onChange={() => setSelectedSubSystem(subSystem)}
                />
                <div className={styles.info}>
                  <span className={styles.icon}>{systemInfo.icon}</span>
                </div>
              </label>
            );
          }

          return null;
        })}
      </div>

      <div className={styles.kontaklar}>
        {selectedSubSystem &&
          Array.from(
            { length: selectedSubSystem.ignitionCount },
            (_, index) => index + 1
          ).map((kontak) => (
            <div className={styles.kontak} key={kontak}>
              <p>{`Kontak ${kontak}`}</p>
              <div className={styles.checkboxDiv}>
                <label htmlFor={`checkbox-${kontak}`} className={styles.switch}>
                  <input
                    id={`checkbox-${kontak}`}
                    className={styles.checkbox}
                    type="checkbox"
                    checked={
                      selectedSubSystem.lastIgnitionStatuses[
                        kontak.toString()
                      ] === 1
                    }
                    onChange={(event) =>
                      updateIgnitionStatus(kontak, event.target.checked)
                    }
                  />
                  <span className={styles.slider}></span>
                </label>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SubSystemIgnitions;
