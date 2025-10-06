// src/theme/ProtectedRoute.jsx
import { Layout } from "lucide-react";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  console.log(isAuthenticated, "auth");

  if (!isAuthenticated) {
    return <Navigate to="/login" replace/>;
  }
    console.log(isAuthenticated, "auth");

  return children; // renders the nested route (like Layout)
};

export default ProtectedRoute;