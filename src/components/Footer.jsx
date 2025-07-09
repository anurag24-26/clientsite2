import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaHome,
  FaInfoCircle,
  FaImages,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-yellow-100 via-red-50 to-blue-100 text-gray-800 pt-12 pb-6 px-6 shadow-inner">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 border-b border-red-200 pb-10 text-center sm:text-left">
        {/* Coaching Info */}
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-red-600">
            सरस्वती कोचिंग सेंटर
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            बड़गो, बरईपार, गोरखपुर - 273408
            <br />
            (बड़ोदा बैंक के सामने)
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-blue-700 mb-4">
            त्वरित लिंक
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/"
                className="flex items-center gap-2 hover:text-red-600 hover:underline transition"
              >
                <FaHome /> मुख्य पृष्ठ
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="flex items-center gap-2 hover:text-red-600 hover:underline transition"
              >
                <FaInfoCircle /> हमारे बारे में
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="flex items-center gap-2 hover:text-red-600 hover:underline transition"
              >
                <FaImages /> गैलरी
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="flex items-center gap-2 hover:text-red-600 hover:underline transition"
              >
                <FaEnvelope /> संपर्क करें
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h4 className="text-xl font-semibold text-green-700">
            संपर्क जानकारी
          </h4>
          <p className="flex items-center justify-center sm:justify-start gap-2 text-sm text-gray-700">
            <FaPhoneAlt className="text-red-500" />
            <span className="hover:underline cursor-pointer font-medium">
              +91-7379351042
            </span>
          </p>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center sm:justify-start gap-2 text-sm text-gray-700 hover:underline hover:text-red-500 transition"
          >
            <FaMapMarkerAlt className="text-red-500" />
            गूगल मैप पर देखें
          </a>

          {/* Social Media */}
          <div className="flex justify-center sm:justify-start gap-4 mt-4">
            <a
              href="#"
              className="text-blue-700 hover:text-blue-800 hover:scale-110 transition transform duration-200"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="text-pink-600 hover:text-pink-700 hover:scale-110 transition transform duration-200"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="pt-6 text-sm text-gray-600 text-center">
        © {new Date().getFullYear()}{" "}
        <span className="text-red-600 font-semibold">सरस्वती कोचिंग सेंटर</span>
        . सर्वाधिकार सुरक्षित।
      </div>
    </footer>
  );
}
