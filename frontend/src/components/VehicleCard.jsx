import api from "../services/api";

function VehicleCard({ vehicle, fetchVehicles }) {
    async function handlePurchase() {

    console.log("Purchase button clicked");

    if (!window.confirm("Are you sure you want to purchase this vehicle?")) {
        return;
    }

    console.log("Confirmed");

    try {

        await api.post(`/vehicles/purchase/${vehicle.id}`);

        alert("Vehicle purchased successfully!");

        fetchVehicles();

    } catch (error) {

        console.log(error);

    }

}
    return (
        <div
            className="
            group
            bg-slate-800
            rounded-3xl
            overflow-hidden
            shadow-xl
            hover:-translate-y-3
            hover:shadow-red-500/20
            transition-all
            duration-500"
        >
            <div className="overflow-hidden">

                <img
                    src={`http://localhost:5000/uploads/${vehicle.image}`}
                    alt={`${vehicle.make} ${vehicle.model}`}
                    className="
                    w-full
                    h-64
                    object-cover
                    group-hover:scale-110
                    transition-transform
                    duration-700"
                />

            </div>

            <div className="p-6">

                <div className="flex justify-between items-start">

                    <div>

                        <h2 className="text-2xl text-white font-bold">

                            {vehicle.make}

                        </h2>

                        <p className="text-gray-400">

                            {vehicle.model}

                        </p>

                    </div>

                    <span
                        className="
                        bg-red-600
                        px-3
                        py-1
                        rounded-full
                        text-sm
                        text-white"
                    >
                        {vehicle.category}
                    </span>

                </div>

                <div className="mt-6">

                    <p className="text-3xl text-red-500 font-bold">

                        ₹{Number(vehicle.price).toLocaleString("en-IN")}

                    </p>

                </div>

                <div className="mt-5 flex justify-between items-center">

                    {vehicle.quantity > 0 ? (

                        <span
                            className="
                            bg-green-600
                            px-4
                            py-1
                            rounded-full
                            text-white
                            text-sm"
                        >
                            In Stock ({vehicle.quantity})
                        </span>

                    ) : (

                        <span
                            className="
                            bg-red-700
                            px-4
                            py-1
                            rounded-full
                            text-white
                            text-sm"
                        >
                            Out of Stock
                        </span>

                    )}

                </div>

                <button
    onClick={handlePurchase}
    disabled={vehicle.quantity === 0}
    className="
        mt-8
        w-full
        py-3
        rounded-xl
        font-semibold
        text-white
        bg-red-600
        hover:bg-red-700
        disabled:bg-gray-700
        disabled:cursor-not-allowed
        transition"
>

    {vehicle.quantity === 0
        ? "Out of Stock"
        : "Purchase"}

</button>

            </div>

        </div>
    );
}

export default VehicleCard;