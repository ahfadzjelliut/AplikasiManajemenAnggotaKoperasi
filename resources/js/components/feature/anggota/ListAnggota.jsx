import { useEffect,useState } from "react";
import Table from "../../ui/Table";
import Button from "../../ui/Button";
import SearchBar from "../../ui/SearchBar";

const columns = [
    {
        key: "anggota.nama",
        label: "Nama",
    },
    {
        key: "anggota.email",
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

function ListAnggota() {
    const user = JSON.parse(localStorage.getItem("user"));
    const nav = useNavigate();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        loadMember();
    }, []);
    const loadMember = async () => {
        try {
            const response = await getMember(user.id);
            console.log("response =", response);
            console.log("response.data =", response.data);
            setData(response.data ?? response);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
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
                    Daftar Anggota dari
                </h1>
                <SearchBar
                    placeholder="Cari anggota..."
                />
            </div>
            <Table
                columns={columns}
                data={data}
            />
        </div>
        );
}
export default ListAnggota;
