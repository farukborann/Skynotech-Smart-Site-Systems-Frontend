import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import AuthProvider from "../providers/AuthProvider";

const LoginPage = lazy(() => import("../pages/login"));
const HomePage = lazy(() => import("../pages/home"));
const NotFoundPage = lazy(() => import("../pages/404"));

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthProvider />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Route>

      {/* <Route path="/404" element={<NotFoundPage />} /> */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RouteList;
