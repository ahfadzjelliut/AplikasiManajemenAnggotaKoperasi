function DateInput({

    label,

    name,

    value,

    onChange,

    error,

    ...props

}) {

    return (

        <div className="space-y-2">

            {label && (

                <label
                    htmlFor={name}
                    className="block text-sm font-medium text-gray-700"
                >
                    {label}
                </label>

            )}

            <input

                id={name}

                name={name}

                type="date"

                value={value}

                onChange={onChange}

                className="
                    w-full
                    rounded-lg
                    border
                    border-gray-300
                    bg-white
                    px-4
                    py-3
                    text-gray-700
                    shadow-sm
                    outline-none
                    transition
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-200
                "

                {...props}

            />

            {error && (

                <p className="text-sm text-red-500">

                    {error}

                </p>

            )}
        </div>
    );
}

export default DateInput;
