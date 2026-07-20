import React, { useState } from "react";


function FormLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
        <h1>login</h1>
        <form>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button type="submit">Login</button>
            </form>
        </>
    );
}

export default FormLogin;
