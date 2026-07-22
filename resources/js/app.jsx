import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/auth/Login";

import TambahFO from "./components/feature/superadmin/TambahFO";
import FOList from "./components/feature/superadmin/FOList";
import UbahFO from "./components/feature/superadmin/UbahFO";
import AnggotaFO from "./components/feature/superadmin/AnggotaFO";
import AnggotaForm from "./components/feature/frontoffice/AnggotaForm";
import AnggotaTabel from "./components/feature/frontoffice/AnggotaTabel";
import ListAnggota from "./components/feature/anggota/ListAnggota";
import UbahDiri from "./components/feature/anggota/UbahDataDiri";
import DashboardHome from "./components/feature/superadmin/DashboardHome";
import AnggotaUbah from "./components/feature/frontoffice/AnggotaUbah";


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
                    index
                    element={<DashboardHome />}
                />
                <Route
                    path="fo/tambah"
                    element={<TambahFO />}
                />
                <Route
                    path="fo/daftar"
                    element={<FOList />}
                />
                <Route
                    path="fo/ubah/:id"
                    element={<UbahFO />}
                />
                <Route
                    path="fo/anggota/:id"
                    element={<AnggotaFO />}
                />
                <Route
                    path="anggota/tambah"
                    element={<AnggotaForm />}
                />
                <Route
                    path="anggota/daftar"
                    element={<AnggotaTabel />}
                />
                <Route
                    path="anggota/ubah/:id"
                    element={<AnggotaUbah />}
                />
                <Route
                    path="diri/anggota-tim"
                    element={<ListAnggota />}
                />
                <Route
                    path="diri/ubah"
                    element={<UbahDiri />}
                />
                </Route>
            </Routes>
            </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById("app")).render(
        <App />
)
