import React, { useState } from "react";

const FaqsSection = () => {
  // State to keep track of the open question
  const [openIndices, setOpenIndices] = useState([]);

  // Data for FAQs
  const faqs = [
    {
      question:
        "What is the duration of the Professional Data Science and AI Certification by Newton School?",
      answer:
        "Newton School offers various tech-oriented programs for students to excel in their careers.",
    },
    {
      question:
        "What is the duration of the Professional Data Science and AI Certification by Newton School?",
      answer:
        "You can sign up by visiting our website and clicking on the 'Sign Up' button.",
    },
    {
      question:
        "What is the duration of the Professional Data Science and AI Certification by Newton School?",
      answer:
        "We offer courses in Data Science, AI, Web Development, and more.",
    },
    {
      question:
        "What is the duration of the Professional Data Science and AI Certification by Newton School?",
      answer: "Yes, we offer a free trial for the first 7 days.",
    },
    {
      question:
        "What is the duration of the Professional Data Science and AI Certification by Newton School?",
      answer:
        "You can contact support through our official email or customer service number.",
    },
    {
      question:
        "What is the duration of the Professional Data Science and AI Certification by Newton School?",
      answer: "We offer a 30-day refund policy from the date of enrollment.",
    },
    {
      question: "Are there placement opportunities?",
      answer: "Yes, we provide placement assistance for all our courses.",
    },
    {
      question: "Can I get a certificate?",
      answer:
        "Yes, upon completion of the course, you will receive a certificate.",
    },
  ];

  // Toggle function to open/close accordion items
  const toggleAccordion = (index) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-2">
      <div class="text-[#090f1d] uppercase text-center tracking-wide font-medium leading-[1.125em] mb-2 sm:text-sm sm:mb-3">
        <p class="text-[14px] md:text-[32px] lg:text-[32px] text-[#090f1d] tracking-wide uppercase  font-medium leading-[1.125em]   mb-4">
          Faqs
        </p>
      </div>

      <h1 className="text-[34px]  font-bold text-center">
        AI & Data Science Certification FAQs
      </h1>
      <p className="text-slate-700 mb-0 font-sans text-center">
        Everything you need to know about the course. Can’t find the answer
        you’re looking for? Please send us a mail.
      </p>

      {/* FAQ container */}
      <div className="grid grid-cols-1 gap-0 md:grid-cols-1 lg:grid-cols-2 grid-flow-row lg:gap-4  my-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className=" w-full mx-auto md:w-[530px] border-b overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center py-4 text-left"
            >
              <div className="flex flex-col justify-center">
                <span className="font-custom text-base sm:text-[22px] font-medium leading-[1.33]">
                  {faq.question}
                </span>
                <span className="mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="37"
                    viewBox="0 0 36 37"
                    fill="none"
                  >
                    <path
                      d="M18 25.4268C17.7123 25.4268 17.4243 25.3169 17.2046 25.0972L5.95463 13.8472C5.51504 13.4076 5.51504 12.6958 5.95463 12.2565C6.39423 11.8171 7.10607 11.8169 7.54538 12.2565L18 22.7111L28.4546 12.2565C28.8942 11.8169 29.6061 11.8169 30.0454 12.2565C30.4847 12.696 30.485 13.4079 30.0454 13.8472L18.7954 25.0972C18.5757 25.3169 18.2877 25.4268 18 25.4268Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </div>
            </button>

            {/* Animated answer section */}
            <div
              className={`transition-all duration-500 ease-in-out transform-gpu ${
                openIndices.includes(index)
                  ? "max-h-40 translate-y-0 scale-100 opacity-100"
                  : "max-h-0 translate-y-5 scale-95 opacity-0"
              }`}
            >
              <div className="pl-4 pb-4 text-gray-700">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqsSection;
