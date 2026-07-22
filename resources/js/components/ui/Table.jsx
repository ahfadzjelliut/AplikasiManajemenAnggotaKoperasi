import React from "react";

function Table({
    columns = [],
    data = [],
    actions = null,
}) {
    return (
        <div className="overflow-x-auto bg-white rounded-xl shadow">
            <table className="min-w-full border-collapse">

                <thead className="bg-gray-100">
                    <tr>
                        {columns.map((column) => (
                            <th
                                key={column.key}
                                className="px-5 py-3 text-left font-semibold text-gray-700"
                            >
                                {column.label}
                            </th>
                        ))}

                        {actions && (
                            <th className="px-5 py-3 text-center">
                                Aksi
                            </th>
                        )}
                    </tr>
                </thead>

                <tbody>

                    {data.length === 0 ? (

                        <tr>
                            <td
                                colSpan={columns.length + (actions ? 1 : 0)}
                                className="text-center py-10 text-gray-400"
                            >
                                Tidak ada data.
                            </td>
                        </tr>

                    ) : (

                        data.map((item, index) => (

                            <tr
                                key={index}
                                className="border-t hover:bg-gray-50"
                            >
                                {columns.map((column) => (

                                    <td
                                        key={column.key}
                                        className="px-5 py-4"
                                    >
                                        {item[column.key]}
                                    </td>

                                ))}

                                {actions && (

                                    <td className="px-5 py-4">

                                        {actions(item)}

                                    </td>

                                )}

                            </tr>

                        ))

                    )}

                </tbody>

            </table>
        </div>
    );
}
export default Table;
