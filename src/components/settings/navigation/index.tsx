import { CgDarkMode, CgLoadbarDoc } from "react-icons/cg";
import { IoShareSocialOutline } from "react-icons/io5";
import { RiUser3Line, RiQuestionnaireLine } from "react-icons/ri";
import { TbUsers, TbLogout } from "react-icons/tb";
import { VscSymbolColor } from "react-icons/vsc";
import { Link, useLocation } from "react-router-dom";
import { logoutReq } from "src/services/users";

import styles from "./style.module.css";

const SettıngsNavigation = () => {
  const location = useLocation();

  async function handleLogout() {
    const res = await logoutReq();

    if ("error" in res)
      return alert("Bir hata oluştu. Lütfen daha sonra tekrar deneyin.");

    window.location.href = "/login";
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarSecFirst}>
        <div className={styles.sidebarSec}>
          <h4>Profil</h4>
          <Link
            to="/settings"
            className={
              location.pathname === "/settings" ? `${styles.activeBar}` : ""
            }
          >
            <RiUser3Line />
            Profilini Düzenle
          </Link>
          <Link
            to="/settings/user-list"
            className={
              location.pathname === "/settings/user-list"
                ? `${styles.activeBar}`
                : ""
            }
          >
            <TbUsers />
            Kullanıcı Listesi
          </Link>
        </div>
        <div className={styles.sidebarSec}>
          <h4>Tercihler</h4>
          <Link
            to="/settings/dark-mode"
            className={
              location.pathname === "/settings/dark-mode"
                ? `${styles.activeBar}`
                : ""
            }
          >
            <CgDarkMode />
            Karanlık Mod
          </Link>
          <Link
            to="/settings/theme"
            className={
              location.pathname === "/settings/theme"
                ? `${styles.activeBar}`
                : ""
            }
          >
            <VscSymbolColor />
            Temalar
          </Link>
        </div>
        <div className={styles.sidebarSec}>
          <h4>Uygulama</h4>
          <Link
            to="/settings/docs"
            className={
              location.pathname === "/settings/docs"
                ? `${styles.activeBar}`
                : ""
            }
          >
            <CgLoadbarDoc />
            Dökümantasyonlar
          </Link>
          <Link
            to="/settings/social"
            className={
              location.pathname === "/settings/social"
                ? `${styles.activeBar}`
                : ""
            }
          >
            <IoShareSocialOutline />
            Sosyal Medya
          </Link>
        </div>
      </div>
      <div className={styles.sidebarSecLast}>
        <div className={styles.sidebarSec}>
          <Link
            to="/settings/contact"
            className={
              location.pathname === "/settings/contact"
                ? `${styles.activeBar}`
                : ""
            }
          >
            <RiQuestionnaireLine />
            Destek
          </Link>
          <div onClick={handleLogout} className={styles.logout}>
            <TbLogout />
            Çıkış Yap
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettıngsNavigation;
