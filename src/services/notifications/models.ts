// Request Models
// Response Models
export interface Notification {
  _id: string;
  type: NotificationTypeEnum;
  title: string;
  message: string;
  createdAt: string;
}

export interface NotificationWDate {
  _id: string;
  type: NotificationTypeEnum;
  title: string;
  message: string;
  createdAt: Date;
}

// General Models
export enum NotificationTypeEnum {
  Emergency = "emergency",
  Alert = "alert",
  Warning = "warning",
  Info = "info",
}
