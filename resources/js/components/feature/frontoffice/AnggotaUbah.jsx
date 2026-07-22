import { useState, useEffect } from "react";
import { getMember,updateMember } from "../../../services/memberService";
import Card from "../../ui/Card";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import DateInput from "../../ui/DateInput";
import { data, useNavigate, useParams } from "react-router-dom";

function AnggotaUbah() {
    const { id } = useParams();
    const nav = useNavigate();
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({
        nama: "",
        email: "",
        password: "",
        nik: "",
        tgl_lahir: "",
        alamat: "",
        nohp:"",

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
            alert("Data Anggota berhasil diperbarui.");
            nav("/dashboard/anggota/daftar");
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
                        <Button type="button" onClick={() => nav("/dashboard/anggota/daftar")}>
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
export default AnggotaUbah;
