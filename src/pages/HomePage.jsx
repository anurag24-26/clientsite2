import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Testimonials from "../components/Testimonials";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-yellow-50 min-h-screen p-6 text-gray-800">
      <Hero />
      <Highlights />

      {/* नामांकन अनुभाग */}
      <div className="mt-12 text-center py-6 bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400 border border-pink-500 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
        <h3 className="text-xl font-semibold text-gray-800">
          🎉 <strong>नई बैच जल्द ही शुरू हो रही हैं!</strong> अपनी सीट सुरक्षित
          करने के लिए अभी नामांकन करें।
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          सीटें सीमित हैं, अगली बैच का हिस्सा बनने का मौका न गंवाएँ!
        </p>
        <Link to="/contact">
          <button className="mt-4 bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-all duration-300 transform">
            अभी नामांकन करें
          </button>
        </Link>
      </div>
    </div>
  );
}
