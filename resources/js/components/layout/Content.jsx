import React from "react";
import { Outlet } from "react-router-dom";

function Content() {
        return (
            <main
                className="
                    flex-1
                    w-full
                    p-4
                    md:p-6
                    overflow-x-auto
                "
            >
                <div
                    className="
                        w-full
                        max-w-7xl
                        mx-auto
                    "
                >
                    <Outlet />
                </div>
            </main>
        );
}
export default Content;
