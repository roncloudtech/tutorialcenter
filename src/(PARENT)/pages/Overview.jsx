import React, { useState } from "react";
import DashboardLayout from "../../(Dashboard)/DashboardLayout";
import Title from "../../(Dashboard)/Components/Title";
import StudentProfileList from "../../(Dashboard)/Components/StudentProfileList";
import { Icon } from "@iconify/react/dist/iconify.js";

const training = [
  "training Progress",
  "Jamb Progress",
  "waec Progress",
  "neco Progress",
  "gce Progress",
];
const topics = [
  {
    name: "Noun",
    score: 51,
  },
  {
    name: "Adjective",
    score: 51,
  },
  {
    name: "Pronoun",
    score: 51,
  },
  {
    name: "verb",
  },
];
export default function ParentOverview() {
  const [activeModal, setActiveModal] = useState(false);
  return (
    <DashboardLayout>
      <div className="xl:grid grid-cols-[1fr_0.39fr] p-2.5 xl:p-0">
        {/* RIGHT SIDE */}
        <div className="xl:px-4">
          <Title title={"OVERVIEW"} />
          {/* STUDENT DISPLAY */}
          <div className="flex items-center gap-3 mt-4 dark:text-lightGrey text-mainBlack">
            <div className="flex flex-col items-center">
              <img
                src="https://www.figma.com/file/C2fHCiSoElx3NBQgrtVrXE/image/9fa492644538aeb8fa7ffd83195864e66d955fde"
                alt=""
                className="w-[109px] h-[109px] rounded-full"
              />
              <span className="text-[12px] ">45%</span>
            </div>
            <div className="flex items-center justify-between flex-1">
              <div className=" text-[12px] font-medium space-y-3">
                <p>Name:</p>
                <p>Department :</p>
                <p>Training :</p>
              </div>
              <div className=" text-[12px] font-medium space-y-3 text-right">
                <p>John Doe</p>
                <p>Science</p>
                <p>Waec & Jamb</p>
              </div>
            </div>
          </div>
          {/* TRAINING CARDS */}
          <div className="grid grid-cols-5 gap-2 my-5">
            {training.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-3 text-[12px] dark:text-lightGrey dark:bg-whiteFade rounded-lg py-2"
              >
                <p>{item}</p>
                <div className="elipse w-14 h-14 relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    className="w-14 h-14"
                  >
                    <circle
                      cx="28"
                      cy="28"
                      r="24.5"
                      strokeLinecap="round"
                      className="fill-none stroke-lightGrey stroke-[5px] [stroke-dasharray:165.2] [stroke-dashoffset:35]"
                    />
                  </svg>
                </div>
                <span>45%</span>
              </div>
            ))}
          </div>
          <div className="">
            <div className="dark:bg-darkMode shadow-custom-1 rounded-custom p-2">
              <div className="flex justify-between items-center">
                <div className="flex gap-3 text-xs dark:text-lightGrey flex-1">
                  <Icon
                    icon="streamline:business-progress-bar-2-solid"
                    width="16"
                    height="16"
                  />
                  <span>Mathematics</span>
                </div>
                <div className="Progress flex-1">
                  <div className="w-full h-2.5 bg-lightGrey dark:bg-whiteFade rounded-sm relative">
                    <div className="h-full bg-mainBlue dark:bg-lightGrey rounded-sm w-1/4 " />
                    <label className="text-[8px] text-mainWhite dark:text-darkMode font-medium absolute left-4 -top-[2px]">
                      6%{" "}
                    </label>
                  </div>
                  <div className="flex justify-between items-center mt-1 text-[8px] font-medium dark:text-lightGrey">
                    <p>START</p>
                    <p>FINISH</p>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-lightGrey">
                <div className="flex gap-3">
                  <p>Topics</p>
                  <p>50</p>
                </div>
                <p>Total score: 60</p>
              </div>
            </div>
            {/* TOPICS */}
            <div className="space-y-2 my-3 mx-2">
              {topics.map((topic, i) => (
                <div
                  key={i}
                  className="dark:bg-whiteFade flex justify-between items-center text-[12px] dark:text-lightGrey p-2.5 rounded-custom"
                >
                  <p>{topic.name}</p>
                  <p>score: {topic?.score || "-"}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* LEFT SIDE */}
        <StudentProfileList />
      </div>
      {activeModal && <PerformanceModal setToggleModal={setActiveModal} />}
    </DashboardLayout>
  );
}
const PerformanceModal = ({ setToggleModal }) => {
  return (
    <>
      <div
        className="w-full h-full bg-[#121D244D] absolute top-0 left-0 z-40 cursor-pointer flex items-center justify-center"
        onClick={() => setToggleModal(false)}
      ></div>
      <div className="p-4 w-[700px] h-[403px] bg-white dark:bg-darkMode dark:text-lightGrey shadow-custom-1 absolute top-1/2 left-[47%] -translate-x-1/2 -translate-y-1/2 z-50 border-[0.5px] border-mainGrey border-solid rounded-xl">
        <div className="dark:text-lightGrey flex items-center justify-between">
          <h3 className="text-sm uppercase font-semibold">performance</h3>
          <Icon
            icon="heroicons:x-mark-20-solid"
            width="24"
            height="24"
            className="cursor-pointer"
            onClick={() => setToggleModal(false)}
          />
        </div>
        <div className="mt-4 text-xs dark:text-lightGrey">
          <p>Topic</p>
          <select
            name="Topic"
            id="Topic"
            className="mt-1.5 w-full dark:bg-whiteFade rounded-custom p-2.5 flex justify-between"
          >
            <option value="">Noun</option>
          </select>
        </div>
        {/* PROGRESS */}
        <div className="mt-4">
          <h3 className="dark:text-lightGrey text-sm">JAMB</h3>
        </div>
      </div>
    </>
  );
};
