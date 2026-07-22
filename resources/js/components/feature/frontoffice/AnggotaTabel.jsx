import { useEffect,useState } from "react";
import Table from "../../ui/Table";
import Button from "../../ui/Button";
import SearchBar from "../../ui/SearchBar";
import { useNavigate } from "react-router-dom";
import { getMembers,deleteMember } from "../../../services/memberService";

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
        key: "no_anggota",
        label:"Nomor Anggota",
    },
    {
        key: "nik",
        label:"NIK",
    },
    {
        key: "tgl_lahir",
        label:"Tanggal Lahir",
    },
    {
        key: "alamat",
        label:"Alamat",
    },
    {
        key: "nohp",
        label:"Nomor HP",
    }
];


function AnggotaTabel() {
    const nav = useNavigate();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        loadMember();
    }, []);
    const loadMember = async () => {
        try {
            const response = await getMembers();
            setData(response.data ?? response);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Apakah Anda yakin ingin menghapus Anggota ini?"
        );
        if (!confirmDelete) return;
        try {
            await deleteMember(id);
            alert("Anggota berhasil dihapus.");
            nav("/dashboard");
            loadMember();
        } catch (error) {
            console.error(error);
            alert("Gagal menghapus Anggota.");
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
                    Daftar Anggota
                </h1>
                <SearchBar
                    placeholder="Cari Anggota..."
                />
            </div>
            <Table
                columns={columns}
                data={data}
                actions={(item) => (
                    <div className="flex gap-2">
                        <Button onClick={()=>nav(`/dashboard/anggota/ubah/${item.user_id}`)}>
                            Ubah
                        </Button>
                        <Button onClick={()=>handleDelete(item.id)}>
                            Hapus
                        </Button>
                    </div>
                )}
            />
        </div>
        );
}
export default AnggotaTabel;
