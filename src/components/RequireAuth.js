import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/auth-context";

export const RequireAuth = () => {
  const {
    state: { user },
  } = useAuth();

  if (user) {
    return <Outlet />;
  }

  return <Navigate to="/login" replace />;
};
