import { useEffect, useState } from "react";
import Card from "../../ui/Card";
import { getDashboard } from "../../../services/dashboardService";

function DashboardHome() {
    const user = JSON.parse(localStorage.getItem("user"));
    const role = user?.role;

    const [dashboard, setDashboard] = useState({
        total_fo: 0,
        total_anggota: 0,
    });

    useEffect(() => {
        if (role === "superadmin") {
            loadDashboard();
        }
    }, [role]);

    const loadDashboard = async () => {
        try {
            const data = await getDashboard();
            setDashboard(data);
        } catch (error) {
            console.error(error);
        }
    };
    if (role === "superadmin") {
        return (
            <div className="space-y-6">

                <h1 className="text-2xl font-bold">
                    Dashboard Super Admin
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <Card>
                        <div className="p-6 text-center">
                            <p className="text-gray-500">
                                Total FO
                            </p>

                            <h2 className="text-4xl font-bold mt-2">
                                {dashboard.total_fo}
                            </h2>
                        </div>
                    </Card>

                    <Card>
                        <div className="p-6 text-center">
                            <p className="text-gray-500">
                                Total Anggota
                            </p>

                            <h2 className="text-4xl font-bold mt-2">
                                {dashboard.total_anggota}
                            </h2>
                        </div>
                    </Card>

                </div>

            </div>
        );
    }

    const dashboardText = {
        fo: {
            title: "Dashboard Front Office",
            description:
                "Selamat datang. Gunakan menu di sebelah kiri untuk mengelola data anggota.",
        },
        anggota: {
            title: "Dashboard Anggota",
            description:
                "Selamat datang. Gunakan menu di sebelah kiri untuk melihat dan memperbarui data diri Anda.",
        },
    };

    const current = dashboardText[role];

    return (
        <div className="space-y-4">

            <h1 className="text-2xl font-bold">
                {current?.title || "Dashboard"}
            </h1>

            <p className="text-gray-600">
                {current?.description || "Selamat datang."}
            </p>

        </div>
    );
}

export default DashboardHome;
