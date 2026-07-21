import React from "react";

function SearchBar({value,onChange,placeholder="Cari..."}) {
    return (
        <input type="text" value={value} placeholder={placeholder} onChange={(e)=>onChange(e.target.value)} />
    );
}
export default SearchBar;
