import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function Testimonials() {
  return (
    <section className="mt-12 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        What Parents Say
      </h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {/* Testimonial 1 */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 w-full md:w-1/2">
          <p className="text-gray-700 italic mb-4">
            <FaQuoteLeft className="inline-block mr-2 text-blue-400" />
            Excellent coaching and personal attention to every student.
            <FaQuoteRight className="inline-block ml-2 text-blue-400" />
          </p>
          <p className="text-right font-semibold text-gray-600">— Mr. Rajesh</p>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 w-full md:w-1/2">
          <p className="text-gray-700 italic mb-4">
            <FaQuoteLeft className="inline-block mr-2 text-green-400" />
            This coaching center is the best for students in grades 9 to 12. The
            institute is staffed with experienced teachers who not only provide
            excellent education but also motivate every student to achieve their
            best. 👏.
            <FaQuoteRight className="inline-block ml-2 text-green-400" />
          </p>
          <p className="text-right font-semibold text-gray-600">
            — Mr. Aditya Sharma
          </p>
        </div>
      </div>
    </section>
  );
}
