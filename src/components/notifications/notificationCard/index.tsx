import moment from "moment";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import {
  NotificationTypeEnum,
  NotificationWDate,
} from "src/services/notifications/models";

import styles from "./style.module.css";

const getFormattedDate = (date: Date) => {
  const currentDate = moment().startOf("day");
  const notificationDateObj = moment(date).startOf("day");

  const diffInDays = currentDate.diff(notificationDateObj, "days");

  if (diffInDays === 0) {
    return "Bugün";
  } else if (diffInDays === 1) {
    return "Dün";
  } else {
    return `${diffInDays} gün önce`;
  }
};

const NotificationCard = ({
  notification,
}: {
  notification: NotificationWDate;
}) => {
  return (
    <div className={styles.notificationDiv}>
      <div className={styles.divHeader}>
        <p className={styles[notification.type]}>
          {notification.type === NotificationTypeEnum.Warning
            ? "Önemli Uyarı"
            : notification.type === NotificationTypeEnum.Info
            ? "Bilgilendirme"
            : notification.type === NotificationTypeEnum.Alert
            ? "Alert"
            : "Acil"}
        </p>
        <div className={styles.selector}>
          <BsThreeDotsVertical className={styles.set} />
        </div>
      </div>
      <div className={styles.divMain}>
        <h2 className={styles.problemTitle}>{notification.title}</h2>
        <p className={styles.problemText}>{notification.message}</p>
      </div>
      <div className={styles.dateAndSite}>
        <span className={styles.date}>
          <CiCalendar />
          {getFormattedDate(notification.createdAt)}
        </span>
        {/* <span className={styles.site}>{notification.site}</span> */}
      </div>
      {/* <div className={styles.divFooter}>
        <Image
          src={notification.user}
          height={50}
          width={50}
          className={styles.profileImg}
          alt={notification.user}
        />
      </div> */}
    </div>
  );
};

export default NotificationCard;
