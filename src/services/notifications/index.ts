import { getReq } from "..";

import { Notification } from "./models";

export async function getUsersNotifications() {
  const data = await getReq<Notification[]>(`/notifications`);

  return data;
}
