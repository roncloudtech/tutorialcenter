import React, { useState } from "react";
import DashboardLayout from "../../DashboardLayout";
import { Icon } from "@iconify/react/dist/iconify.js";
import Chat from "../../Components/Chat";

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
export default function Help() {
  return (
    <>
      <DashboardLayout>
        <div className="grid grid-cols-[1fr_290px] h-full">
          <div className="px-5">
            {/* header */}
            <div className="flex justify-between items-center  py-2 rounded-md mb-4">
              <h3 className="uppercase  font-semibold">HELP</h3>
              <div className="w-9 h-9 flex justify-center items-center bg-slate-300 rounded-md">
                <Icon
                  icon="iconoir:bell-notification-solid"
                  width="24"
                  height="24"
                  style={{ color: "#000" }}
                />
              </div>
            </div>
            <div className="">
              <p className="text-sm font-semibold">Customer Care</p>
              <div className="">
                <Chat />
              </div>
            </div>
          </div>
          <div className="bg-[#EAEBEC] rounded-lg p-3">
            <h2 className="uppercase text-base font-semibold">contact us</h2>
            <div className="mt-6">
              <h4 className="uppercase text-xs font-semibold">
                frequently asked questions
              </h4>
              <div className="flex items-center gap-4 bg-[#FFFDFD] py-2 px-4 my-4 rounded-xl">
                <input
                  type="text"
                  placeholder="Search group"
                  className="w-full h-full placeholder:text-[10px] rounded-r-2xl text-xs"
                />
                <Icon
                  icon="ri:search-line"
                  width="24"
                  height="24"
                  style={{ color: "#000" }}
                />
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
  const [visible, setVisible] = useState(Array(FaqQuestion.length).fill(false));
  // function to toggle the display of the faq answers when the question is clicked
  const toggleVisible = (index) => {
    setVisible((prev) => {
      const newVisibleItems = [...prev];
      newVisibleItems[index] = !newVisibleItems[index];
      return newVisibleItems;
    });
  };
  return (
    <div className="faqs">
      {FaqQuestion.map((item, index) => (
        <div
          className={`p-2 mb-2 ${
            visible[index] ? "bg-[white] rounded-xl" : ""
          } `}
          onClick={() => toggleVisible(index)}
          key={index}
        >
          <button className="w-full h-full flex items-center">
            <Icon
              icon="hugeicons:arrow-up-01"
              width="25"
              height="25"
              style={{ color: "#000" }}
              className={`${
                visible[index] ? "rotate-180" : "rotate-90"
              } transition-all ease-custom duration-300`}
            />
            <span
              className={`${
                visible[index] ? "text-[#8695A0]" : "text-primary"
              } text-primary text-[14px] font-semibold`}
            >
              {item.questions}
            </span>
          </button>
          <div
            className={`${
              visible[index] ? "mt-2 visible h-[auto]" : "invisible h-0"
            }  transition-height ease-custom duration-300`}
          >
            <p className="text-[12px] pl-2">{item.answers}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
