import { useEffect, useState } from "react";
import api from "../services/api";
import VehicleCard from "../components/VehicleCard";

function Home() {

    const [vehicles, setVehicles] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
const [maxPrice, setMaxPrice] = useState("");
    useEffect(() => {
    fetchVehicles();
}, [search]);

    async function fetchVehicles() {

    try {

        let response;

        if (search.trim() === "") {

            response = await api.get("/vehicles");

        } else {

            response = await api.get(
                `/vehicles/search?search=${search}`
            );

        }

        setVehicles(response.data);

    } catch (error) {

        console.log(error);

    }

}

    return (

        <div>

            {/* HERO */}

            <section
                className="relative h-screen bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop')"
                }}
            >

                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative flex flex-col justify-center items-center h-full">

                    <h1 className="text-7xl font-bold text-white">

                        DRIVE YOUR DREAM

                    </h1>

                    <p className="text-gray-300 text-xl mt-6">

                        Premium Cars. Premium Experience.

                    </p>
                    <button
        onClick={() =>
            document
                .getElementById("inventory")
                ?.scrollIntoView({
                    behavior: "smooth"
                })
        }
        className="
            mt-10
            bg-red-600
            hover:bg-red-700
            transition
            duration-300
            px-10
            py-4
            rounded-full
            text-xl
            text-white
            font-semibold"
    >
        Explore Collection →
    </button>
              <div className="mt-16 grid grid-cols-3 gap-12">

        <div>
            <h2 className="text-4xl font-bold text-red-500">
                500+
            </h2>

            <p className="mt-2 text-gray-300">
                Premium Cars
            </p>
        </div>

        <div>
            <h2 className="text-4xl font-bold text-red-500">
                25+
            </h2>

            <p className="mt-2 text-gray-300">
                Luxury Brands
            </p>
        </div>

        <div>
            <h2 className="text-4xl font-bold text-red-500">
                10K+
            </h2>

            <p className="mt-2 text-gray-300">
                Happy Customers
            </p>
        </div>
        </div>

                </div>

            </section>

            {/* VEHICLES */}

            <section
    id="inventory"
    className="bg-slate-900 py-20"
>
                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-white text-4xl font-bold mb-12">

                        Featured Vehicles

                    </h2>

                <div className="mb-12">

   <input
    type="text"
    placeholder="Search by make, model or category..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="
        w-full
        bg-slate-800
        text-white
        p-5
        rounded-2xl
        outline-none
        border
        border-slate-700
        focus:border-red-600
        transition
    "
/>

<div className="flex gap-4 mt-6 mb-10">

    <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="bg-slate-800 text-white p-4 rounded-xl"
    >

        <option value="">All Categories</option>
        <option value="SUV">SUV</option>
        <option value="Sedan">Sedan</option>
        <option value="Luxury">Luxury</option>
        <option value="Sports">Sports</option>
        <option value="Hatchback">Hatchback</option>

    </select>

    <input
        type="number"
        placeholder="Maximum Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="bg-slate-800 text-white p-4 rounded-xl flex-1"
    />

</div>

</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                       {vehicles
    .filter((vehicle) => {

    const categoryMatch =
        category === "" ||
        vehicle.category === category;

    const priceMatch =
        maxPrice === "" ||
        Number(vehicle.price) <= Number(maxPrice);

    return categoryMatch && priceMatch;

})
    .map((vehicle) => (
        <VehicleCard
    key={vehicle.id}
    vehicle={vehicle}
    fetchVehicles={fetchVehicles}
/>
))}

                    </div>

                </div>

            </section>

        </div>

    );

}

export default Home;