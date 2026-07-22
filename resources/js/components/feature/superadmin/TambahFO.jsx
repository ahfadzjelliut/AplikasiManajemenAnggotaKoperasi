import { useState } from "react";
import Card from "../../ui/Card";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { createFO } from "../../../services/FOService";
import { useNavigate } from "react-router-dom";

function TambahFO() {
    const nav = useNavigate();
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({
        nama: "",
        email:"",
        password:"",
    });

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
                const response = await createFO(form);
                console.log(response);
                alert("FO berhasil ditambahkan");
                nav("/dashboard");
                setForm({
                    nama: "",
                    email: "",
                    password: "",
                });
            } catch (error) {
                if (error.response?.status === 422) {
                    setErrors(error.response.data.errors);
                } else {
                    alert("Terjadi kesalahan pada server.");
                }
            }
    };
    return (
            <Card>
                <h1 className="text-2xl font-bold mb-6">
                    Tambah FO
                </h1>
                <form className="space-y-5" onSubmit={handleSubmit}>
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
                            required
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.password[0]}
                        </p>
                    )}
                    </div>
                    <div className="flex justify-end">
                        <Button type="button" onClick={() => nav("/dashboard")}>
                            Batal
                        </Button>
                        <Button type="submit">
                            Tambah
                        </Button>
                        </div>
                    </form>
            </Card>
    );
}
export default TambahFO;
