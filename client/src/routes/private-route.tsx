import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/auth-provider";

const PrivateRoute = () => {
  const auth = useAuth();

  const isAuthenticated = auth.token;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
