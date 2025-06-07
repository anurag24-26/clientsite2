import React from "react";
import { FaHourglassHalf } from "react-icons/fa";

export default function Result() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 px-6">
      <div className="bg-white rounded-xl shadow-xl p-10 text-center max-w-md">
        <FaHourglassHalf className="text-red-500 text-5xl mb-4 mx-auto animate-pulse" />
        <h1 className="text-3xl font-bold text-red-600 mb-2">
          परिणाम जल्द आ रहा है
        </h1>
        <p className="text-gray-700 text-base">
          कृपया धैर्य रखें, आपकी मेहनत का फल जल्द ही घोषित किया जाएगा।
        </p>
        <div className="mt-6">
          <span className="text-sm text-gray-500">
            - Saraswati Coaching Centre
          </span>
        </div>
      </div>
    </div>
  );
}
