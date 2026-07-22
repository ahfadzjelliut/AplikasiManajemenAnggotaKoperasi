import React from "react";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

function Navbar({ role, sidebarOpen, setSidebarOpen }) {
    const nav = useNavigate();
    const handleLogout = () => {

        localStorage.removeItem("user");

        nav("/");

    };
    return (
        <nav className="sticky top-0 z-40 bg-blue-600 shadow text-white">
            <div className="flex items-center justify-between h-16 px-4 md:px-6">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="
                            md:hidden
                            p-2
                            rounded-lg
                            hover:bg-blue-700
                            transition
                        "
                    >
                        ☰
                    </button>
                    <h1 className="font-bold text-lg md:text-xl">
                        Sistem Koperasi
                    </h1>
                </div>
                <div className="flex items-center gap-4">
                    <span className="hidden sm:block capitalize">
                        {role}
                    </span>
                    <Button
                        onClick={handleLogout}
                        className="
                            bg-red-500
                            hover:bg-red-600
                            px-4
                            py-2
                            rounded-lg
                            transition
                        "
                    >
                        Logout
                    </Button>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
