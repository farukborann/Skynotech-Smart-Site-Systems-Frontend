import {
  NotificationTypeEnum,
  NotificationWDate,
} from "src/services/notifications/models";

import NotificationCard from "../notificationCard";

import styles from "./style.module.css";

const NotificationsColumn = ({
  notifications,
  columnType,
}: {
  notifications: NotificationWDate[];
  columnType: NotificationTypeEnum;
}) => {
  return (
    <div className={styles.sec}>
      <div className={styles.secTitle}>
        <span
          className={styles.sectionIcon}
          style={{
            backgroundColor:
              columnType === NotificationTypeEnum.Warning
                ? "#ffc400"
                : columnType === NotificationTypeEnum.Info
                ? "#87ceeb"
                : columnType === NotificationTypeEnum.Alert
                ? "#4c00ff"
                : "#ee3000",
          }}
        ></span>
        <h1 className={styles.titleText}>
          {columnType === NotificationTypeEnum.Warning
            ? "Önemli Uyarı"
            : columnType === NotificationTypeEnum.Info
            ? "Bilgilendirme"
            : columnType === NotificationTypeEnum.Alert
            ? "Uyarı"
            : "Acil"}
        </h1>
      </div>
      <div className={styles.secContent}>
        {notifications.map((notification) => (
          <NotificationCard
            key={notification._id}
            notification={notification}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationsColumn;
