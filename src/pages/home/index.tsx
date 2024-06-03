import DateHome from "src/components/home/dates";
import ProblemList from "src/components/home/problemList";
import ProfileSection from "src/components/home/profileSection";
import ScenariosSectionContainer from "src/components/home/scenariosSectionContainer";
import SiteList from "src/components/home/siteList";
import WeatherWidgetLatLon from "src/components/weather";

import styles from "./style.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.weather}>
          <WeatherWidgetLatLon />
        </div>
        <div className={styles.section}>
          <div className={styles.sites}>
            <SiteList />
          </div>
          <div className={styles.problems}>
            <ProblemList />
          </div>
        </div>
        <div className={styles.user}>
          <ProfileSection />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <DateHome />
        </div>
        <div className={styles.main}>
          <ScenariosSectionContainer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
