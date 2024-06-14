import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const doctor = localStorage.getItem("doctor");
  const patient = localStorage.getItem("patient");
  const admin = localStorage.getItem("admin");
  const isAuthenticated = doctor || patient || admin;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, []);

  return children;
};

export default ProtectedRoute;