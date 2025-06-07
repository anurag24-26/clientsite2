import React from "react";
import { FaStar, FaTrophy } from "react-icons/fa";

const toppers = [
  { name: "श्रेया", class: "कक्षा 12 (CBSE)", marks: "95%" },
  { name: "श्वेता", class: "कक्षा 12 (CBSE)", marks: "94%" },
  { name: "अंकित चंद", class: "कक्षा 12 (CBSE)", marks: "93%" },
];

export default function Results() {
  return (
    <div className="px-4 py-12 mt-10 min-h-screen bg-gradient-to-tr from-pink-50 to-orange-50">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-pink-600 text-center mb-6">
        🏆 हमारे टॉपर्स
      </h1>

      {/* Top Performers Cards */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          <FaStar className="inline text-yellow-500 mr-2" />
          उत्कृष्ट छात्र
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
          {toppers.map((topper, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center"
            >
              <FaTrophy className="text-yellow-500 text-3xl mb-2" />
              <h3 className="text-lg font-bold text-gray-700 mb-1">
                {topper.name}
              </h3>
              <p className="text-sm text-gray-600 mb-1">{topper.class}</p>
              <p className="text-pink-600 font-semibold">{topper.marks}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Table Section */}
      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          छात्र परिणाम तालिका
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left table-auto">
            <thead className="bg-pink-100 text-pink-700">
              <tr>
                <th className="py-2 px-4">नाम</th>
                <th className="py-2 px-4">कक्षा</th>
                <th className="py-2 px-4">अंक (%)</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b">
                <td className="py-2 px-4">रिया शर्मा</td>
                <td className="py-2 px-4">कक्षा 10 (CBSE)</td>
                <td className="py-2 px-4">92%</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">अमित वर्मा</td>
                <td className="py-2 px-4">कक्षा 12 (UP)</td>
                <td className="py-2 px-4">85%</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">अंजलि सिंह</td>
                <td className="py-2 px-4">कक्षा 12 (CBSE)</td>
                <td className="py-2 px-4">89%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
