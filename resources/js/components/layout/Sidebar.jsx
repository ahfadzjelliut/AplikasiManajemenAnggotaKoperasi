import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar({arah,isi}) {
    return (
        <aside className="w-64 bg-white border-r min-h-screen">
            <div className="p-5">
                <h2 className="font-bold mb-4">
                    Menu
                </h2>
                <nav className="space-y-2">
                    <NavLink to={arah} className="block p-3 rounded-lg hover:bg-blue-100">
                        {isi}
                    </NavLink>
                </nav>
            </div>
        </aside>
    );
}
export default Sidebar;
