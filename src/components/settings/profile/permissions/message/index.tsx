import { useState, useEffect } from "react";

import styles from "./style.module.css";

const MessagePermissionComponent = ({
  openMessage,
  setOpenProfile,
  setOpenContact,
  setOpenMessage,
}: {
  openMessage: boolean;
  setOpenProfile: (value: boolean) => void;
  setOpenContact: (value: boolean) => void;
  setOpenMessage: (value: boolean) => void;
}) => {
  const [selectedPermission, setSelectedPermission] = useState("3"); // Default olarak herkes seçili

  // Seçili olan radio butonun içindeki metni döndüren bir fonksiyon
  const getPermissionText = (value: string) => {
    switch (value) {
      case "0":
        return "Yalnızca Developerlar";
      case "1":
        return "Super Adminler";
      case "2":
        return "Adminler";
      case "3":
        return "Herkes";
      default:
        return "";
    }
  };

  // Component ilk render edildiğinde, seçili olan değeri almak için bir useEffect kullanalım
  useEffect(() => {
    // localStorage'da saklanan bir değer varsa onu alıyoruz
    const storedPermission = localStorage.getItem("messagePermission");
    if (storedPermission) {
      setSelectedPermission(storedPermission);
    }
  }, [selectedPermission]);

  // Radio buton seçimi değiştiğinde, seçilen değeri localStorage'a kaydedelim
  const handlePermissionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedValue = event.target.value;
    setSelectedPermission(selectedValue);
    localStorage.setItem("messagePermission", selectedValue);
  };

  const handleOpen = () => {
    setOpenMessage(!openMessage);
    setOpenContact(false);
    setOpenProfile(false);
  };

  return (
    <div className={`${styles.profile} ${styles.permission}`}>
      <div className={styles.header}>
        <p className={styles.sec_title}>Mesaj</p>
        <p className={styles.sec_desc}>
          Kimlerin sizlere mesaj ve bildirim gönderebileceğini seçiniz.
        </p>
      </div>
      <div className={styles.dropdown}>
        <button onClick={() => handleOpen()} className={styles.trigger}>
          {getPermissionText(selectedPermission)}
        </button>
        <div
          className={styles.menu}
          style={{ display: openMessage ? "flex" : "none" }}
        >
          <label className={styles.item}>
            <input
              name="permission"
              type="radio"
              value="0"
              className={styles.input}
              onChange={handlePermissionChange}
              checked={selectedPermission === "0"}
            />
            Yalnızca Developerlar
          </label>
          <label className={styles.item}>
            <input
              name="permission"
              type="radio"
              value="1"
              className={styles.input}
              onChange={handlePermissionChange}
              checked={selectedPermission === "1"}
            />
            Super Adminler
          </label>
          <label className={styles.item}>
            <input
              name="permission"
              type="radio"
              value="2"
              className={styles.input}
              onChange={handlePermissionChange}
              checked={selectedPermission === "2"}
            />
            Adminler
          </label>
          <label className={styles.item}>
            <input
              name="permission"
              type="radio"
              value="3"
              className={styles.input}
              onChange={handlePermissionChange}
              checked={selectedPermission === "3"}
            />
            Herkes
          </label>
        </div>
      </div>
    </div>
  );
};

export default MessagePermissionComponent;
