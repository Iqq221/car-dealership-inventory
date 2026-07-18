import { useEffect, useState } from "react";
import api from "../services/api";
import VehicleForm from "../components/admin/VehicleForm";
import VehicleTable from "../components/admin/VehicleTable";

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

const handleDelete = async (id) => {

    if (!window.confirm("Delete this vehicle?")) return;

    try {

        await api.delete(`/vehicles/${id}`);

        alert("Vehicle deleted successfully.");

        fetchVehicles();

    } catch (error) {

        alert(error.response?.data?.message || "Delete failed");

    }

};

const handleRestock = async (id) => {

    const quantity = prompt("Enter quantity to restock:");

    if (quantity === null) return;

    if (isNaN(quantity) || Number(quantity) <= 0) {
        return alert("Please enter a valid quantity.");
    }

    try {

        await api.post(`/vehicles/restock/${id}`, {
            quantity: Number(quantity)
        });

        alert("Vehicle restocked successfully!");

        fetchVehicles();

    } catch (error) {

        console.log(error);

        alert(
            error.response?.data?.message ||
            "Failed to restock vehicle."
        );

    }

};

const totalVehicles = vehicles.length;

const totalStock = vehicles.reduce(
    (total, vehicle) => total + Number(vehicle.quantity),
    0
);

const totalCategories = new Set(
    vehicles.map(vehicle => vehicle.category)
).size;
    return (

        <div className="min-h-screen bg-slate-950 pt-28 px-8">

            <div className="max-w-7xl mx-auto">

    <h1 className="text-5xl font-bold text-white mb-10">
        Admin Dashboard
    </h1>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

    <div className="bg-slate-900 rounded-xl p-6 shadow-lg">

        <h3 className="text-gray-400 text-lg">
            Total Vehicles
        </h3>

        <p className="text-4xl font-bold text-red-500 mt-3">
            {totalVehicles}
        </p>

    </div>

    <div className="bg-slate-900 rounded-xl p-6 shadow-lg">

        <h3 className="text-gray-400 text-lg">
            Total Stock
        </h3>

        <p className="text-4xl font-bold text-green-500 mt-3">
            {totalStock}
        </p>

    </div>

    <div className="bg-slate-900 rounded-xl p-6 shadow-lg">

        <h3 className="text-gray-400 text-lg">
            Categories
        </h3>

        <p className="text-4xl font-bold text-blue-500 mt-3">
            {totalCategories}
        </p>

    </div>

</div>
    <VehicleForm
        formData={formData}
        handleChange={handleChange}
        handleAddVehicle={handleAddVehicle}
        editingId={editingId}
        setEditingId={setEditingId}
        setFormData={setFormData}
    />

    <VehicleTable
    vehicles={vehicles}
    handleEdit={handleEdit}
    handleDelete={handleDelete}
    handleRestock={handleRestock}
/>

</div>

        </div>

    );

}

export default AdminDashboard;