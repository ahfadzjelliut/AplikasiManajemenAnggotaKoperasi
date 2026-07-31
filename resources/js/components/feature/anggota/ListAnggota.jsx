import { useEffect,useState } from "react";
import Table from "../../ui/Table";
import SearchBar from "../../ui/SearchBar";
import { getTim } from "../../../services/diriService";

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
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        loadMember();
    }, [search]);
    const loadMember = async () => {
        try {
            const response = await getTim(search,user.id);
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
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
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
