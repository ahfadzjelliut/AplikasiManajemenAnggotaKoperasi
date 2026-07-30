import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import Content from "../components/layout/Content";

function MainLayout({ nama, role }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar nama={nama} role={role} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="flex">
                <Sidebar role={role} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main className="flex-1 p-6 md:p-4 sm:p-0">
                    <Content />
                </main>
            </div>
        </div>
    );
}
export default MainLayout;
