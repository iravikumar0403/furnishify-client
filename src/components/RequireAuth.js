import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth-context";

export const RequireAuth = () => {
  const {
    state: { user },
  } = useAuth();
  const { pathname } = useLocation();

  if (user) {
    return <Outlet />;
  }

  return <Navigate to="/login" replace state={{ from: pathname }} />;
};
