export default function Contact() {
  return (
    <section className="py-16 px-6 bg-amber-100 mt-5 text-gray-800 max-w-6xl mx-auto">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-red-600 mb-10">
        संपर्क करें
      </h2>

      {/* Grid Layout for Contact Info and Schedule */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Info Box */}
        <div className="bg-red-50 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-red-500 mb-4">
            सरस्वती कोचिंग सेंटर
          </h3>

          <div className="mb-6 text-gray-700 space-y-3">
            <p>
              <strong>पता:</strong>
              <br />
              बड़गो, बरईपार <br />
              गोरखपुर - 273402 <br />
              (बड़ोदा बैंक के सामने, बड़गो)
            </p>

            <p>
              <strong>संपर्क नंबर:</strong>{" "}
              <a
                href="tel:+917379351045"
                className="text-red-600 underline hover:text-red-700"
              >
                +91 7379351045
              </a>
            </p>
          </div>

          <a
            href="https://www.google.com/maps/place/Saraswati+Coaching+Centre"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition duration-200"
          >
            📍 लोकेशन देखें
          </a>
        </div>

        {/* Coaching Schedule */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-red-500 mb-4">
            कोचिंग शेड्यूल 🕒
          </h3>
          <ul className="text-gray-700 space-y-3">
            <li>
              <strong>सुबह बैच:</strong> 6:00 AM - 9:00 AM
            </li>
            <li>
              <strong>दोपहर बैच:</strong> 12:00 PM - 3:00 PM
            </li>
            <li>
              <strong>शाम बैच:</strong> 4:00 PM - 7:00 PM
            </li>
            <li>
              <strong>विशेष क्लास:</strong> रविवार (10:00 AM - 12:00 PM)
            </li>
            <li>
              <strong>विषय:</strong> गणित, विज्ञान, हिंदी, अंग्रेजी, SST
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
