import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import Content from "../components/layout/Content";


function MainLayout({ children }) {

    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="flex">
                <Sidebar />
                <Content >
                    {children}
                </Content>
            </div>
        </div>
    );
}
export default MainLayout;
