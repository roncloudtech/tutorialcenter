import React, { useState } from "react";
import Title from "./Cards/Title";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Faq() {
  const FaqQuestion = [
    {
      questions: "What is Tutorial Center?",
      answers:
        " Tutorial Center is an online e-learning platform designed to help Nigerian students prepare for major exams like JAMB,  WAEC, NECO, and GCE through interactive tutorials, live  classes, and exam-focused resources.",
    },
    {
      questions: "What subjects are covered on Tutorial Center?",
      answers:
        " Tutorial Center is an online e-learning platform designed to help Nigerian students prepare for major exams like JAMB,  WAEC, NECO, and GCE through interactive tutorials, live  classes, and exam-focused resources.",
    },
    {
      questions: "How much does it cost to enroll in a program?",
      answers:
        " Tutorial Center is an online e-learning platform designed to help Nigerian students prepare for major exams like JAMB,  WAEC, NECO, and GCE through interactive tutorials, live  classes, and exam-focused resources.",
    },
    {
      questions: "How do I register for classes? ",
      answers:
        " Tutorial Center is an online e-learning platform designed to help Nigerian students prepare for major exams like JAMB,  WAEC, NECO, and GCE through interactive tutorials, live  classes, and exam-focused resources.",
    },
    {
      questions: "Can I attend classes at my convenience?",
      answers:
        " Tutorial Center is an online e-learning platform designed to help Nigerian students prepare for major exams like JAMB,  WAEC, NECO, and GCE through interactive tutorials, live  classes, and exam-focused resources.",
    },
    {
      questions: "Are the classes taught by qualified teachers?",
      answers:
        " Tutorial Center is an online e-learning platform designed to help Nigerian students prepare for major exams like JAMB,  WAEC, NECO, and GCE through interactive tutorials, live  classes, and exam-focused resources.",
    },
    {
      questions: "What happens if I miss a live class?",
      answers:
        " Tutorial Center is an online e-learning platform designed to help Nigerian students prepare for major exams like JAMB,  WAEC, NECO, and GCE through interactive tutorials, live  classes, and exam-focused resources.",
    },
    {
      questions: "How do I make payments?",
      answers:
        " Tutorial Center is an online e-learning platform designed to help Nigerian students prepare for major exams like JAMB,  WAEC, NECO, and GCE through interactive tutorials, live  classes, and exam-focused resources.",
    },
  ];
  const [visible, setVisible] = useState(Array(FaqQuestion.length).fill(false));
  // function to toggle the display of the faq answers when the question is clicked
  const toggleVisible = (index) => {
    setVisible((prev) => {
      const newVisibleItems = Array(prev.length).fill(false); // Reset all to false
      newVisibleItems[index] = !prev[index]; // Toggle the clicked item
      return newVisibleItems;
    });
  };
  return (
    <>
      <Title title={"faq"} left={true} />
      <div className="Container">
        <div className="area-wrapper !pt-16 !pb-0">
          <div className="text-center mb-10">
            <h2 className="header-title text-primary mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-sm">
              Here are the most frequently asked questions
            </p>
          </div>
          <div className="faqs space-y-3">
            {FaqQuestion.map((item, index) => (
              <button
                className={`p-3 block w-full text-start  ${
                  visible[index] ? "bg-[#E336290D]" : "bg-white shadow"
                } border border-solid border-[rgb(169,193,211)] rounded-xl`}
                onClick={() => toggleVisible(index)}
                key={index}
              >
                <div className="w-full h-full flex justify-between items-center">
                  <span
                    className={`${
                      visible[index] ? "text-[#8695A0]" : "text-primary"
                    } text-primary text-sm font-semibold`}
                  >
                    {item.questions}
                  </span>
                  <Icon
                    icon="hugeicons:arrow-up-01"
                    width="35"
                    height="35"
                    style={{ color: "#000" }}
                    className={`${
                      visible[index] ? "rotate-180" : "rotate-90"
                    } transition-all ease-custom duration-300`}
                  />
                </div>
                <div
                  className={`${
                    visible[index] ? "mt-2 visible h-[auto]" : "invisible h-0"
                  } md:pr-8 transition-height ease-custom duration-300`}
                >
                  <p className="text-[14.4px]">{item.answers}</p>
                </div>
              </button>
            ))}
          </div>
          <div className="text-center mb-3 mt-10 max-w-[650px] mx-auto">
            <h2 className="header-title text-primary mb-2">
              Still have questions?
            </h2>
            <p className="text-sm ">
              If you cannot find answers to your questions in our FAQs, you can
              always contact us. We will answer you shortly.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
