import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import NotFoundPage from "../pages/404";
import AuthProvider from "../providers/AuthProvider";

const LoginPage = lazy(() => import("../pages/login"));

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthProvider />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default RouteList;
