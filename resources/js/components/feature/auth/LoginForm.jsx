import React from "react";
import Card from "../../ui/Card";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

function LoginForm() {
    return (
        <Card>
            <h1 className="text-3xl font-bold text-center">
                Login
            </h1>
            <div className="mt-8 space-y-5">
                <div>
                    <label>Email</label>
                    <Input type="email" placeholder="Isi Email Anda"/>
                </div>
                <div>
                    <label>Password</label>
                    <Input type="password" placeholder="Password Anda" />
                </div>
                <Button>Login</Button>
            </div>
        </Card>
    );
}
export default LoginForm;
