import React from "react";
import MainLayout from "../../layouts/MainLayout";

function Dashboard() {
    const user = JSON.parse(
            localStorage.getItem("user")
        );

        if (!user) {
            window.location.href = "/";
            return null;
        }
    return (
        <MainLayout nama={user.nama} role={user.role} />
    );
}
export default Dashboard;
