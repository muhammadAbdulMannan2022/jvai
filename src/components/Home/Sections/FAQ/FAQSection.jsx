import { useState } from "react";
import { motion } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useGetFaQQuery } from "../../../../redux/features/apiSlice";
import { useNavigate } from "react-router";



// Team data
const teamData = [
  {
    id: 1,
    image: "/team/1.png",
    alt: "Team member",
  },
  {
    id: 2,
    image: "/team/2.png",
    alt: "Team member",
  },
  {
    id: 3,
    image: "/team/3.png",
    alt: "Team member",
  },
  {
    id: 4,
    image: "/team/4.png",
    alt: "Team member",
  },
  {
    id: 5,
    image: "/team/5.png",
    alt: "Team member",
  },
];

// FAQ Accordion Item component
const AccordionItem = ({ question, answer, isOpen, onClick }) => {

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex w-full items-center justify-between py-4 text-left hover:cursor-pointer"
        onClick={onClick}
      >
        <span className="text-sm font-medium text-gray-900 md:text-base">
          {question}
        </span>
        <span className="ml-6 flex items-center">
          {isOpen ? (
            <FiMinus className="h-4 w-4 text-gray-500" />
          ) : (
            <FiPlus className="h-4 w-4 text-gray-500" />
          )}
        </span>
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="pb-4 text-sm text-gray-600"
        >
          <p>{answer}</p>
        </motion.div>
      )}
    </div>
  );
};

export default function FAQTeamSection() {
  const { data: faqData, isLoading, isError } = useGetFaQQuery();
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate()

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {/* Team Section */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-blue-900 md:text-3xl"
            >
              Quick Answers for You <span className="text-blue-600">(FAQ)</span>
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-xl font-semibold text-gray-900"
            >
              Have Any <span className="text-blue-600">Questions?</span>
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 flex -space-x-4"
            >
              {teamData.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="overflow-hidden rounded-full border-2 border-white shadow-md w-14 h-14"
                >
                  <img
                    loading="lazy"
                    src={member.image}
                    alt={member.alt}
                    width={60}
                    className="w-14 rounded-full object-cover md:h-16 md:w-16"
                  />
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 text-sm text-gray-700 md:text-base"
            >
              Start your next project with the perfect team today
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-md transition-colors hover:bg-blue-700  focus:ring-2  md:text-base hover:cursor-pointer"
              >
                Book a Quick Call
              </motion.button>
            </motion.div>
          </div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6"
          >
            {isLoading ? (
              <div className="text-center py-8 text-gray-500">Loading FAQs...</div>
            ) : isError || !faqData?.length ? (
              <div className="text-center py-8 text-red-500">
                Failed to load FAQs.
              </div>
            ) : (
              faqData.map((item, index) => (
                <AccordionItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onClick={() => handleToggle(index)}
                />
              ))
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
