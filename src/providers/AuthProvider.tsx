import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import { GetProfileThunk } from "../store/Reducers/Account/thunks";

const AuthProvider = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetProfileThunk() as any);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Outlet />;
};

export default AuthProvider;
