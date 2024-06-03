import { Outlet } from "react-router-dom";

import Sidebar from "./sidebar";

export default function RootLayout() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}
