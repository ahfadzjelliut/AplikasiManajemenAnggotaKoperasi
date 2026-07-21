import React from "react";

function AuthLayout({ isi }) {
    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                {isi}
            </div>
        </div>
    );
}
export default AuthLayout;
