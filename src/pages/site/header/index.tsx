import { useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import { LuCalendarPlus } from "react-icons/lu";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DefaultPP from "src/assets/profil.svg";
import getSubSystemProps from "src/utils/sub-systems/getProps";

import { SiteResponse } from "src/services/sites/models";
import { SubSystemResponse } from "src/services/sub-systems/models";
import { RootState } from "src/store/Reducers";

import styles from "./style.module.css";

const SiteProfileHeaderComponent = ({
  siteData,
  subSystems,
}: {
  siteData: SiteResponse;
  subSystems: SubSystemResponse[];
}) => {
  const userData = useSelector((state: RootState) => state.userData.data);

  const [isDropdownVisible, setIsDropdownVisible] = useState(true);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className={styles.header}>
      <h1 className={styles.mainTitle}>
        Merhaba, <span className={styles.name}>{userData?.firstName}</span>
      </h1>
      <div className={styles.navigates}>
        <div className={styles.navigate}>
          <button className={styles.btn} onClick={toggleDropdown}>
            <LuCalendarPlus />
          </button>
          <div
            className={`${styles.ddContent} ${
              isDropdownVisible ? styles.visible : ""
            }`}
          >
            <p className={styles.ddTitle}>SENARYO OLUŞTUR</p>
            <hr />
            <div className={styles.ddElements}>
              {subSystems.map((subSystem) => {
                const props = getSubSystemProps(subSystem.systemType);
                return (
                  <Link
                    key={props?.link}
                    className={styles.ddLink}
                    to={`/scenario/${siteData._id}/${subSystem._id}`}
                  >
                    {props?.icon} {`${props?.title} ${subSystem.name}`}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.navigate}>
          <button className={styles.btn}>
            <IoIosNotifications />
          </button>
        </div>
        <button className={styles.navigate}>
          <img
            className={styles.profile}
            src={userData.profilePhoto ? userData.profilePhoto : DefaultPP}
            alt={`${userData.firstName} ${userData.lastName}`}
          />
        </button>
      </div>
    </div>
  );
};

export default SiteProfileHeaderComponent;
