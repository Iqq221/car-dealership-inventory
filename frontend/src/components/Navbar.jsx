import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const handleLogout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("name");

        window.location.href = "/login";

    };

    return (

        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">

            <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

                <Link
                    to="/"
                    className="text-3xl font-extrabold text-red-600 tracking-wide"
                >
                    DriveX
                </Link>

                <div className="flex items-center gap-8 text-white font-medium">

                    <Link
                        to="/"
                        className="hover:text-red-500 transition duration-300"
                    >
                        Home
                    </Link>

                    <Link
                        to="/"
                        className="hover:text-red-500 transition duration-300"
                    >
                        Inventory
                    </Link>

                    {token ? (

                        <button
                            onClick={handleLogout}
                            className="hover:text-red-500 transition duration-300"
                        >
                            Logout
                        </button>

                    ) : (

                        <>
                            <Link
                                to="/login"
                                className="hover:text-red-500 transition duration-300"
                            >
                                Login
                            </Link>

                            <Link
                                to="/register"
                                className="bg-red-600 hover:bg-red-700 transition px-5 py-2 rounded-full"
                            >
                                Register
                            </Link>
                        </>

                    )}

                </div>

            </div>

        </nav>

    );
}

export default Navbar;