import React from "react";
import styles from "./style.module.css";
import { LuCalendarDays } from "react-icons/lu";
import SiteProfileScenarioItem from "./ScenarioItem";

const SiteProfileScenariosComponent = ({ scenarios, siteDetail }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title_sec}>
        <p className={styles.title}>
          <LuCalendarDays />
          Senaryolar
        </p>
      </div>
      <div className={styles.content}>
        {scenarios.map((item) => {
          return (
            <SiteProfileScenarioItem
              key={item.name}
              item={item}
              siteDetail={siteDetail}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SiteProfileScenariosComponent;
