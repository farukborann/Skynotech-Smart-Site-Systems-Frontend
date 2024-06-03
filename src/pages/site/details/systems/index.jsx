import React from "react";
import styles from "./style.module.css";
import getIconForSystem from "@/utils/getIconForSystems";
import gsap from "gsap";

const SiteProfileControlSystemsComponent = ({
  siteDetail,
  handleSystemSelect,
  selectedSystem,
}) => {
  return (
    <div className={styles.systems}>
      {siteDetail.systems.map((systemNumber) => {
        const systemInfo = getIconForSystem(systemNumber);

        if (systemInfo) {
          return (
            <label
              key={systemNumber}
              className={`${styles.card} ${
                selectedSystem === systemNumber ? styles.checked : ""
              }`}>
              <input
                className={styles.radioBtn}
                type="radio"
                name="systemSelector"
                value={systemNumber}
                checked={selectedSystem === systemNumber}
                onChange={() => handleSystemSelect(systemNumber)}
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
  );
};

export default SiteProfileControlSystemsComponent;
