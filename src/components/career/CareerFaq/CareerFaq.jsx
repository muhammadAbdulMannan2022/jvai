import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import GradientTitle from "../../../Helpers/GradientTitle";

export default function CareerFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "How can I apply for a position?",
      answer:
        "You can apply for a position by visiting our careers page and submitting your application through our online portal. Make sure to include your updated resume and a cover letter explaining why you're interested in joining our team.",
    },
    {
      question: "What is the interview process like?",
      answer:
        "Our interview process typically consists of an initial phone screening, followed by a technical assessment, and finally an in-person or virtual panel interview with the team. The entire process usually takes 2-3 weeks from application to offer.",
    },
    {
      question: "What qualities do you look for in candidates?",
      answer:
        "We value candidates who demonstrate problem-solving abilities, teamwork, adaptability, and a passion for continuous learning. We look for individuals who align with our company values and can contribute to our collaborative culture.",
    },
    {
      question: "What benefits do you offer?",
      answer:
        "We offer a comprehensive benefits package including health insurance, retirement plans, paid time off, parental leave, professional development opportunities, and flexible work arrangements to ensure a healthy work-life balance.",
    },
    {
      question: "Why is JVAI Different?",
      answer:
        "JVAI stands out because of our innovative approach, commitment to employee growth, and dedication to creating meaningful impact. Our unique company culture fosters creativity and collaboration, making us a leader in our industry.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="w-full flex items-center justify-center py-16">
        <GradientTitle
          text={"Have Questions?"}
          className={
            "text-7xl bg-gradient-to-r from-blue-500 to-blue-950 font-bold"
          }
        />
      </div>
      <div className="space-y-4 text-[#515151]">
        {faqItems.map((item, index) => (
          <div key={index} className="border border-gray-200 p-4 rounded">
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full flex justify-between items-center text-left focus:outline-none hover:cursor-pointer"
            >
              <span className="text-gray-700 text-xl font-semibold">
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="text-blue-600 flex-shrink-0"
              >
                <Plus size={20} />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="py-3 text-gray-600 pe-16">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
