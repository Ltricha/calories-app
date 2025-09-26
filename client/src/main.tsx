import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./globals.css";
import Login from "./pages/account/login/login.tsx";
import Rapport from "./pages/rapport/rapport.tsx";
import CreateRapport from "./pages/rapport/create-rapport.tsx";
import Dashboard from "./pages/dashboard/dashboard.tsx";
import { StrictMode } from "react";
import AuthProvider from "./hooks/auth-provider.tsx";
import PrivateRoute from "./routes/private-route.tsx";
import Profile from "./pages/profile/profile.tsx";
import Register from "./pages/account/register/register.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="rapport">
              <Route index element={<Rapport />} />
              <Route path="create-rapport" element={<CreateRapport />} />
            </Route>
          </Route>
        </Routes>
        <Routes>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
