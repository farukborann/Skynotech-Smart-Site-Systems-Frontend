import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { profileReq } from "../services/users";

const AuthProvider = () => {
  let navigate = useNavigate();

  useEffect(() => {
    profileReq().then((res) => {
      if ("error" in res) {
        sessionStorage.clear();
        navigate("/login");
        return;
      }

      navigate("/dashboard");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Outlet />;
};

export default AuthProvider;
