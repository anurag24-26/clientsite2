import React from "react";
import { FaChalkboardTeacher, FaAward } from "react-icons/fa";

const facultyList = [
  {
    name: "Mr. Rajnish Dubey",
    subjects: ["Physics", "Math"],
    experience: "8+ years",
    photo:
      "https://scontent-del2-1.xx.fbcdn.net/v/t39.30808-6/257939369_4353539168089882_6387013506004288017_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Po21UyMAKdUQ7kNvwHiMQXF&_nc_oc=Adkl2ij1yj2bClT7aJ8ztH7IYGQAjXas84GrUyWcDqIMHo-1GYUCH5iULS-HzEc9cMs&_nc_zt=23&_nc_ht=scontent-del2-1.xx&_nc_gid=owaqmTqM7yDDGwnlo-MNAQ&oh=00_AfGZjilW3rfMqz7wruckmCLqolo_wXtgZ8QPAdB2lrzsng&oe=680DC7F3",
  },
  {
    name: "Mr. Durgesh Pandey",
    subjects: ["Biology", "Chemistry", "Physics"],
    experience: "6+ years",
    photo:
      "https://scontent-del1-1.xx.fbcdn.net/v/t1.6435-9/60335197_832772970401544_3829720036017176576_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=9YTRX7SVS-oQ7kNvwEAQNRl&_nc_oc=AdkJ5-uHFDbpwOci5i5ZqlWWT0eGabra1AnIZS5J20Q0VikyG50n2FayuCyQIwCsuXA&_nc_zt=23&_nc_ht=scontent-del1-1.xx&_nc_gid=k5qyU1v0qb9eGDsI6NQpKw&oh=00_AfGPYrVtLesKOkC9kSxBN5t-Jf1xpCnqFmIFdXDHZkh-Kg&oe=682F6FDA",
  },
  {
    name: "Mr. Abhishek ",
    subjects: ["Commerce"],
    experience: "5+ years",
    photo:
      "https://scontent-del1-2.xx.fbcdn.net/v/t39.30808-1/332405351_536162648609478_20338765117569309_n.jpg?stp=dst-jpg_p100x100_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=Tc2lgOZkOZwQ7kNvwH06hx-&_nc_oc=AdnT4KkZrmxe82E6-PEdAtMlmzZcd7kFCOE-efRob80zO3abubm6rXA6iN3mgzOjq3s&_nc_zt=24&_nc_ht=scontent-del1-2.xx&_nc_gid=f0pMMB4o2eRjgpwXOF1yPA&oh=00_AfGeB-Df9r20lLE4O3pchVoFSNMolqG-_TerZ41wkCW7nw&oe=680DB53F",
  },
];

export default function Faculty() {
  return (
    <div className="px-4 mt-10 py-12 bg-gradient-to-br from-yellow-50 to-orange-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-orange-600 text-center mb-10">
        👩‍🏫 Our Faculty
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {facultyList.map((faculty, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden p-5 flex flex-col items-center text-center"
          >
            {/* Optional Photo */}
            {faculty.photo ? (
              <img
                src={faculty.photo}
                alt={faculty.name}
                className="w-24 h-24 object-cover rounded-full mb-4"
              />
            ) : (
              <div className="w-24 h-24 flex items-center justify-center bg-orange-200 rounded-full mb-4 text-orange-700 text-3xl font-bold">
                {faculty.name.charAt(0)}
              </div>
            )}

            <h3 className="text-xl font-bold text-gray-800 mb-1">
              {faculty.name}
            </h3>

            <p className="text-sm text-gray-600 flex items-center gap-1 mb-2">
              <FaChalkboardTeacher className="text-orange-500" />
              <span className="font-medium text-gray-700">
                {faculty.subjects.join(", ")}
              </span>
            </p>

            <p className="text-sm text-gray-600 flex items-center gap-1">
              <FaAward className="text-orange-500" />
              Experience:{" "}
              <span className="font-medium text-gray-700">
                {faculty.experience}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
