import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiQuestionnaireLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import NotificationsColumn from "src/components/notifications/notificationsColumn";
import { getUsersNotifications } from "src/services/notifications";
import {
  NotificationTypeEnum,
  NotificationWDate,
} from "src/services/notifications/models";

import styles from "./style.module.css";

const compareDates = (a: Date, b: Date) => {
  return b.valueOf() - a.valueOf();
};

const NotificationsPage = () => {
  const [emergencyNotifications, setEmergencyNotifications] = useState<
    NotificationWDate[]
  >([]);
  const [warningNotifications, setWarningNotifications] = useState<
    NotificationWDate[]
  >([]);
  const [alertNotifications, setAlertNotifications] = useState<
    NotificationWDate[]
  >([]);
  const [infoNotifications, setInfoNotifications] = useState<
    NotificationWDate[]
  >([]);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getUsersNotifications().then((data) => {
      if ("error" in data) {
        // TODO: Handle error
        return;
      }

      setEmergencyNotifications(
        data.result
          .filter((x) => x.type === NotificationTypeEnum.Emergency)
          .map((x) => {
            return {
              ...x,
              createdAt: new Date(x.createdAt),
            };
          })
          .sort((x, y) => compareDates(x.createdAt, y.createdAt))
      );
      setWarningNotifications(
        data.result
          .filter((x) => x.type === NotificationTypeEnum.Warning)
          .map((x) => {
            return {
              ...x,
              createdAt: new Date(x.createdAt),
            };
          })
          .sort((x, y) => compareDates(x.createdAt, y.createdAt))
      );
      setAlertNotifications(
        data.result
          .filter((x) => x.type === NotificationTypeEnum.Alert)
          .map((x) => {
            return {
              ...x,
              createdAt: new Date(x.createdAt),
            };
          })
          .sort((x, y) => compareDates(x.createdAt, y.createdAt))
      );
      setInfoNotifications(
        data.result
          .filter((x) => x.type === NotificationTypeEnum.Info)
          .map((x) => {
            return {
              ...x,
              createdAt: new Date(x.createdAt),
            };
          })
          .sort((x, y) => compareDates(x.createdAt, y.createdAt))
      );
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.head}>
            <span className={styles.headIcon}>
              <IoNotificationsOutline />
            </span>
            <h1 className={styles.headTitle}>Bildirimler</h1>
          </div>
          <div className={styles.sidebar}>
            <p className={styles.text}>
              Bu sayfa, konut ve sitelerde meydana gelen çeşitli sorunları ve
              önemli bilgileri anlık olarak yöneten bir bildirim sistemi
              sunmaktadır.
              <br /> <br />
              Bu panel, yöneticilere anında geri bildirim sağlayarak sorunlara
              hızlı bir şekilde müdahale etmelerini ve önemli bilgileri takip
              etmelerini sağlar.
            </p>
            <Link className={styles.contact} to="/settings/contact">
              <RiQuestionnaireLine />
              İletişime Geç
            </Link>
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.mainHeader}>
            <div className={styles.searchbarDiv}>
              <label className={styles.label}>
                <IoIosSearch />
              </label>
              <input
                className={styles.searchbar}
                type="text"
                placeholder="Ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.sections}>
            <NotificationsColumn
              notifications={emergencyNotifications}
              columnType={NotificationTypeEnum.Emergency}
            />
            <NotificationsColumn
              notifications={alertNotifications}
              columnType={NotificationTypeEnum.Alert}
            />
            <NotificationsColumn
              notifications={warningNotifications}
              columnType={NotificationTypeEnum.Warning}
            />
            <NotificationsColumn
              notifications={infoNotifications}
              columnType={NotificationTypeEnum.Info}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
