import { useState,useEffect } from "react";
import { getFO,updateFO } from "../../../services/FOService";
import Card from "../../ui/Card";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import Radio from "../../ui/Radio";
import { useNavigate, useParams } from "react-router-dom";

function UbahFO() {
    const { id } = useParams();
    const nav = useNavigate();
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({
        nama: "",
        email: "",
        password: "",
        status: "aktif",
    });
    useEffect(() => {
        loadFO();
    }, []);
    const loadFO = async () => {
        try {
            const data = await getFO(id);
            //console.log("DATA FO:", data);
            setForm({
                nama: data.nama ?? "",
                email: data.email ?? "",
                password: "",
                status: data.status ?? "aktif",
            });
        } catch (error) {
            console.error(error);
            alert("Gagal mengambil data FO.");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        try {
            await updateFO(id, form);
            alert("Data FO berhasil diperbarui.");
            nav("/dashboard/fo/daftar");
        } catch (error) {
            //console.error(error);
            console.error(error.response);
            console.error(error.response?.data);
            if (error.response?.status === 422) {
                setErrors(error.response.data.errors);
            } else {
                alert("Gagal memperbarui data.");
            }
        }
    };
    return (
        <Card>
            <h1 className="text-2xl font-bold mb-6">
                Ubah FO
            </h1>
            <form className="space-y-5" onSubmit={handleSubmit}>
                <p>ID Anggota : {id}</p>
                <div>
                    <label>Nama</label>
                    <Input
                        name="nama"
                        type="text"
                        placeholder="Nama Lengkap"
                        value={form.nama}
                        onChange={handleChange}
                        required
                    />
                    {errors.nama && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.nama[0]}
                        </p>
                    )}
                </div>
                <div>
                    <label>Email</label>
                    <Input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.email[0]}
                        </p>
                    )}
                </div>
                <div>
                    <label>Password</label>
                    <Input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.password[0]}
                        </p>
                    )}
                </div>
                <div>
                    <Radio
                        label="Status"
                        name="status"
                        value={form.status}
                        onChange={handleChange}
                        options={[
                            {
                                label: "Aktif",
                                value: "aktif",
                                color: "green",
                            },
                            {
                                label: "Tidak Aktif",
                                value: "nonaktif",
                                color: "red",
                            },
                        ]}
                    />
                </div>
                <div className="flex justify-end">

                    <Button type="button" onClick={()=>nav('/dashboard/fo/daftar')}>
                            Batal
                    </Button>

                    <Button type="submit">
                        Perbarui
                    </Button>
                    </div>
                </form>
        </Card>
    );
}
export default UbahFO;
