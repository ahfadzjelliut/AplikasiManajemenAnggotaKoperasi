import React from "react";

function Button({
    isi,
    ...props
}) {
    return (
        <button
            {...props}
            className="
                w-full
                bg-blue-600
                hover:bg-blue-700
                active:scale-95
                transition
                text-white
                py-3
                rounded-lg
                font-semibold
            "
        >
            {isi}
        </button>
    );
}
export default Button;
