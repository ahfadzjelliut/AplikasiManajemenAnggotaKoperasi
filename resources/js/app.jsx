import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/auth/Login";

import TambahFO from "./components/feature/superadmin/TambahFO";
import FOList from "./components/feature/superadmin/FOList";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Login />}
                />
                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                >
                <Route
                    path="fo/tambah"
                    element={<TambahFO />}
                />
                <Route
                    path="fo/daftar"
                    element={<FOList />}
                />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById("app")).render(
        <App />
)
