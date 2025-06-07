import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-yellow-100 via-red-100 to-blue-100 text-gray-800 pt-10 pb-6 px-6 shadow-inner">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-red-200 pb-8">
        {/* Coaching Info */}
        <div>
          <h3 className="text-2xl font-bold mb-3">सरस्वती कोचिंग सेंटर</h3>
          <p className="text-sm leading-relaxed">
            बड़गो, बरईपार, गोरखपुर - 273402
            <br />
            बड़ोदा बैंक के सामने, बड़गो
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-3">त्वरित लिंक</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                🏠 मुख्य पृष्ठ
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                📖 हमारे बारे में
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:underline">
                🖼️ गैलरी
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                📬 संपर्क करें
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-3">संपर्क जानकारी</h4>
          <p className="flex items-center gap-2 text-sm mb-2">
            <FaPhoneAlt className="text-red-500" />
            <span className="underline cursor-pointer">+91-7379351045</span>
          </p>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm underline hover:text-red-500"
          >
            <FaMapMarkerAlt className="text-red-500" />
            गूगल मैप पर देखें
          </a>

          {/* Social Media */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-blue-600 hover:scale-110 transition">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-pink-500 hover:scale-110 transition">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm pt-6 text-gray-600">
        © {new Date().getFullYear()} सरस्वती कोचिंग सेंटर. सर्वाधिकार सुरक्षित।
      </div>
    </footer>
  );
}
