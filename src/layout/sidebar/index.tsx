import { BsFillHousesFill } from "react-icons/bs";
import {
  IoCalendarClearOutline,
  IoNotificationsOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { TbSmartHome, TbLogout } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import logo from "src/assets/logo.svg";

import styles from "./style.module.css";

function Sidebar() {
  const location = useLocation();

  const handleLogout = () => {
    // TODO: logout
  };

  return (
    <div className={styles.container}>
      <Link
        to="/home"
        className={`${styles.sidebar_link} ${styles.icon_1}`}>
        <img
          src={logo}
          alt="Skynotech"
          width={100}
          className={styles.logo}
        />
      </Link>

      <Link
        to={"/home"}
        className={`${styles.sidebar_link} ${
          location.pathname === "/home" ||
          location.pathname.startsWith("/site/")
            ? `${styles.active_icon} ${styles.icon_2}`
            : `${styles.sidebar_icon} ${styles.icon_2}`
        }`}>
        <TbSmartHome />
      </Link>
      <Link
        to="/scenario"
        className={`${styles.sidebar_link} ${
          location.pathname.startsWith("/scenario")
            ? `${styles.active_icon} ${styles.icon_3}`
            : `${styles.sidebar_icon} ${styles.icon_3}`
        }`}>
        <IoCalendarClearOutline />
      </Link>
      <Link
        to="/sites"
        className={`${styles.sidebar_link} ${
          location.pathname === "/sites"
            ? `${styles.active_icon} ${styles.icon_4}`
            : `${styles.sidebar_icon} ${styles.icon_4}`
        }`}>
        <BsFillHousesFill />
      </Link>
      <Link
        to="/notifications"
        className={`${styles.sidebar_link} ${
          location.pathname === "/notifications"
            ? `${styles.active_icon} ${styles.icon_5}`
            : `${styles.sidebar_icon} ${styles.icon_5}`
        }`}>
        <IoNotificationsOutline />
      </Link>
      <Link
        to="/settings"
        className={`${styles.sidebar_link} ${
          location.pathname.startsWith("/settings")
            ? `${styles.active_icon} ${styles.icon_6}`
            : `${styles.sidebar_icon} ${styles.icon_6}`
        }`}>
        <IoSettingsOutline />
      </Link>
      <Link
        to="/login"
        className={`${styles.sidebar_icon} ${styles.icon_7}`}
        onClick={handleLogout}>
        <TbLogout />
      </Link>
      <span className={getClassname(location.pathname)}></span>
    </div>
  );
}

function getClassname(pathname: string) {
  if (pathname.startsWith("/scenario")) {
    if (pathname.match(/^\/scenario\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+$/)) {
      return `${styles.icon_scenario_span} ${styles.span}`;
    } else {
      return `${styles.icon_3_span} ${styles.span}`;
    }
  } else if (pathname === "/sites") {
    return `${styles.icon_4_span} ${styles.span}`;
  } else if (pathname === "/notifications") {
    return `${styles.icon_5_span} ${styles.span}`;
  } else if (pathname.startsWith("/settings")) {
    return `${styles.icon_6_span} ${styles.span}`;
  } else if (pathname.startsWith("/site")) {
    return styles.span;
  } else if (pathname === "/home") {
    return `${styles.icon_2_span} ${styles.span}`;
  } else {
    return styles.login;
  }
}

export default Sidebar;
