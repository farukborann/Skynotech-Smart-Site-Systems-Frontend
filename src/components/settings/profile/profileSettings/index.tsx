import ProfileDetails from "../profileDetails";
import UploadPP from "../uploadPP";

import styles from "./style.module.css";

const ProfileSettings = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Profili Düzenle</p>
      <div className={styles.content}>
        <div className={styles.profile}>
          <UploadPP />
        </div>
        <hr />
        <div className={styles.form}>
          <ProfileDetails />
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
