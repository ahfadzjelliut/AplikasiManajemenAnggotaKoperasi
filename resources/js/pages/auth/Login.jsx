import React from "react";
import LoginForm from "../../components/feature/auth/LoginForm";
import AuthLayout from "../../layouts/AuthLayout";

function Login() {
    return (
        <AuthLayout>
            <LoginForm />
        </AuthLayout>
    );
}

export default Login;
