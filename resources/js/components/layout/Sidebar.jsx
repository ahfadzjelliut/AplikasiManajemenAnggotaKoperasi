import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar({ role,sidebarOpen,setSidebarOpen }) {
    const menus = {
            superadmin: [
                {
                    title: "Dashboard",
                    path: "/dashboard"
                },
                {
                    title: "Tambah Front Office",
                    path: "/dashboard/fo/tambah"
                },
                {
                    title: "Daftar Front Office",
                    path: "/dashboard/fo/daftar"
                }
            ],
            fo: [
                {
                    title: "Dashboard",
                    path: "/dashboard"
                },
                {
                    title: "Tambah Anggota",
                    path: "/dashboard/anggota/tambah"
                },
                {
                    title: "Daftar Anggota",
                    path: "/dashboard/anggota/daftar"
                }
            ],
            anggota: [
                {
                    title: "Dashboard",
                    path: "/dashboard"
                },
                {
                    title: "Data Diri",
                    path: "/dashboard/data-diri"
                },
                {
                    title: "Data Anggota",
                    path: "/dashboard/anggota-fo"
                }
            ]
        };
    return (
        <>
            {
                sidebarOpen && (
                    <div
                        className="
                            fixed
                            inset-0
                            bg-black/40
                            z-30
                            md:hidden
                        "
                        onClick={() => setSidebarOpen(false)}
                    />
                )
            }
            <aside
                className={`
                    fixed
                    top-16
                    left-0
                    z-40

                    h-[calc(100vh-4rem)]
                    w-64

                    bg-white
                    border-r
                    shadow-lg

                    transform
                    transition-transform
                    duration-300
                    ${
                        sidebarOpen
                            ? "translate-x-0"
                            : "-translate-x-full"
                    }
                    md:translate-x-0
                    md:static
                    md:h-auto
                    md:min-h-[calc(100vh-4rem)]
                `}
            >
                <div className="p-5">
                    <h2 className="font-bold text-lg mb-5">
                        Menu
                    </h2>
                    <ul className="space-y-2">
                        {(menus[role] || []).map((menu) => (
                            <li key={menu.path}>
                                <NavLink
                                    to={menu.path}
                                    onClick={() => setSidebarOpen(false)}
                                    className={({ isActive }) =>
                                        `
                                        block
                                        px-4
                                        py-3
                                        rounded-lg
                                        transition
                                        ${
                                            isActive
                                                ? "bg-blue-600 text-white"
                                                : "hover:bg-blue-100"
                                        }
                                        `
                                    }
                                >
                                    {menu.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
    </>
    );
}
export default Sidebar;
