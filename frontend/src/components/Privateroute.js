import React from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const PrivateRoute = ({ protectedRoutes, unprotectedRoutes }) => {
  const role = localStorage.getItem("role");

  return role === "true" ? (
    <Outlet>{protectedRoutes}</Outlet>
  ) : (
    <Outlet>{unprotectedRoutes}</Outlet>
  );
};

export default PrivateRoute;
