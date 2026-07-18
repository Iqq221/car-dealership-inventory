function VehicleTable({
    vehicles,
    handleEdit,
    handleDelete,
    handleRestock
}){

    return (

        <div className="overflow-x-auto rounded-2xl">

            <table className="w-full bg-slate-900 text-white">

                <thead className="bg-red-600">

                    <tr>

                        <th className="p-4 text-left">Image</th>
                        <th className="p-4 text-left">Make</th>
                        <th className="p-4 text-left">Model</th>
                        <th className="p-4 text-left">Category</th>
                        <th className="p-4 text-left">Price</th>
                        <th className="p-4 text-left">Stock</th>
                        <th className="p-4 text-center">Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {vehicles.map((vehicle) => (

                        <tr
                            key={vehicle.id}
                            className="border-b border-slate-700 hover:bg-slate-800"
                        >

                            <td className="p-4">

                                <img
                                    src={`http://localhost:5000/uploads/${vehicle.image}`}
                                    alt={vehicle.make}
                                    className="w-28 h-20 object-cover rounded-lg"
                                />

                            </td>

                            <td className="p-4">{vehicle.make}</td>
                            <td className="p-4">{vehicle.model}</td>
                            <td className="p-4">{vehicle.category}</td>

                            <td className="p-4">
                                ₹{Number(vehicle.price).toLocaleString("en-IN")}
                            </td>

                            <td className="p-4">
                                {vehicle.quantity}
                            </td>

                            <td className="p-4 text-center">

                                <button
                                    onClick={() => handleEdit(vehicle)}
                                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg mr-2"
                                >
                                    Edit
                                </button>

                                <button
    onClick={() => handleDelete(vehicle.id)}
    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
>
    Delete
</button>
<button
    onClick={() => handleRestock(vehicle.id)}
    className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg ml-2"
>
    Restock
</button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default VehicleTable;