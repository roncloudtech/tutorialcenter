import React, { useState } from "react";
import DashboardLayout from "../../DashboardLayout";
import { Icon } from "@iconify/react/dist/iconify.js";
import Chat from "../../Components/Chat";
import Title from "../../Components/Title";
import FaqBtn from "../../Components/FaqBtn";

export default function Help() {
  return (
    <>
      <DashboardLayout>
        <div className="xl:grid grid-cols-[1fr_0.40fr] p-2.5 xl:p-0 h-full scroll sm:overflow-y-auto">
          <div className="item1 xl:px-4 overflow-y-auto">
            {/* header */}
            <Title title={"help"} />
            <div className="xl:block hidden">
              <p className="text-sm font-semibold dark:text-lightGrey text-mainBlack">
                Customer Care
              </p>
              <Chat />
            </div>
          </div>
          <div className="dark:bg-darkMode bg-mainWhite  scroll overflow-y-auto sm:shadow-custom-1 dark:text-lightGrey rounded-lg sm:p-3 sm:m-0.5 max-sm:mt-4">
            <h2 className="uppercase text-xs max-sm:text-center font-semibold p-3 rounded-custom bg-ascent text-mainWhite dark:text-lightGrey">
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
  const [faqs, setFaqs] = useState([
    {
      questions: "What is Tutorial Center?",
      answers:
        " Tutorial Center is an online e-learning platform designed to help Nigerian students prepare for major exams like JAMB,  WAEC, NECO, and GCE through interactive tutorials, live  classes, and exam-focused resources.",
      open: true,
    },
    {
      questions: "What subjects are covered on Tutorial Center?",
      answers:
        " Tutorial Center is an online e-learning platform designed to help Nigerian students prepare for major exams like JAMB,  WAEC, NECO, and GCE through interactive tutorials, live  classes, and exam-focused resources.",
      open: false,
    },
    {
      questions: "How much does it cost to enroll in a program?",
      answers:
        " Tutorial Center is an online e-learning platform designed to help Nigerian students prepare for major exams like JAMB,  WAEC, NECO, and GCE through interactive tutorials, live  classes, and exam-focused resources.",
      open: false,
    },
    {
      questions: "How do I register for classes? ",
      answers:
        " Tutorial Center is an online e-learning platform designed to help Nigerian students prepare for major exams like JAMB,  WAEC, NECO, and GCE through interactive tutorials, live  classes, and exam-focused resources.",

      open: false,
    },
    {
      questions: "Can I attend classes at my convenience?",
      answers:
        " Tutorial Center is an online e-learning platform designed to help Nigerian students prepare for major exams like JAMB,  WAEC, NECO, and GCE through interactive tutorials, live  classes, and exam-focused resources.",
      open: false,
    },
    {
      questions: "Are the classes taught by qualified teachers?",
      answers:
        " Tutorial Center is an online e-learning platform designed to help Nigerian students prepare for major exams like JAMB,  WAEC, NECO, and GCE through interactive tutorials, live  classes, and exam-focused resources.",
      open: false,
    },
    {
      questions: "What happens if I miss a live class?",
      answers:
        " Tutorial Center is an online e-learning platform designed to help Nigerian students prepare for major exams like JAMB,  WAEC, NECO, and GCE through interactive tutorials, live  classes, and exam-focused resources.",
      open: false,
    },
    {
      questions: "How do I make payments?",
      answers:
        " Tutorial Center is an online e-learning platform designed to help Nigerian students prepare for major exams like JAMB,  WAEC, NECO, and GCE through interactive tutorials, live  classes, and exam-focused resources.",
      open: false,
    },
  ]);
  // function to toggle the display of the faqs answers when the question is clicked
  const toggleVisible = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };
  return (
    <div className="faqs">
      {faqs.map((faq, index) => (
        <FaqBtn
          key={index}
          faq={faq}
          index={index}
          toggleVisible={toggleVisible}
        />
      ))}
    </div>
  );
};
