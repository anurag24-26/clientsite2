import { motion } from "framer-motion";
import Logoo from "../assets/logo12.jpg";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBookOpen,
  FaCheckCircle,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative text-center py-16 px-4 bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-pink-200 rounded-full opacity-30 blur-3xl animate-pulse z-0"></div>
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-300 rounded-full opacity-30 blur-3xl animate-pulse z-0"></div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="flex justify-center mb-6 relative z-10"
      >
        <img
          src={Logoo}
          alt="Logo"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-red-400 shadow-2xl hover:scale-105 transition-transform duration-300"
        />
      </motion.div>

      {/* Coaching Center Name */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-4xl md:text-5xl font-black text-red-600 mb-4 relative z-10"
      >
        सरस्वती कोचिंग सेंटर
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-xl md:text-2xl text-gray-700 font-semibold italic mb-4 relative z-10"
      >
        शिक्षा का नया दृष्टिकोण, सफलता की नई राह ✨
      </motion.p>

      {/* Location */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-lg text-gray-600 mb-2 flex items-center justify-center gap-2 relative z-10"
      >
        <FaMapMarkerAlt className="text-red-500" />
        स्थान: बड़गो, बरईपार (बड़ौदा बैंक के सामने)
      </motion.p>

      {/* Contact */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-base text-gray-800 font-medium flex items-center justify-center gap-2 relative z-10"
      >
        <FaPhoneAlt className="text-blue-700" />
        संपर्क करें:{" "}
        <span className="text-blue-700 font-semibold">+91 7379351045</span>
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-6 flex justify-center gap-4 flex-wrap relative z-10"
      >
        <a
          href="#contact"
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg transition duration-300 flex items-center gap-2"
        >
          <FaPhoneAlt /> संपर्क करें
        </a>
        <a
          href="#courses"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg transition duration-300 flex items-center gap-2"
        >
          <FaBookOpen /> कोर्स देखें
        </a>
        <Link to="/checkresult">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg transition duration-300 flex items-center gap-2 mt-2 sm:mt-0">
            <FaCheckCircle /> अपना रिज़ल्ट देखें
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
