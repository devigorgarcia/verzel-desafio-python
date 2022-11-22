import { Route, Routes, Navigate } from "react-router-dom";
import { AdminDashboard } from "../Pages/Dashboard";
import { HomePage } from "../Pages/HomePage";
import { LoginPage } from "../Pages/Login";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};
