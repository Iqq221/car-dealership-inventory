import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const token = localStorage.getItem("token");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    window.location.href = "/login";
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-5">
        <Link
          to="/"
          className="text-3xl font-extrabold text-red-600 tracking-wide"
        >
          DriveX
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium">
          <Link to="/" className="hover:text-red-500 transition">
            Home
          </Link>

          <Link to="/" className="hover:text-red-500 transition">
            Inventory
          </Link>

          {token ? (
            <button
              onClick={handleLogout}
              className="hover:text-red-500 transition"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:text-red-500 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full transition"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Button */}
        <button
  className="md:hidden bg-red-600 text-white p-2 rounded"
  onClick={() => setMenuOpen(!menuOpen)}
>
  ☰
</button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-black/95 text-white px-6 pb-6 gap-4">

          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/" onClick={() => setMenuOpen(false)}>
            Inventory
          </Link>

          {token ? (
            <button
              onClick={handleLogout}
              className="text-left"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="bg-red-600 px-4 py-2 rounded text-center"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;