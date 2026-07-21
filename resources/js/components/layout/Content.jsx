import React from "react";

function Content({ isi, menu }) {
    if (menu == "list") {
        return (
            <main className="flex-1 bg-slate-100 p-6">
                {isi}
            </main>
        );
    }
    if (menu == "tambah") {
        return (
            <main className="flex-1 bg-slate-100 p-6">
                {isi}
            </main>
        );
    }
}
export default Content;
