import React from "react";

function Navbar() {
    return (
        <header className="h-16 bg-white border-b flex items-center justify-between px-6">

                    <h1 className="text-xl font-bold">
                        Dashboard Koperasi
                    </h1>

                    <button
                        className="
                            px-4
                            py-2
                            bg-red-500
                            text-white
                            rounded-lg
                            hover:bg-red-600
                            transition
                        "
                    >
                        Logout
                    </button>

                </header>
    );
}
export default Navbar;
