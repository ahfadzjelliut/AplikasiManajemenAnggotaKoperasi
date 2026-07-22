import React from "react";
import { useState } from "react";
import Card from "../../ui/Card";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

function AnggotaForm() {
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
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Data FO :", form);
    };
    return (
            <Card>
                <h1 className="text-2xl font-bold mb-6">
                    Tambah Anggota
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
                    </div>
                    <div className="flex justify-end">
                        <Button type="button">
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
export default AnggotaForm;
