import React from "react";
import MainLayout from "../../layouts/MainLayout";

function Dashboard() {
    const role = 'superadmin';
    return (
        <MainLayout role={role} />
    );
}
export default Dashboard;
