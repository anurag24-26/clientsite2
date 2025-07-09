import { useState } from "react";

export default function Highlights() {
  const [announcements, setAnnouncements] = useState([
    "🎉 जुलाई माह का परीक्षा परिणाम घोषित किया गया है!",
  ]);

  return (
    <section className="max-w-5xl mx-auto mt-10 px-4 space-y-10">
      {/* Announcements Section */}
      <div className="bg-indigo-50 rounded-2xl shadow-md p-6 sm:p-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-indigo-700">📢 घोषणाएँ</h3>
        </div>
        {announcements.length === 0 ? (
          <p className="text-gray-600 text-sm">कोई घोषणा नहीं है।</p>
        ) : (
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
            {announcements.map((text, idx) => (
              <li key={idx}>{text}</li>
            ))}
          </ul>
        )}
      </div>
      {/* Highlights Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6">
          हमारी विशेषताएँ
        </h2>
        <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base font-medium">
          {[
            "कक्षा 1 से 8 तक सभी विषय (CBSE एवं UP बोर्ड)",
            "कक्षा 9 से 12 तक गणित व भौतिकी (CBSE एवं UP बोर्ड)",
            "निःशुल्क इंग्लिश स्पीकिंग एवं सामान्य ज्ञान कक्षाएँ",
            "अनुभवी शिक्षकों द्वारा शिक्षण",
            "प्रत्येक दिन गृहकार्य",
            "महीने में दो बार टेस्ट",
            "कमजोर छात्रों के लिए अलग व्यवस्था",
            "महीने के अंत में शिक्षक-अभिभावक बैठक",
          ].map((item, i) => (
            <span
              key={i}
              className="bg-white px-4 py-2 rounded-lg shadow text-gray-800 hover:bg-gray-50 transition"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
