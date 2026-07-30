import React from "react";
import { Outlet } from "react-router-dom";

function Content() {
        return (
            <main
                className="
                    flex-1
                    w-full
                    min-w-0
                    p-6
                    md:p-6
                    sm:p-0
                    overflow-x-auto
                    overflow-y-auto
                "
            >
                <div
                    className="
                        w-full
                        max-w-7xl
                        mx-auto
                        min-w-0
                    "
                >
                    <Outlet  />
                </div>
            </main>
        );
}
export default Content;
