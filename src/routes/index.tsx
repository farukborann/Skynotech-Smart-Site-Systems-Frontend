import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { Loader } from "../components/loader";
import SiteDetail from "../pages/site";

const RootLayout = lazy(() => import("src/layout"));
const AuthProvider = lazy(() => import("src/providers/AuthProvider"));
const LoginPage = lazy(() => import("../pages/login"));
const HomePage = lazy(() => import("../pages/home"));
const NotFoundPage = lazy(() => import("../pages/404"));

const RouteList = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/" element={<AuthProvider />}>
          <Route path="" element={<RootLayout />}>
            <Route index path="/home" element={<HomePage />} />

            <Route path="/site/:siteId" element={<SiteDetail />} />
            {/* <Route path="/scenario/:siteId/:subSystemId" element={<SiteProfileControlMQTTComponent />} /> */}
          </Route>
        </Route>

        {/* <Route path="/404" element={<NotFoundPage />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default RouteList;
