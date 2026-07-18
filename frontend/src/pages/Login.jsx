import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await api.post("/auth/login", {

                email,
                password,

            });

            localStorage.setItem("token", response.data.token);

            localStorage.setItem("role", response.data.user.role);

            localStorage.setItem("name", response.data.user.name);

            alert("Login Successful!");

           if (response.data.user.role === "admin") {
    window.location.href = "/admin";
} else {
    window.location.href = "/";
}

        } catch (error) {

            alert(error.response?.data?.message || "Login Failed");

        }

    };

    return (

        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">

            <div className="bg-slate-900 p-10 rounded-3xl shadow-2xl w-full max-w-md">

                <h1 className="text-4xl font-bold text-center text-white mb-2">

                    Welcome Back

                </h1>

                <p className="text-center text-gray-400 mb-8">

                    Login to continue

                </p>

                <form
    onSubmit={handleLogin}
    autoComplete="off"
    className="space-y-5"
>

                    <input
                        type="email"
                         autoComplete="off"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-4 rounded-xl bg-slate-800 text-white outline-none focus:ring-2 focus:ring-red-500"
                    />

                    <input
                        type="password"
                         autoComplete="new-password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-4 rounded-xl bg-slate-800 text-white outline-none focus:ring-2 focus:ring-red-500"
                    />

                    <button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 transition py-4 rounded-xl text-white font-semibold"
                    >
                        Login
                    </button>

                </form>

                <p className="text-center text-gray-400 mt-6">

                    Don't have an account?{" "}

                    <Link
                        to="/register"
                        className="text-red-500 hover:underline"
                    >
                        Register
                    </Link>

                </p>

            </div>

        </div>

    );

}

export default Login;