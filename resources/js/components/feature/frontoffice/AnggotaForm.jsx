import React from "react";
import { useState } from "react";
import Card from "../../ui/Card";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import DateInput from "../../ui/DateInput";
import { useNavigate } from "react-router-dom";
import { createMember } from "../../../services/memberService";

function AnggotaForm() {
    const user = JSON.parse(
            localStorage.getItem("user")
        );
    const nav = useNavigate();
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({
        nama: "",
        email: "",
        password: "",
        nik: "",
        tgl_lahir: "",
        alamat: "",
        nohp: "",
        ownerfo:user.id,
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
                const response = await createMember(form);
                console.log(response);
                alert("Anggota berhasil ditambahkan");
                nav("/dashboard");
                setForm({
                    nama: "",
                    email: "",
                    password: "",
                    nik: "",
                    tgl_lahir: "",
                    alamat: "",
                    nohp: "",
                    ownerfo:user.id,
                });
            } catch (error) {
                if (error.response?.status === 422) {
                    setErrors(error.response.data.errors);

                } else {
                    alert("Terjadi kesalahan pada server.");
                    console.log(form);
                    console.log(user);
                }
            }
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
                    <div>
                        <label>NIK</label>
                        <Input
                            name="nik"
                            type="text"
                            placeholder="NIK"
                            value={form.nik}
                            onChange={handleChange}
                            required
                    />
                    {errors.nik && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.nik[0]}
                        </p>
                    )}
                    </div>
                    <div>
                        <label>Tanggal Lahir</label>
                        <DateInput
                            name="tgl_lahir"
                            value={form.tgl_lahir}
                            onChange={handleChange}
                            required
                    />
                    {errors.tgl_lahir && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.tgl_lahir[0]}
                        </p>
                    )}
                    </div>
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
                    </div><div>
                        <label>Nomor Handphone</label>
                        <Input
                            name="nohp"
                            type="text"
                            placeholder="Nomor HP"
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
export default AnggotaForm;
