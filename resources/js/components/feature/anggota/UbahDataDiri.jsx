import React from "react";
import { useState } from "react";
import Card from "../../ui/Card";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

function UbahDiri() {
    const { id } = useParams();
    const nav = useNavigate();
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({
        alamat: "",
        nohp:"",
        password:"",
    });
    useEffect(() => {
        loadMember();
    }, []);
    const loadMember = async () => {
        try {
            const response = await getMember(id);
            setForm({
                nama: data.nama ?? "",
                email: data.email ?? "",
                password: "",
                nik: data.nik ?? "",
                tgl_lahir: data.tgl_lahir ?? "",
                alamat: data.alamat ?? "",
                nohp: data.nohp ?? "",
            });
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
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
            await updateMember(id, form);
            alert("Data Diri berhasil diperbarui.");
            nav("/dashboard");
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
                    Ubah Data Diri
                </h1>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label>Alamat</label>
                        <Input
                            name="alamat"
                            type="text"
                            placeholder="Alamat"
                            value={form.alamat}
                            onChange={handleChange}
                            required
                    />
                    {errors.alamat && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.alamat[0]}
                        </p>
                    )}
                    </div>
                    <div>
                        <label>Nomor HP</label>
                        <Input
                            name="nohp"
                            type="text"
                            placeholder="Email"
                            value={form.nohp}
                            onChange={handleChange}
                            required
                    />
                    {errors.nohp && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.nohp[0]}
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
                    <div className="flex justify-end">
                        <Button type="button">
                            Batal
                        </Button>
                        <Button type="submit">
                            Simpan
                        </Button>
                        </div>
                    </form>
            </Card>
    );
}
export default UbahDiri;
