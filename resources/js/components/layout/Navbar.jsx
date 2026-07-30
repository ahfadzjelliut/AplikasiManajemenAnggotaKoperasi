
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

function Navbar({ nama, role, sidebarOpen, setSidebarOpen }) {
    const nav = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("user");
        nav("/");
    };
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    const formatTime = (date) => {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${hours}:${minutes}:${seconds}`;
    };
    return (
        <nav className="sticky top-0 z-40 bg-blue-600 shadow text-white">
            <div className="flex flex-wrap items-center justify-between h-16 px-4 md:px-6 sm:flex-nowrap">
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
                    <h1 className="font-bold text-lg md:text-xl sm:text-sm truncate">
                        Sistem Koperasi Manajemen Anggota
                    </h1>
                    <span className="shrink-0 font-mono text-md ml-12 mt-1 font-semibold text-gray-200 hidden sm:inline-block md:inline-block">
                        {formatTime(time)}
                    </span>
                </div>
                <div className="flex items-center gap-4 whitespace-nowrap text-md sm:gap-1.5 min-w-0 truncate">
                    <span className="hidden md:inline-block sm:inline-block font-medium text-gray-100">
                        Selamat Datang
                        <strong className="font-semibold text-amber-200"> {nama} </strong>
                    </span>
                    <span className="hidden sm:inline-block md:inline-block capitalize">
                        sebagai {role}
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
