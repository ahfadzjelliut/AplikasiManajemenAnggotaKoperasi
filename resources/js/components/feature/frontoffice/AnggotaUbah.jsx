import { useState, useEffect } from "react";
import {getMemberChange,updateMember } from "../../../services/memberService";
import Card from "../../ui/Card";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import DateInput from "../../ui/DateInput";
import {  useNavigate, useParams } from "react-router-dom";

function AnggotaUbah() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
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
        setLoading(true);
        try {
            const response = await getMemberChange(id);
            setForm({
                nama: response.anggota.nama ?? "",
                email: response.anggota.email ?? "",
                password: "",
                nik: response.nik ?? "",
                tgl_lahir: response.tgl_lahir ?? "",
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
                console.log(id);
            }
        }
    };
    return (
            <Card>
                <h1 className="text-2xl font-bold mb-6">
                    Ubah Anggota
                </h1>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label>Nama</label>
                        <Input
                            name="nama"
                            type="text"
                            placeholder={loading ? "Mengambil data..." : "Nama Lengkap"}
                            disabled={loading}
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
                            placeholder={loading ? "Mengambil data..." : "Email"}
                            value={form.email}
                            disabled={loading}
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
                            disabled={loading}
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
                            placeholder={loading ? "Mengambil data..." : "NIK"}
                            disabled={loading}
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
                            disabled={loading}
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
                            placeholder={loading ? "Mengambil data..." : "Alamat"}
                            disabled={loading}
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
                            placeholder={loading ? "Mengambil data..." : "Nomor HP"}
                            disabled={loading}
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
