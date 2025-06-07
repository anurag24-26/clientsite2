import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle popup visibility
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Floating WhatsApp Button */}
      <div
        onClick={togglePopup}
        className="bg-green-500 text-white p-4 rounded-full cursor-pointer shadow-lg hover:bg-green-600 transition-all"
      >
        <FaWhatsapp size={30} />
      </div>

      {/* Popup Message */}
      {isOpen && (
        <div className="absolute bottom-16 right-4 bg-white p-4 rounded-lg shadow-lg max-w-xs">
          <p className="text-gray-700 text-sm">
            📲 <strong>Book your seat now!</strong>
          </p>
          <a
            href="https://wa.me/919935769888" // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all"
          >
            Chat Now
          </a>
        </div>
      )}
    </div>
  );
}
