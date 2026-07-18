import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = async (e) => {

        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
}
if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return;
}
        try {

            const response = await api.post("/auth/register", {
                name,
                email,
                password
            });

            alert(response.data.message);

            window.location.href = "/login";

        } catch (error) {

            alert(error.response?.data?.message || "Registration Failed");

        }

    };

    return (

        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">

            <div className="bg-slate-900 p-10 rounded-3xl shadow-2xl w-full max-w-md">

                <h1 className="text-4xl font-bold text-center text-white mb-2">
                    Create Account
                </h1>

                <p className="text-center text-gray-400 mb-8">
                    Register to get started
                </p>

                <form
                    onSubmit={handleRegister}
                    autoComplete="off"
                    className="space-y-5"
                >

                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-4 rounded-xl bg-slate-800 text-white outline-none focus:ring-2 focus:ring-red-500"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-4 rounded-xl bg-slate-800 text-white outline-none focus:ring-2 focus:ring-red-500"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-4 rounded-xl bg-slate-800 text-white outline-none focus:ring-2 focus:ring-red-500"
                    />

                    <button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 transition py-4 rounded-xl text-white font-semibold"
                    >
                        Register
                    </button>

                </form>

                <p className="text-center text-gray-400 mt-6">

                    Already have an account?{" "}

                    <Link
                        to="/login"
                        className="text-red-500 hover:underline"
                    >
                        Login
                    </Link>

                </p>

            </div>

        </div>

    );

}

export default Register;