import React from "react";

function Input({
    type = "text",
    placeholder = "",
    value,
    onChange,
    name,
    disabled = false,
    className=""
}) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            disabled={disabled}
            className={`input ${className}`}
        />
    );
}
export default Input;
