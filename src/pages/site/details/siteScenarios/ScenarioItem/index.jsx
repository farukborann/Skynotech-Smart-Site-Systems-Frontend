"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "./style.module.css";
import { LuCalendarClock } from "react-icons/lu";
import FetchUsers from "@/utils/firebaseFuncs/fetchUsers";
import getIconForSystem from "@/utils/getIconForSystems";

const SiteProfileScenarioItem = ({ item, siteDetail }) => {
  const users = FetchUsers();
  const [managersProfiles, setManagersProfiles] = useState([]);

  // siteDetail.managers dizisinin referansını sabit tutmak için useRef kullanın
  const managersRef = useRef(siteDetail.managers);

  useEffect(() => {
    // managersRef.current her zaman aynı referansı tutar
    const filteredManagersProfiles = users.filter((user) =>
      managersRef.current.includes(user.id)
    );
    setManagersProfiles(filteredManagersProfiles);
  }, [users]); // users dizisine bağlı olarak yeniden etkileşim sağlayın

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.icon}>{getIconForSystem(item.system).icon}</div>
        <div className={styles.title}>
          <p className={styles.name}>{item.name}</p>
          <p className={styles.times}>
            <LuCalendarClock />
            {item.startTime} - {item.endTime}
          </p>
        </div>
      </div>
      <div className={styles.managers}>
        {managersProfiles.map((profile) => (
          <img
            className={styles.manager}
            src={profile.profile}
            alt={profile.name}
            key={profile.id}
          />
        ))}
      </div>
    </div>
  );
};

export default SiteProfileScenarioItem;
