import "./styles.css";
import { useContext } from "react";
import Login from "../pages/Login.js";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Register from "../pages/Register.js";
import Dashboard from "../pages/Dashboard.js";
import { useAuth } from "./useAuth/useAuth";
import Invoices from "../pages/Dashboard.js";
import Invoice from "../pages/Invoice.js";
import Data from "../src/Data.js";
import UserContextProvider from "./UserContext/UserContext";

export default function App(UserContextProvider) {
  const user = useContext(UserContextProvider);
  const ProtectedRoute = ({ user, children }) => {
    if (!user) {
      return <Navigate to="/login" replace />;
    }

    return children;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="invoices" element={<Invoices />}>
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
