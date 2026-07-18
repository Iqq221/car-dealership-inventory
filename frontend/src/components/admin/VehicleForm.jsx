function VehicleForm({
    formData,
    handleChange,
    handleAddVehicle,
    editingId,
    setEditingId,
    setFormData
}) {

    return (

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
    );

}

export default VehicleForm;

