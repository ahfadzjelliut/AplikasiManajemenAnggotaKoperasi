import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/login";

function App() {
    return <Login />;
}

ReactDOM.createRoot(document.getElementById("app")).render(
    <App />
)
