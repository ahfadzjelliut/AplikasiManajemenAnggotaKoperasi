import { useState } from "react";
import Card from "../../ui/Card";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import { login } from "../../../services/authService";

function LoginForm() {
    const nav = useNavigate();
        const [form,setForm] = useState({
            email:"",
            password:"",
        });
        const [loginError,setLoginError] = useState("");
            const handleChange = (e)=>{
                const {name,value}=e.target;

                setForm((prev)=>({
                    ...prev,
                    [name]:value
                }));
            };
    const handleSubmit = async(e)=>{
            e.preventDefault();
            setLoginError("");

            try {
                const response = await login(form);
                console.log(response);
                localStorage.setItem(
                    "user",
                    JSON.stringify(response.user)
                );
                alert("Berhasil Login");

                nav("/dashboard");
            } catch(error){
                if (error.response) {
                    setLoginError(error.response.data.message);
                } else {
                    setLoginError("Terjadi kesalahan pada server");
                }
            }
        };
    return (
        <Card>
            <h1 className="text-3xl font-bold text-center">
                Login
            </h1>
            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Isi Email Anda" required/>
                </div>
                <div>
                    <label>Password</label>
                    <Input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password Anda" required/>
                    {loginError && (
                        <p className="text-red-500 text-sm mt-1">
                            {loginError}
                        </p>
                    )}
                </div>
                <Button type="submit">Login</Button>
            </form>
            </Card>
    );
}
export default LoginForm;
