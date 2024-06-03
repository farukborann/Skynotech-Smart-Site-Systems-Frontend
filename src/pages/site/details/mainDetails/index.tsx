import { GoArrowUpRight } from "react-icons/go";
import { SiteResponse } from "src/services/sites/models";

import styles from "./style.module.css";

const MainDetails = ({
  siteData,
  subSystemsCount,
  sensorsCount,
  scenariosCount,
}: {
  siteData: SiteResponse;
  subSystemsCount: number;
  sensorsCount: number;
  scenariosCount: number;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.boxL}>
        <div>
          <h1 className={styles.siteName}>{siteData.name}</h1>
          <p className={styles.adress}>{siteData.address}</p>
        </div>
        <div className={styles.numberDiv}>
          <h1 className={styles.numberText}>{subSystemsCount}</h1>
          <GoArrowUpRight />
        </div>
        <p className={styles.desc}>Toplam {subSystemsCount} sistem</p>
      </div>
      <div className={styles.content}>
        <div className={styles.boxS}>
          <div>
            <p className={styles.boxTitle}>Yöneticiler</p>
            <p className={styles.desc}>
              Toplam {siteData.admins.length + siteData.users.length} yönetici
            </p>
          </div>
          <div className={styles.numberBoxSDiv}>
            <h1 className={styles.numberS}>
              {siteData.admins.length + siteData.users.length}
            </h1>
            <GoArrowUpRight />
          </div>
        </div>
        <div className={styles.boxS}>
          <div>
            <p className={styles.boxTitle}>Senaryolar</p>
            <p className={styles.desc}>Toplam {scenariosCount} senaryo</p>
          </div>
          <div className={styles.numberBoxSDiv}>
            <h1 className={styles.numberS}>{scenariosCount}</h1>
            <GoArrowUpRight />
          </div>
        </div>
        <div className={styles.boxS}>
          <div>
            <p className={styles.boxTitle}>Sensör</p>
            <p className={styles.desc}>Toplam {sensorsCount} sensör</p>
          </div>
          <div className={styles.numberBoxSDiv}>
            <h1 className={styles.numberS}>{sensorsCount}</h1>
            <GoArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDetails;
