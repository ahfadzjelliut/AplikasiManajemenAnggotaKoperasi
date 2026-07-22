import react from "react";
import Table from "../../ui/Table";
import Button from "../../ui/Button";
import SearchBar from "../../ui/SearchBar";

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
        key: "telepon",
        label: "Telepon",
    },
];

const data = [
    {
        id: 1,
        nama: "Ahmad",
        email: "ahmad@gmail.com",
        telepon: "08123456789",
    },
    {
        id: 2,
        nama: "Budi",
        email: "budi@gmail.com",
        telepon: "08987654321",
    },
];

function FOList() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">
                    Daftar Anggota
                </h1>
                <SearchBar
                    placeholder="Cari anggota..."
                />
            </div>
            <Table
                columns={columns}
                data={data}
                actions={(item) => (
                    <div className="flex gap-2">
                        <Button>
                            Ubah
                        </Button>
                        <Button>
                            Hapus
                        </Button>
                        <Button>Anggota</Button>
                    </div>
                )}
            />
        </div>
        );
}
export default FOList;
