import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import Content from "../components/layout/Content";


function MainLayout({ isi }) {

    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="flex">
                <Sidebar />
                <Content >
                    {isi}
                </Content>
            </div>
        </div>
    );
}
export default MainLayout;
