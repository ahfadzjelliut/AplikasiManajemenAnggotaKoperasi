import { useState } from "react";
import Content from "../../layout/Content";
import Card from "../../ui/Card";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import Radio from "../../ui/Radio";
import { useNavigate, useParams } from "react-router-dom";

function UbahFO() {
    const { id } = useParams();
    const nav = useNavigate();
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
