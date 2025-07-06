import React, { useState } from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaDownload,
  FaSyncAlt,
  FaArrowRight,
} from "react-icons/fa";
import axios from "axios";
import logo from "../assets/logo12.jpg";

export default function Result() {
  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResult(null);
    setLoading(true);

    if (!name || !studentClass) {
      setError("कृपया नाम और कक्षा अनिवार्य रूप से भरें।");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.get(
        "https://adminpanel-290v.onrender.com/api/student/check",
        {
          params: {
            name,
            class: studentClass,
            ...(rollNo ? { rollNo } : {}),
          },
        }
      );
      setResult(res.data);
    } catch (err) {
      setError("परिणाम नहीं मिला। कृपया नाम और कक्षा जांचें।");
    } finally {
      setLoading(false);
    }
  };

  const calculateTotal = (marks) =>
    ["physics", "math", "english", "hindi"].reduce(
      (sum, key) => sum + (marks[key] || 0),
      0
    );

  const calculateMax = (max) =>
    ["physics", "math", "english", "hindi"].reduce(
      (sum, key) => sum + (max[key] || 0),
      0
    );

  const resetForm = () => {
    setName("");
    setStudentClass("");
    setRollNo("");
    setResult(null);
    setError("");
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-yellow-100 flex flex-col items-center justify-center px-4 py-10">
      <div className="mb-6 text-center">
        <img src={logo} alt="Logo" className="h-20 mx-auto mb-2" />
        <h1 className="text-3xl font-bold text-red-600">
          Saraswati Coaching Result
        </h1>
      </div>
      {!result && (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-xl p-8 max-w-md w-full"
        >
          <p className="text-black-600 text-center mb-2">
            कृपया अपना नाम, कक्षा और यदि ज्ञात हो तो रोल नंबर दर्ज करें।
          </p>
          <p className="text-xs text-center text-gray-500 mb-6">
            उदाहरण: नाम - Prajwal Pandey, कक्षा - 7, रोल नंबर - 202501
          </p>

          <div className="mb-4">
            <label className="block text-gray-700">नाम *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">कक्षा *</label>
            <input
              type="text"
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
              className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">रोल नंबर (ऐच्छिक)</label>
            <input
              type="number"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? "bg-gray-400" : "bg-red-500 hover:bg-red-600"
            } text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition`}
          >
            {loading ? (
              <>
                <FaSyncAlt className="animate-spin" />
                जांच हो रही है...
              </>
            ) : (
              <>
                <FaArrowRight />
                परिणाम देखें
              </>
            )}
          </button>
        </form>
      )}
      {error && (
        <div className="mt-6 bg-red-100 text-red-700 p-4 rounded-lg shadow flex items-center gap-2 max-w-md w-full">
          <FaTimesCircle />
          <span>{error}</span>
        </div>
      )}
      {result && (
        <div className="mt-8 bg-white border-4 border-red-300 p-8 rounded-xl shadow-lg max-w-xl w-full text-left print:border-none print:shadow-none">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-red-600">
              Saraswati Coaching Centre
            </h2>
            <p className="text-gray-700 text-sm">
              बड़गो, बरईपार, गोरखपुर - 273402 <br />
              (बड़ोदा बैंक के सामने, बड़गो)
            </p>
          </div>

          <div className="mb-4 text-green-700 flex items-center gap-2">
            <FaCheckCircle className="text-xl" />
            <h2 className="text-lg font-bold">छात्र का परिणाम</h2>
          </div>
          <p>
            <strong>नाम:</strong> {result.name}
          </p>
          <p>
            <strong>कक्षा:</strong> {result.class}
          </p>
          <p>
            <strong>रोल नंबर:</strong> {result.rollNo}
          </p>

          <hr className="my-3" />

          <div className="overflow-auto">
            <table className="w-full border border-gray-300 text-sm text-center">
              <thead className="bg-yellow-200">
                <tr>
                  <th className="border px-2 py-1">माह</th>
                  <th className="border px-2 py-1">गणित</th>
                  <th className="border px-2 py-1">अंग्रेजी</th>
                  <th className="border px-2 py-1">हिंदी</th>
                  <th className="border px-2 py-1">विज्ञान</th>
                  <th className="border px-2 py-1">सामाजिक विज्ञान</th>
                  <th className="border px-2 py-1">कुल अंक</th>
                </tr>
              </thead>
              <tbody>
                {result.results?.map((r, index) => {
                  const total = Object.values(r.marks).reduce(
                    (a, b) => a + b,
                    0
                  );
                  const max = Object.values(r.maxMarks).reduce(
                    (a, b) => a + b,
                    0
                  );
                  return (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border px-2 py-1 font-semibold text-red-600">
                        {r.testMonth}
                      </td>
                      <td className="border px-2 py-1">
                        {r.marks.math}/{r.maxMarks.math}
                      </td>
                      <td className="border px-2 py-1">
                        {r.marks.english}/{r.maxMarks.english}
                      </td>
                      <td className="border px-2 py-1">
                        {r.marks.hindi}/{r.maxMarks.hindi}
                      </td>
                      <td className="border px-2 py-1">
                        {r.marks.science}/{r.maxMarks.science}
                      </td>
                      <td className="border px-2 py-1">
                        {r.marks.sst}/{r.maxMarks.sst}
                      </td>
                      <td className="border px-2 py-1 font-bold text-green-700">
                        {total}/{max}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 print:hidden">
            <button
              onClick={resetForm}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded-lg shadow-md transition duration-300 flex items-center gap-2"
            >
              <FaSyncAlt />
              दूसरा परिणाम देखें
            </button>
            <button
              onClick={handleDownloadPDF}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition duration-300 flex items-center gap-2"
            >
              <FaDownload />
              PDF निकालें
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
