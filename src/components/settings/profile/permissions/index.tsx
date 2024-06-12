import { useState } from "react";

import ContactPermissionComponent from "./contact";
import MessagePermissionComponent from "./message";
import ProfilePermissionComponent from "./profile";

import styles from "./style.module.css";

const PermissionSettings = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);

  return (
    <div className={styles.container}>
      <p className={styles.title}>İzinler</p>
      <div className={styles.content}>
        <ProfilePermissionComponent
          openProfile={openProfile}
          setOpenProfile={setOpenProfile}
          setOpenContact={setOpenContact}
          setOpenMessage={setOpenMessage}
        />
        <ContactPermissionComponent
          openContact={openContact}
          setOpenProfile={setOpenProfile}
          setOpenContact={setOpenContact}
          setOpenMessage={setOpenMessage}
        />
        <MessagePermissionComponent
          openMessage={openMessage}
          setOpenProfile={setOpenProfile}
          setOpenContact={setOpenContact}
          setOpenMessage={setOpenMessage}
        />
      </div>
    </div>
  );
};

export default PermissionSettings;
