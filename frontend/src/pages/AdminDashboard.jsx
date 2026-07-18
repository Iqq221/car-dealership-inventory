import { useEffect, useState } from "react";
import api from "../services/api";

function AdminDashboard() {

    const [vehicles, setVehicles] = useState([]);
const [editingId, setEditingId] = useState(null);
const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    category: "",
    price: "",
    quantity: "",
     image: ""
});


    useEffect(() => {
        fetchVehicles();
    }, []);

    const fetchVehicles = async () => {

        try {

            const response = await api.get("/vehicles");
            setVehicles(response.data);

        } catch (error) {

            console.log(error);
            alert("Failed to load vehicles");

        }

    };
    const handleEdit = (vehicle) => {

    setEditingId(vehicle.id);

    setFormData({
        make: vehicle.make,
        model: vehicle.model,
        year: vehicle.year,
        category: vehicle.category,
        price: vehicle.price,
        quantity: vehicle.quantity,
        image: vehicle.image
    });

};

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

  const handleAddVehicle = async (e) => {

    e.preventDefault();

    const currentYear = new Date().getFullYear();

    if (formData.make.trim().length < 2) {
        return alert("Make must contain at least 2 characters.");
    }

    if (formData.model.trim().length < 2) {
        return alert("Model must contain at least 2 characters.");
    }

    if (
        Number(formData.year) < 1900 ||
        Number(formData.year) > currentYear + 1
    ) {
        return alert(`Year must be between 1900 and ${currentYear + 1}.`);
    }

    if (Number(formData.price) <= 0) {
        return alert("Price must be greater than 0.");
    }

    if (Number(formData.quantity) < 0) {
        return alert("Quantity cannot be negative.");
    }

    if (formData.image.trim() === "") {
        return alert("Please enter the image filename.");
    }

    try {
if (editingId) {

    await api.put(`/vehicles/${editingId}`, formData);

    alert("Vehicle updated successfully!");

} else {

    await api.post("/vehicles", formData);

    alert("Vehicle added successfully!");

}

        fetchVehicles();

        setFormData({
    make: "",
    model: "",
    year: "",
    category: "",
    price: "",
    quantity: "",
    image: ""
});

setEditingId(null);
    } catch (error) {

        console.log(error);

        alert(
            error.response?.data?.message ||
            "Failed to add vehicle."
        );

    }

};

    return (

        <div className="min-h-screen bg-slate-950 pt-28 px-8">

            <div className="max-w-7xl mx-auto">

                <h1 className="text-5xl font-bold text-white mb-10">
                    Admin Dashboard
                </h1>

                {/* Add Vehicle Form */}

                <form
                    onSubmit={handleAddVehicle}
                    className="bg-slate-900 p-6 rounded-xl mb-10"
                >

                    <h2 className="text-2xl font-bold text-white mb-6">
    {editingId ? "Edit Vehicle" : "Add New Vehicle"}
</h2>
                    <div className="grid grid-cols-2 gap-4">

                        <input
                            type="text"
                            name="make"
                            placeholder="Make"
                            value={formData.make}
                            onChange={handleChange}
                            className="p-3 rounded bg-slate-800 text-white"
                            required
                        />

                        <input
                            type="text"
                            name="model"
                            placeholder="Model"
                            value={formData.model}
                            onChange={handleChange}
                            className="p-3 rounded bg-slate-800 text-white"
                            required
                        />

                        <input
    type="number"
    name="year"
    placeholder="Year"
    value={formData.year}
    onChange={handleChange}
    min="1900"
    max={new Date().getFullYear() + 1}
    className="p-3 rounded bg-slate-800 text-white"
    required
/>

                      <select
    name="category"
    value={formData.category}
    onChange={handleChange}
    className="p-3 rounded bg-slate-800 text-white"
    required
>
    <option value="">Select Category</option>
    <option value="SUV">SUV</option>
    <option value="Sedan">Sedan</option>
    <option value="Hatchback">Hatchback</option>
    <option value="Coupe">Coupe</option>
    <option value="Convertible">Convertible</option>
    <option value="Pickup">Pickup</option>
    <option value="EV">EV</option>
</select>

                        <input
    type="number"
    name="price"
    placeholder="Price"
    value={formData.price}
    onChange={handleChange}
    min="1"
    className="p-3 rounded bg-slate-800 text-white"
    required
/>

                        <input
    type="number"
    name="quantity"
    placeholder="Quantity"
    value={formData.quantity}
    onChange={handleChange}
    min="0"
    className="p-3 rounded bg-slate-800 text-white"
    required
/>
<div className="col-span-2">

    <label className="block text-white mb-2">
        Image Filename
    </label>

    <input
        type="text"
        name="image"
        placeholder="fortuner.jpg"
        value={formData.image}
        onChange={handleChange}
        className="p-3 rounded bg-slate-800 text-white w-full"
        required
    />

    <p className="text-sm text-gray-400 mt-2">
        Save the image inside the backend uploads folder and enter its filename here.
    </p>

</div>
                    </div>

                    <button
                        type="submit"
                        className="mt-6 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white font-semibold"
                    >
                        {editingId ? "Update Vehicle" : "Add Vehicle"}
                    </button>
                {editingId && (
    <button
        type="button"
        onClick={() => {

            setEditingId(null);

            setFormData({
                make: "",
                model: "",
                year: "",
                category: "",
                price: "",
                quantity: "",
                image: ""
            });

        }}
        className="ml-4 bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded-lg text-white"
    >
        Cancel
    </button>
)}
                </form>

                {/* Vehicle Table */}

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

                                    <td className="p-4">{vehicle.quantity}</td>

                                    <td className="p-4 text-center">

                                       <button
    onClick={() => handleEdit(vehicle)}
    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg mr-2"
>
    Edit
</button>

                                        <button
                                            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}

export default AdminDashboard;