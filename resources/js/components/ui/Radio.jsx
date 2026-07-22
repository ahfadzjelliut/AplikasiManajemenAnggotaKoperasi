
function Radio({
    label,
    name,
    options = [],
    value,
    onChange,
}) {
    return (
        <div>
            {label && (
                <label className="block mb-2 font-medium text-gray-700">
                    {label}
                </label>
            )}

            <div className="flex gap-3">
                {options.map((option) => (
                    <label
                        key={option.value}
                        className={`
                            cursor-pointer
                            rounded-lg
                            border
                            px-5
                            py-2
                            font-medium
                            transition-all
                            duration-200

                            ${
                                value === option.value
                                    ? option.color === "green"
                                        ? "bg-green-500 text-white border-green-500"
                                        : "bg-red-500 text-white border-red-500"
                                    : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                            }
                        `}
                    >
                        <input
                            type="radio"
                            name={name}
                            value={option.value}
                            checked={value === option.value}
                            onChange={onChange}
                            className="hidden"
                        />

                        {option.label}
                    </label>
                ))}
            </div>
        </div>
    );
}

export default Radio;
