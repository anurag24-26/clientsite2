import React from "react";
import {
  FaBookOpen,
  FaGraduationCap,
  FaClock,
  FaLightbulb,
  FaBullhorn,
} from "react-icons/fa";

export default function Courses() {
  return (
    <div className="px-4 py-12 mt-10 bg-gradient-to-br from-red-50 to-red-100 min-h-screen">
      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-red-600 text-center mb-10 drop-shadow-md">
        📚 हमारे पाठ्यक्रम
      </h1>

      {/* Announcement Section */}
      <div className="bg-red-100 border-l-8 border-red-600 p-6 rounded-xl shadow mb-10">
        <h2 className="text-2xl font-bold text-red-700 flex items-center gap-3 mb-2">
          <FaBullhorn className="text-red-500" /> नवीनतम जानकारी:
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1 text-base sm:text-lg">
          <li>अब कक्षा 1 से 8 तक सभी विषयों की कक्षाएँ उपलब्ध हैं।</li>
          <li>
            कक्षा 9 से 12 तक – मुख्य फोकस: <strong>Physics</strong> व{" "}
            <strong>Math</strong>।
          </li>
          <li>
            <strong>GK, English Speaking & Personality Development</strong> की
            कक्षाएँ मुफ्त!
          </li>
          <li>CBSE और UP बोर्ड दोनों के लिए विशेष बैच।</li>
        </ul>
      </div>

      {/* Course Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/* Class 1–8 */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-2">
            <FaGraduationCap className="text-red-500" /> कक्षा 1–8 (CBSE & UP)
          </h3>
          <p className="text-sm text-gray-500 mb-1">विषय:</p>
          <div className="flex flex-wrap gap-2 text-sm text-white">
            {[
              "Hindi",
              "English",
              "Math",
              "Science",
              "Social Science",
              "GK",
              "Computer",
            ].map((subj) => (
              <span
                key={subj}
                className="bg-red-400 px-3 py-1 rounded-full shadow"
              >
                {subj}
              </span>
            ))}
          </div>
        </div>

        {/* Class 9–12 */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-2">
            <FaGraduationCap className="text-red-500" /> कक्षा 9–12 (CBSE & UP)
          </h3>
          <p className="text-sm text-gray-500 mb-1">मुख्य विषय:</p>
          <div className="flex flex-wrap gap-2 text-sm text-white">
            {["Physics", "Math", "English", "Hindi"].map((subj) => (
              <span
                key={subj}
                className="bg-red-400 px-3 py-1 rounded-full shadow"
              >
                {subj}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Three Card Section (Batch Timings, Special Classes, Teaching Approach) */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {/* Batch Timings */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
            <FaClock className="text-red-500" /> कक्षा समय
          </h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
            <li>प्रातः: 7:00 AM – 10:00 AM (सोम – शनि)</li>
            <li>सायं: 3:00 PM – 7:00 PM (सोम – शनि)</li>
            <li>रविवार: विशेष टेस्ट सिरीज़</li>
          </ul>
        </div>

        {/* Special Classes */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-2xl font-bold text-red-700 mb-4 flex items-center gap-2">
            <FaLightbulb className="text-red-500" /> विशेष कक्षाएँ
          </h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
            <li>GK व करेंट अफेयर्स</li>
            <li>Free English Speaking Classes</li>
            <li>Personality Development Sessions</li>
          </ul>
        </div>

        {/* Teaching Approach */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
            <FaBookOpen className="text-red-500" /> शिक्षण प्रणाली
          </h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
            <li>साप्ताहिक डाउट सेशन</li>
            <li>नियमित टेस्ट सिरीज़</li>
            <li>व्यक्तिगत मार्गदर्शन</li>
            <li>कॉन्सेप्ट आधारित पढ़ाई</li>
            <li>पारदर्शी मूल्यांकन और रिपोर्ट</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
