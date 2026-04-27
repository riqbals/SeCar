import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/main/Home";
import Login from "../pages/auth/Login";
import HasilPerjalanan from "../pages/hasil/HasilPerjalanan";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hasil" element={<HasilPerjalanan />} />
      </Routes>
    </BrowserRouter>
  );
}