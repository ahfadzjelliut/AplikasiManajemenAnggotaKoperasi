import React from "react";

function SearchBar({value,onChange,placeholder="Cari..."}) {
    return (
        <input type="text" value={value} placeholder={placeholder} onChange={onChange} />
    );
}
export default SearchBar;
