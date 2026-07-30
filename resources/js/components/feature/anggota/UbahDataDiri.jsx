import { useState, useEffect } from "react";
import Card from "../../ui/Card";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import { getDiri,updateDiri } from "../../../services/diriService";

function UbahDiri() {
    const user = JSON.parse(localStorage.getItem('user'));
    const id = user.id;
    const [loading, setLoading] = useState(true);
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
        setLoading(true);
        try {
            const response = await getDiri(id,form);
            setForm({
                password: "",
                alamat: response.alamat ?? "",
                nohp: response.nohp ?? "",
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
            await updateDiri(id, form);
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
                            placeholder={loading ? "Mengambil data..." : "Alamat"}
                            value={form.alamat}
                            disabled={loading}
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
                            placeholder={loading ? "Mengambil data..." : "Nomor HP"}
                            value={form.nohp}
                            disabled={loading}
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
                            placeholder={loading ? "Mengambil data..." : "Password"}
                            value={form.password}
                            disabled={loading}
                            onChange={handleChange}
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.password[0]}
                        </p>
                    )}
                    </div>
                    <div className="flex justify-end">
                        <Button type="button" onClick={()=>nav("/dashboard")}>
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
