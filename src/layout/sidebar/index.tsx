import { BsFillHousesFill } from "react-icons/bs";
import {
  IoCalendarClearOutline,
  IoNotificationsOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { TbSmartHome, TbLogout } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import logo from "src/assets/logo.svg";

import "src/styles/sidebar.css";

function Sidebar() {
  const location = useLocation();

  const handleLogout = () => {
    // TODO: logout
  };

  return (
    <div className="sidebarContainer">
      <Link to="/home" className="sidebar-link icon-1">
        <img src={logo} alt="Skynotech" width={100} className="logo" />
      </Link>

      <Link
        to={"/home"}
        className={`sidebar-link ${
          location.pathname === "/home" ||
          location.pathname.startsWith("/site/")
            ? "activeIcon icon-2"
            : "sbIcon icon-2"
        }`}
      >
        <TbSmartHome />
      </Link>
      <Link
        to="/scenario"
        className={`sidebar-link ${
          location.pathname.startsWith("/scenario")
            ? "activeIcon icon-3"
            : "sbIcon icon-3"
        }`}
      >
        <IoCalendarClearOutline />
      </Link>
      <Link
        to="/sites"
        className={`sidebar-link ${
          location.pathname === "/sites" ? "activeIcon icon-4" : "sbIcon icon-4"
        }`}
      >
        <BsFillHousesFill />
      </Link>
      <Link
        to="/notifications"
        className={`sidebar-link ${
          location.pathname === "/notifications"
            ? "activeIcon icon-5"
            : "sbIcon icon-5"
        }`}
      >
        <IoNotificationsOutline />
      </Link>
      <Link
        to="/settings"
        className={`sidebar-link ${
          location.pathname.startsWith("/settings")
            ? "activeIcon icon-6"
            : "sbIcon icon-6"
        }`}
      >
        <IoSettingsOutline />
      </Link>
      <Link to="/login" className="sbIcon icon-7" onClick={handleLogout}>
        <TbLogout />
      </Link>
      <span className={getClassname(location.pathname)}></span>
    </div>
  );
}

function getClassname(pathname: string) {
  if (pathname.startsWith("/scenario")) {
    if (pathname.match(/^\/scenario\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+$/)) {
      return "icon-scenario-span span";
    } else {
      return "icon-3-span span";
    }
  } else if (pathname === "/sites") {
    return "icon-4-span span";
  } else if (pathname === "/notifications") {
    return "icon-5-span span";
  } else if (pathname.startsWith("/settings")) {
    return "icon-6-span span";
  } else if (pathname.startsWith("/site")) {
    return "span";
  } else if (pathname === "/") {
    return "icon-2-span span";
  } else {
    return "login";
  }
}

export default Sidebar;
