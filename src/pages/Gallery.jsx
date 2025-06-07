import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import winner from "../assets/Imagegallery/winner.jpg";
import mandir from "../assets/Imagegallery/tour.jpg";
import mandir2 from "../assets/Imagegallery/tour (2).jpg";
import student from "../assets/Imagegallery/students.jpg";
import teacherday from "../assets/Imagegallery/teacherday.jpg";
const galleryImages = [
  {
    src: winner,
    title: "Sports Competition 2024",
    year: "2024",
    category: "Competition",
  },
  {
    src: mandir,
    title: "Temple Visit 2024",
    year: "2024",
    category: "Tour",
  },
  {
    src: mandir2,
    title: "Temple Visit 2023",
    year: "2023",
    category: "Tour",
  },
  {
    src: student,
    title: "Classroom Activities 2025",
    year: "2025",
    category: "Activities",
  },
  {
    src: teacherday,
    title: "Students",
    year: "2024",
    category: "Class",
  },
  // Add more images...
];

const uniqueYears = ["All", ...new Set(galleryImages.map((img) => img.year))];

export default function Gallery() {
  const [filterYear, setFilterYear] = useState("All");
  const [selectedImg, setSelectedImg] = useState(null);

  const filteredImages =
    filterYear === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.year === filterYear);

  return (
    <section className="bg-white py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-red-600 mb-10">
        Gallery & Events
      </h2>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {uniqueYears.map((year) => (
          <button
            key={year}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              filterYear === year
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-red-400 hover:text-white transition-all`}
            onClick={() => setFilterYear(year)}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredImages.map((img, index) => (
          <div
            key={index}
            className="cursor-pointer group overflow-hidden rounded-xl shadow-md"
            onClick={() => setSelectedImg(img)}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
            />
            <div className="bg-red-600 text-white text-center py-2 text-sm">
              {img.title}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.img
              src={selectedImg.src}
              alt={selectedImg.title}
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // prevent closing on image click
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
