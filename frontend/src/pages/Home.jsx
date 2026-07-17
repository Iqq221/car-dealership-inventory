import { useEffect, useState } from "react";
import api from "../services/api";

function Home() {

    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {

        fetchVehicles();

    }, []);

    async function fetchVehicles() {

        try {

            const response = await api.get("/vehicles");

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

                </div>

            </section>

            {/* VEHICLES */}

            <section className="bg-slate-900 py-20">

                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-white text-4xl font-bold mb-12">

                        Featured Vehicles

                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                        {vehicles.map((vehicle) => (

                            <div
                                key={vehicle.id}
                                className="bg-slate-800 rounded-2xl overflow-hidden"
                            >

                                <img
                                    src={`http://localhost:5000/uploads/${vehicle.image}`}
                                    alt={vehicle.make}
                                    className="w-full h-60 object-cover"
                                />

                                <div className="p-6">

                                    <h3 className="text-white text-2xl font-bold">

                                        {vehicle.make} {vehicle.model}

                                    </h3>

                                    <p className="text-gray-400 mt-2">

                                        {vehicle.category}

                                    </p>

                                    <p className="text-red-500 text-2xl mt-4 font-bold">

                                        ₹{vehicle.price.toLocaleString("en-IN")}

                                    </p>

                                    <button
                                        className="mt-6 w-full bg-red-600 hover:bg-red-700 transition py-3 rounded-xl text-white font-semibold"
                                    >

                                        Purchase

                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

        </div>

    );

}

export default Home;