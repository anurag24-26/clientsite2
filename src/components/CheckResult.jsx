import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import axios from "axios";
import logo from "../assets/logo12.jpg"; // 🖼️ Replace with actual path

export default function Result() {
  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResult(null);
    try {
      const res = await axios.get("https://adminpanel-290v.onrender.com/api/student/check", {
        params: {
          name,
          class: studentClass,
        },
      });
      setResult(res.data);
    } catch (err) {
      setError("❌ परिणाम नहीं मिला। कृपया नाम और कक्षा जांचें।");
    }
  };

  const calculateTotal = (marks) => {
    return (
      Number(marks.physics) +
      Number(marks.math) +
      Number(marks.english) +
      Number(marks.hindi)
    );
  };

  const calculateMax = (max) => {
    return (
      Number(max.physics) +
      Number(max.math) +
      Number(max.english) +
      Number(max.hindi)
    );
  };

  const resetForm = () => {
    setName("");
    setStudentClass("");
    setResult(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-yellow-100 flex flex-col items-center justify-center px-4 py-10">
      {/* Logo & Title */}
      <div className="mb-6 text-center">
        <img src={logo} alt="Logo" className="h-20 mx-auto mb-2" />
        <h1 className="text-3xl font-bold text-red-600">
          Saraswati Coaching Result
        </h1>
      </div>

      {/* Input Form */}
      {!result && (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-xl p-8 max-w-md w-full"
        >
          <p className="text-black-600 text-center">
            कृपया अपना नाम और कक्षा दर्ज करें
          </p>

          <p className="text-black-600 text-center">
            Example-(नाम-Prajwal Pandey ----कक्षा-7)
          </p>
          <div className="mt-4  mb-4">
            <label className="block text-gray-700">नाम</label>
            <input
              type="text"
              placeholder="Enter in proper format"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">कक्षा</label>
            <input
              type="number"
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
              className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg"
          >
            परिणाम देखें
          </button>
        </form>
      )}

      {/* Error Message */}
      {error && (
        <div className="mt-6 bg-red-100 text-red-700 p-4 rounded-lg shadow flex items-center gap-2 max-w-md w-full">
          <FaTimesCircle />
          <span>{error}</span>
        </div>
      )}

      {/* Result Display */}
      {result && (
        <div className="mt-8 bg-white border-4 border-red-300 p-8 rounded-xl shadow-lg max-w-xl w-full text-left">
          {/* Coaching Details */}
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-red-600">
              Saraswati Coaching Centre
            </h2>
            <p className="text-gray-700 text-sm">
              बड़गो, बरईपार, गोरखपुर - 273402 <br />
              (बड़ोदा बैंक के सामने, बड़गो)
            </p>
            <p className="text-gray-800 mt-2 font-semibold">
              📘 Unit Test - June 2025
            </p>
          </div>

          {/* Student Info */}
          <div className="flex items-center gap-2 mb-3 text-green-700">
            <FaCheckCircle className="text-2xl" />
            <h2 className="text-xl font-bold">छात्र का परिणाम</h2>
          </div>
          <p>
            <strong>नाम:</strong> {result.name}
          </p>
          <p>
            <strong>कक्षा:</strong> {result.class}
          </p>

          {/* Marks Table */}
          <hr className="my-3" />
          <div className="space-y-2">
            <p>
              📘 <strong>भौतिकी:</strong> {result.marks.physics}/
              {result.maxMarks.physics}
            </p>
            <p>
              📗 <strong>गणित:</strong> {result.marks.math}/
              {result.maxMarks.math}
            </p>
            <p>
              📙 <strong>अंग्रेजी:</strong> {result.marks.english}/
              {result.maxMarks.english}
            </p>
            <p>
              📕 <strong>हिंदी:</strong> {result.marks.hindi}/
              {result.maxMarks.hindi}
            </p>
            <hr className="my-2" />
            <p>
              <strong>कुल अंक:</strong> {calculateTotal(result.marks)}/
              {calculateMax(result.maxMarks)}
            </p>
            <p>
              <strong>प्रतिशत:</strong>{" "}
              {(
                (calculateTotal(result.marks) / calculateMax(result.maxMarks)) *
                100
              ).toFixed(2)}
              %
            </p>
          </div>

          {/* Check Another Result */}
          <div className="mt-6 text-center">
            <button
              onClick={resetForm}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded-lg"
            >
              🔁 दूसरा परिणाम देखें
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
