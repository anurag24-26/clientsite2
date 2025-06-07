import { motion } from "framer-motion";
import Director from "../assets/director.jpg";
import MissionImg from "../assets/muly.jpg";
import WhyUsImg from "../assets/whyus.png";
import AchievementsImg from "../assets/achivements.jpg";

export default function About() {
  function AnimatedSection({ title, bg, children, flip = false, image }) {
    return (
      <motion.div
        initial={{ opacity: 0, x: flip ? 80 : -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className={`${bg} rounded-2xl shadow-md p-6 sm:p-10 flex flex-col ${
          flip ? "md:flex-row-reverse" : "md:flex-row"
        } gap-8 items-center`}
      >
        <div className="flex-1">
          <h3 className="text-2xl sm:text-3xl font-semibold text-orange-600 mb-4">
            {title}
          </h3>
          <div className="text-base sm:text-lg text-gray-700 leading-relaxed">
            {children}
          </div>
        </div>
        {image && (
          <div className="flex-1 flex justify-center items-center">
            <img
              src={image}
              alt={title}
              className="w-full max-w-[300px] rounded-xl shadow-lg object-cover"
            />
          </div>
        )}
      </motion.div>
    );
  }

  return (
    <section className="text-gray-800 bg-amber-100 max-w-screen-xl mx-auto px-4 mt-10 sm:px-6 lg:px-12 py-16 sm:py-20 space-y-16 sm:space-y-24">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold text-center  text-orange-600 tracking-wide"
      >
        हमारे बारे में
      </motion.h2>

      {/* Director Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 p-6 sm:p-10 bg-white rounded-3xl shadow-xl"
      >
        <div className="flex-1 flex justify-center">
          <img
            src={Director}
            alt="Shubham Pandey"
            className="w-48 sm:w-72 h-48 sm:h-72 rounded-3xl object-cover border-[2px] border-orange-500 shadow-xl"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl sm:text-4xl font-bold text-orange-600 mb-4">
            निदेशक का संदेश - शुभम पांडेय
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            सरस्वती कोचिंग सेंटर में, हमारा मानना है कि हर छात्र में कुछ खास
            होता है। हम न केवल उनकी शैक्षणिक सफलता पर ध्यान देते हैं, बल्कि
            आत्मविश्वास और नैतिक मूल्यों को भी बढ़ावा देते हैं।
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            मैं, शुभम पांडेय, प्रबंध निदेशक के रूप में यह वादा करता हूँ कि हम
            प्रत्येक छात्र को एक ऐसा माहौल प्रदान करेंगे जहाँ वह पूरी लगन से सीख
            सके और अपने सपनों को साकार कर सके।
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      <AnimatedSection
        title="हमारा उद्देश्य और मूल्य"
        bg="bg-pink-50"
        flip={false}
        image={MissionImg}
      >
        <p>
          सरस्वती कोचिंग सेंटर का मुख्य उद्देश्य कक्षा 3 से 12 (CBSE) और 9 से 12
          (UP बोर्ड) के छात्रों को गुणवत्ता-युक्त शिक्षा प्रदान करना है। हम
          व्यक्तिगत मार्गदर्शन, मूल्य आधारित शिक्षा और निरंतर मूल्यांकन में
          विश्वास करते हैं।
        </p>
      </AnimatedSection>

      <AnimatedSection
        title="हमें क्यों चुनें?"
        bg="bg-orange-50"
        flip={true}
        image={WhyUsImg}
      >
        <ul className="list-disc pl-4 space-y-2 text-base sm:text-lg text-gray-700">
          <li>अनुभवी और समर्पित शिक्षक</li>
          <li>छोटे बैचों में पढ़ाई से व्यक्तिगत ध्यान</li>
          <li>साप्ताहिक और मासिक टेस्ट के माध्यम से प्रगति का मूल्यांकन</li>
          <li>नियमित अभिभावक-शिक्षक संवाद</li>
          <li>कॉन्सेप्ट-क्लियरिंग और डाउट सत्र</li>
          <li>शांति और प्रेरणा से भरपूर अध्ययन वातावरण</li>
        </ul>
      </AnimatedSection>

      <AnimatedSection
        title="हमारी उपलब्धियाँ"
        bg="bg-pink-100"
        flip={false}
        image={AchievementsImg}
      >
        <ul className="list-disc pl-4 space-y-2 text-base sm:text-lg text-gray-700">
          <li>150+ छात्र देश के प्रमुख कॉलेजों में चयनित</li>
          <li>CBSE और UP बोर्ड में 90%+ सफलता दर</li>
          <li>NEET, JEE जैसे प्रतियोगी परीक्षाओं में सफलता</li>
        </ul>
      </AnimatedSection>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-orange-600 text-white rounded-2xl shadow-xl p-8 sm:p-10 text-center"
      >
        <h4 className="text-2xl sm:text-3xl font-bold mb-4">
          हमसे जुड़ें और अपने भविष्य को आकार दें
        </h4>
        <p className="text-base sm:text-lg mb-6">
          आज ही एडमिशन लें और बेहतर शिक्षा की ओर कदम बढ़ाएं।
        </p>
        <button className="bg-white text-orange-700 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
          एडमिशन के लिए संपर्क करें
        </button>
      </motion.div>
    </section>
  );
}
