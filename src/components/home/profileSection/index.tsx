import { FaAngleRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DefaultPP from "src/assets/profil.svg";
import { RootState } from "src/store/Reducers";

import styles from "./style.module.css";

const ProfileSection = () => {
  const currentUser = useSelector((state: RootState) => state.userData.data);

  return (
    <div className={styles.container}>
      <img
        src={currentUser?.profilePhoto || DefaultPP}
        alt={`${currentUser?.firstName} ${currentUser?.lastName}`}
        className={styles.profileThumbnail}
        height={40}
        width={40}
      />
      <div className={styles.infos}>
        <div className={styles.user}>
          <p className={styles.name}>
            {currentUser?.firstName} {currentUser?.lastName}
          </p>
          <p className={styles.role}>{currentUser?.role}</p>
        </div>
        <Link to="/settings" className={styles.go}>
          <FaAngleRight />
        </Link>
      </div>
    </div>
  );
};

export default ProfileSection;
