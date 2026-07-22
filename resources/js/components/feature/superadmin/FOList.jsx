import { useEffect,useState } from "react";
import Table from "../../ui/Table";
import Button from "../../ui/Button";
import SearchBar from "../../ui/SearchBar";
import { useNavigate } from "react-router-dom";
import { getFOs,deleteFO } from "../../../services/FOService";

const columns = [
    {
        key: "nama",
        label: "Nama",
    },
    {
        key: "email",
        label: "Email",
    },
    {
        key: "status",
        label:"Status",
    }
];

function FOList() {
    const nav = useNavigate();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        loadFO();
    }, []);

    const loadFO = async () => {
        try {
            const response = await getFOs();
            setData(response.data ?? response);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Apakah Anda yakin ingin menghapus FO ini?"
        );
        if (!confirmDelete) return;
        try {
            await deleteFO(id);
            alert("FO berhasil dihapus.");
            nav("/dashboard");
            loadFO();
        } catch (error) {
            console.error(error);
            alert("Gagal menghapus FO.");
        }
    };
        if (loading) {
                return (
                    <div className="text-center py-10">
                        Memuat data...
                    </div>
                );
            }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">
                    Daftar Front Officer
                </h1>
                <SearchBar
                    placeholder="Cari Fo..."
                />
            </div>
            <Table
                columns={columns}
                data={data}
                actions={(item) => (
                    <div className="flex gap-2">
                        <Button onClick={()=>nav(`/dashboard/fo/ubah/${item.id}`)}>
                            Ubah
                        </Button>
                        <Button className="bg-red-500 hover:bg-red-600" onClick={()=>handleDelete(item.id)}>
                            Hapus
                        </Button>
                        <Button onClick={()=>nav(`/dashboard/fo/anggota/${item.id}`)}>
                            Anggota
                        </Button>
                    </div>
                )}
            />
        </div>
        );
}
export default FOList;
