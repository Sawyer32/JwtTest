import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import { ProtectedRoute } from "./Auth/ProtectedRoute";
import { ProtectedLayout } from "./components/ProtectedLayout";
import { ProfilePage } from "./components/ProfilePage";
import PrivateRoutes from "./Auth/PrivateRoutes";

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
