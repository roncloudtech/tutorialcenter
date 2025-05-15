import React, { useState } from "react";
import DashboardLayout from "../../DashboardLayout";
import { Icon } from "@iconify/react/dist/iconify.js";
import Chat from "../../Components/Chat";
import Title from "../../Components/Title";

export default function Help() {
  return (
    <>
      <DashboardLayout>
        <div className="xl:grid grid-cols-[1fr_0.40fr] p-2.5 xl:p-0 h-full scroll sm:overflow-y-auto">
          <div className="item1 xl:px-4 overflow-y-auto">
            {/* header */}
            <Title title={"help"} />
            <p className="text-sm font-semibold dark:text-lightGrey text-mainBlack">
              Customer Care
            </p>
            <Chat />
          </div>
          <div className="dark:bg-darkMode bg-mainWhite  scroll overflow-y-auto shadow-custom-1 dark:text-lightGrey rounded-lg p-3 m-0.5">
            <h2 className="uppercase text-xs font-semibold p-3 rounded-custom bg-ascent text-mainWhite dark:text-lightGrey">
              contact us
            </h2>
            <div className="mt-6">
              <h4 className="uppercase text-xs font-semibold">
                frequently asked questions
              </h4>
              <div className="flex items-center gap-4 dark:bg-whiteFade bg-lightGrey py-2 px-4 my-4 rounded-xl">
                <input
                  type="text"
                  placeholder="Search group"
                  className="w-full h-full placeholder:text-[10px] rounded-r-2xl text-xs bg-transparent"
                />
                <Icon icon="ri:search-line" width="24" height="24" />
              </div>
              {/* FAQ */}
              <FAQ />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}

const FAQ = () => {
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
  const questionLengths = Array(FaqQuestion.length).fill(false);
  const [visible, setVisible] = useState(questionLengths);
  // function to toggle the display of the faq answers when the question is clicked
  const toggleVisible = (index) => {
    setVisible((prev) => {
      const newVisibleItems = questionLengths;
      newVisibleItems[index] = !prev[index];
      return newVisibleItems;
    });
  };
  return (
    <div className="faqs">
      {FaqQuestion.map((item, index) => (
        <button
          className={`p-2 mb-2 ${
            visible[index] ? "dark:bg-lightGrey bg-mainBlue rounded-xl" : ""
          } `}
          onClick={() => toggleVisible(index)}
          key={index}
        >
          <button className="w-full h-full flex items-center">
            <Icon
              icon="hugeicons:arrow-up-01"
              width="25"
              height="25"
              className={`${
                visible[index] ? "rotate-180 text-ascent" : "rotate-90"
              } `}
            />
            <span
              className={`${
                visible[index] ? "text-ascent" : "dark:text-lightGrey"
              } text-[14px] font-semibold `}
            >
              {item.questions}
            </span>
          </button>
          <div
            className={`${
              visible[index] ? "mt-2 visible h-[auto]" : "invisible hidden"
            }  `}
          >
            <p className="text-[12px] pl-2 dark:text-mainBlack text-mainWhite">
              {item.answers}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
};
