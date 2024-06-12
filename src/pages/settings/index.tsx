import { TbSettings } from "react-icons/tb";
import { useLocation } from "react-router-dom";
import SettingsNavigation from "src/components/settings/navigation";
import GeneralSettings from "src/components/settings/profile/generalSettings";

import styles from "./style.module.css";

const SettingsPage = () => {
  const location = useLocation();

  return (
    <div className={styles.settingsMainContainer}>
      <div className={styles.sidebarSettings}>
        <SettingsNavigation />
      </div>
      <div className={styles.head}></div>
      <div className={styles.title}>
        <TbSettings />
        <h1>Ayarlar</h1>
      </div>
      <main className={styles.settingsContent}>
        {location.pathname === "/settings" ? (
          <GeneralSettings />
        ) : location.pathname === "/settings/user-list" ? (
          <h1>Notifications</h1>
        ) : (
          <h1>Other</h1>
        )}
      </main>
    </div>
  );
};

export default SettingsPage;
