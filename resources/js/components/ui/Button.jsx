import React from "react";

function Button({
    isi,
    type = "button",
    variantColor = "primary",
    size = "md", disabled = false,
    onClick, classname="" }) {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`btn btn-${variantColor} btn-${size} ${classname}`}
        >
            {isi}
        </button>
    );
}
export default Button;
