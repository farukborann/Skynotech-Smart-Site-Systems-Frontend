import PermissionSettings from "src/components/settings/profile/permissions";
import ProfileSettings from "src/components/settings/profile/profileSettings";

import styles from "./style.module.css";

const GeneralSettings = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Profil</h3>
        <h4 className={styles.info}>
          Profiliniz ile ilgili ayarlamaları bu sekmeden kolaylıkla
          yapabileceğinizi umuyoruz. Bazı önemli değişiklikler, hata kontrolü ve
          güvenlik adına sizinle iletişim halinde kalabilmemiz için Skynotech
          firması özelinde yapılacaktır.
        </h4>
      </div>
      <hr className={styles.line} />
      <div className={styles.content}>
        <ProfileSettings />
        <PermissionSettings />
      </div>
    </div>
  );
};

export default GeneralSettings;
