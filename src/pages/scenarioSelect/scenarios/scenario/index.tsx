import { useState } from "react";
import { gsap } from "gsap";
import moment from "moment";
import { FaRegClock, FaAngleRight } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { MdOutlineSensors } from "react-icons/md";
import { TbClockEdit } from "react-icons/tb";
import { VscWholeWord } from "react-icons/vsc";
import { ScenarioResponse } from "src/services/scenarios/models";
import { SubSystemProp } from "src/utils/sub-systems/getProps";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import styles from "./style.module.css";

const ScenarioDivs = ({
  subSystemProp,
  scenario,
  handleDeleteScenario,
}: {
  subSystemProp?: SubSystemProp;
  scenario: ScenarioResponse;
  handleDeleteScenario: (scenario: ScenarioResponse) => void;
}) => {
  // Ayarların görünürlüğünü kontrol etmek için bir durum değişkeni kullanma
  const [settingsVisible, setSettingsVisible] = useState(false);

  // Ayarları göster veya gizle
  const toggleSettings = () => {
    const settingsMenu = document.getElementById("settingsMenu");
    setSettingsVisible(!settingsVisible); // Durum değişkenini tersine çevir
    if (!settingsVisible) {
      // Ayarlar görünürse
      gsap.to(settingsMenu, {
        x: 0,
        opacity: 1,
        scale: 1, // Scale 1 olacak şekilde büyüme animasyonu
        duration: 0.1,
        ease: "power3.out",
      });
    } else {
      // Ayarlar gizlenirse
      gsap.to(settingsMenu, {
        x: 0,
        opacity: 1,
        scale: 0, // Scale 0 olacak şekilde küçülme animasyonu
        duration: 0.1,
        ease: "power3.in",
      });
    }
  };

  // Menüyü gizlemek için fonksiyon
  const hideMenu = () => {
    const settingsMenu = document.getElementById("settingsMenu");
    gsap.to(settingsMenu, {
      x: 0,
      opacity: 1,
      scale: 0, // Scale 0 olacak şekilde küçülme animasyonu
      duration: 0.5,
      ease: "power3.in",
    });
    setSettingsVisible(false); // Durum değişkenini false olarak ayarla
  };

  const handleDeleteConfirmation = () => {
    setSettingsVisible(false);
    handleDeleteScenario(scenario);
  };

  return (
    <div className={`${styles.container}`}>
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.icon}>{subSystemProp?.icon}</div>
          <p className={styles.name}>{scenario.name}</p>
          <Menu>
            <MenuButton className={styles.menuButton}>
              <HiDotsHorizontal className={styles.chevronIcon} />
            </MenuButton>
            <MenuItems
              transition
              anchor="bottom end"
              className={styles.menuItems}>
              <MenuItem>
                <div className={styles.settingsTitle}>
                  <p>Düzenle / Değiştir</p>
                </div>
              </MenuItem>
              <div className={styles.menuDivider} />
              <MenuItem>
                <button className={styles.menuItem}>
                  <VscWholeWord className={styles.menuIcon} />
                  Adı Düzenle
                </button>
              </MenuItem>
              <MenuItem>
                <button className={styles.menuItem}>
                  <TbClockEdit className={styles.menuIcon} />
                  Saati Düzenle
                </button>
              </MenuItem>
              <MenuItem>
                <button className={styles.menuItem}>
                  <MdOutlineSensors className={styles.menuIcon} />
                  Sensör Düzenle
                </button>
              </MenuItem>
              <div className={styles.menuDivider} />
              <MenuItem>
                <button onClick={handleDeleteConfirmation} className={styles.menuItemDelete}>
                  <IoMdTrash className={styles.menuIcon} />
                  Sil
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>
          {/* <div className={styles.settingsTitle}>
              <p>Düzenle / Değiştir</p>
              <span
                className={styles.close}
                onClick={hideMenu}>
                <FaAngleRight />
              </span>
            </div>
            <button className={styles.settingsBtn}>
              <VscWholeWord /> Ad Düzenle
            </button>
            <button className={styles.settingsBtn}>
              <TbClockEdit /> Saat Düzenle
            </button>
            <button className={styles.settingsBtn}>
              <MdOutlineSensors /> Sensör Düzenle
            </button>
            <hr />
            <button
              className={`${styles.settingsBtn} ${styles.deleteBtn}`}
              onClick={handleDeleteConfirmation}>
              <IoMdTrash /> Sil
            </button> */}
        </div>
        <div className={styles.time}>
          <div className={styles.times}>
            <FaRegClock />
            {moment(scenario.startDate).format("HH:mm")}
          </div>
          <div>-</div>
          <div className={styles.times}>
            <FaRegClock />
            {moment(scenario.endDate).format("HH:mm")}
          </div>
        </div>
      </div>
      <div className={styles.sensors}>
        <div className={styles.sensor}>min {scenario.min}%</div>
        <div className={styles.sensor}>max {scenario.max}%</div>
      </div>
    </div>
  );
};

export default ScenarioDivs;
