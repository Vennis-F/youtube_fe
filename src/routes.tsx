import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CounterPage from "./pages/CounterPage";
import RegisterPage from "./pages/RegisterPage";
import RegisteredUsersPage from "./pages/RegisteredUsersPage";
import ShareVideoPage from "./pages/ShareVideoPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/counter" element={<CounterPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/users" element={<RegisteredUsersPage />} />
      <Route path="/share" element={<ShareVideoPage />} />
    </Routes>
  );
};

export default AppRoutes;
