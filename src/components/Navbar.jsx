import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo12.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "मुख्य पृष्ठ", path: "/" },
    { name: "हमारे बारे में", path: "/about" },
    // { name: "शिक्षकगण", path: "/faculty" },
    { name: "पाठ्यक्रम", path: "/courses" },
    { name: "गैलरी", path: "/gallery" },
    { name: "परिणाम", path: "/results" },
    { name: "संपर्क करें", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Logo"
            className="w-10 h-10 rounded-full border-2 border-red-500 shadow-md"
          />
          {/* Visible on desktop */}
          <span className="text-xl font-extrabold text-red-600 tracking-wide hidden md:inline">
            सरस्वती कोचिंग सेंटर
          </span>
          {/* Visible on mobile only */}
          <span className="text-sm font-semibold text-red-600 md:hidden">
            सरस्वती कोचिंग सेंटर
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`text-gray-800 font-medium hover:text-red-600 transition duration-200 ${
                location.pathname === item.path ? "text-red-600 font-bold" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-red-600 focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-lg animate-fade-down">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`block text-gray-800 font-medium hover:text-red-600 transition ${
                location.pathname === item.path ? "text-red-600 font-bold" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
