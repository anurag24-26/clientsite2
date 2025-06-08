import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle popup visibility
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {/* Floating WhatsApp Button */}
      <div
        onClick={togglePopup}
        className="bg-green-500 text-white p-4 rounded-full cursor-pointer shadow-xl hover:bg-green-600 transition-transform transform hover:scale-110"
      >
        <FaWhatsapp size={30} />
      </div>

      {/* Popup Message */}
      <div
        className={`transition-all duration-300 ease-in-out transform ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        } absolute bottom-16 right-0 bg-white/80 backdrop-blur-lg p-4 rounded-xl shadow-2xl max-w-xs`}
      >
        <p className="text-gray-700 text-sm font-medium">
          📲 <strong>Book your seat now!</strong>
        </p>
        <a
          href="https://wa.me/917379351042"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 block text-center bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all shadow-md"
        >
          Chat Now
        </a>
      </div>
    </div>
  );
}
