import React, { useState } from "react";
import DashboardLayout from "../../DashboardLayout";
import ProgressBar from "../../Components/ProgressBar";
import { Icon } from "@iconify/react/dist/iconify.js";
import Chat from "../../Components/Chat";
import Title from "../../Components/Title";
import { Link } from "react-router-dom";

export default function Coursepage() {
  const [show, setShow] = useState(false);
  return (
    <>
      {show ? (
        <MediumScreenAllTopics setTopic={setShow} />
      ) : (
        <DashboardLayout>
          <div className="xl:grid grid-cols-[1fr_0.38fr] p-2.5 xl:p-0 h-full scroll sm:overflow-y-auto">
            {/* left Side */}
            <div className="item1 xl:px-4 overflow-y-auto">
              {/* header */}
              <Title title={"COURSE"} />
              {/* PROGRESS SECTION */}
              <div className="w-full mt-3">
                <MediumScreenCourseProgressBar />
                <div className="progress bar">
                  <ProgressBar title="mathematics progress bar" />
                </div>
              </div>
              <div className="mt-3 sm:flex">
                <MediumScreenTopicLists setTopic={setShow} />
                <div className="hidden sm:block content1 mr-4 ring-[0.5px] ring-mainBlue bg-mainBlue dark:bg-darkMode rounded-lg">
                  <div className="title w-full flex justify-center text-mainWhite  py-1.5 ">
                    <h3 className="uppercase text-[16px] font-bold">Jamb</h3>
                  </div>
                  <div className="bg-lightGrey dark:bg-whiteFade rounded-lg flex w-full [&_li]:text-[9px]  [&_li]:m-[2px] [&_li]:text-mainBlack [&_li]:dark:text-lightGrey  [&_li]:p-1 [&_li]:rounded-lg">
                    <div className="flex-1">
                      <p className="text-[12px] uppercase bg-mainLightBlue dark:bg-whiteFade text-mainWhite dark:text-lightGrey px-5 py-2">
                        Subject
                      </p>
                      <ul className="">
                        <li>Mathemtics</li>
                        <li>Mathemtics</li>
                        <li>Mathemtics</li>
                        <li>Mathemtics</li>
                      </ul>
                    </div>
                    <div className="item">
                      <div className="w-[1px] h-full bg-mainBlack " />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] bg-mainLightBlue dark:bg-whiteFade text-mainWhite dark:text-lightGrey px-5 py-2">
                        Topics
                      </p>
                      <ul>
                        <li>Number</li>
                        <li>Measurement</li>
                        <li>Geometry</li>
                        <li>Trigonometry</li>
                        <li>Trigonometry</li>
                        <li>Trigonometry</li>
                        <li>Trigonometry</li>
                        <li>Trigonometry</li>
                        <li>Trigonometry</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Video Section  */}
                <div className="w-full">
                  <div className="hidden sm:flex justify-between py-1 text-[16px] text-mainBlack dark:text-lightGrey font-semibold">
                    <p>SUBJECT</p>
                    <p>MATHEMATICS</p>
                  </div>
                  <video
                    src={null}
                    className="relative w-full h-[260px] bg-[#EDF7ED] rounded-md"
                  >
                    <div className="w-16 h-16 rounded-full bg-white absolute top-1/4 right-1/2 flex justify-center items-center">
                      <Icon
                        icon="solar:play-bold-duotone"
                        width="24"
                        height="24"
                        style={{ color: "#47C05D" }}
                      />
                    </div>
                  </video>
                </div>
              </div>
              <div className="Right Side">
                {/* Download Course Material */}
                <div className="w-full">
                  <div className="flex justify-between items-center w-full px-1 py-3">
                    <div className="text-mainBlack dark:text-lightGrey">
                      <span className="text-[8px]">Topic </span>
                      <p className="text-[16px] font-semibold">Logarithms</p>
                    </div>
                    <div className="flex justify-center items-center gap-2 bg-mainBlue pl-2 rounded-md">
                      <span className="text-[12px] text-mainWhite capitalize font-semibold">
                        open course material
                      </span>
                      <div className="w-8 h-8 bg-mainWhite text-mainBlue rounded-sm flex justify-center items-center m-0.5">
                        <Icon
                          icon="material-symbols:download"
                          width="24"
                          height="24"
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" bg-lightGrey rounded-md mb-5 capitalize text-[12px] text-mainBlack">
                    <div className="flex justify-between  py-1 px-2">
                      <p>sub-topic title</p>
                      <span>00:00</span>
                    </div>
                    <div className="flex justify-between py-1 px-2 bg-mainWhite text-mainBlue font-medium">
                      <p>sub-topic title</p>
                      <span>00:00</span>
                    </div>
                    <div className="flex justify-between  py-1 px-2">
                      <p>sub-topic title</p>
                      <span>00:00</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-mainBlue dark:bg-darkMode shadow-custom-1 rounded-md px-3 py-2 mb-3 text-mainWhite dark:text-lightGrey">
                    <div className="flex items-center gap-6">
                      <span className="text-[16px] font-medium">Take Quiz</span>
                      <Icon
                        icon="fluent:quiz-new-20-regular"
                        width="24"
                        height="24"
                      />
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="text-white text-[16px] font-medium">
                        15mins
                      </span>
                      <Icon
                        icon="material-symbols:alarm-rounded"
                        width="24"
                        height="24"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Side */}
            <div className="hidden xl:block bg-mainWhite dark:bg-whiteFade scroll sm:overflow-y-auto shadow-custom-1 rounded-md p-2 m-0.5 space-y-2">
              <div className="ring-[0.5px] ring-mainBlue dark:bg-darkMode px-2 py-3 rounded-md">
                <div className="flex justify-between text-[10px] font-bold text-mainBlack dark:text-lightGrey mb-2">
                  <h3>MASTER CLASS [JAMB]</h3>
                  <p>View More</p>
                </div>
                <div className="flex justify-between">
                  <div className="uppercase !text-[8px] font-medium space-y-1 text-mainBlack dark:text-lightGrey">
                    <p>monday</p>
                    <p>tuesday</p>
                    <p>wednesday</p>
                    <p>thursday</p>
                    <p>friday</p>
                    <p>saturday</p>
                  </div>
                  <div className="uppercase !text-[8px] font-medium space-y-1 text-mainBlack dark:text-lightGrey">
                    <p>5-7 pm</p>
                    <p>5-7 pm</p>
                    <p>5-7 pm</p>
                    <p>5-7 pm</p>
                    <p>5-7 pm</p>
                    <p>5-7 pm</p>
                  </div>
                </div>
              </div>
              {/* TOPIC CONVERSATION */}
              <div className="chat">
                <div className="py-2 pl-4 rounded-t-lg bg-mainBlue dark:bg-ascent text-xs text-mainWhite">
                  <p>Topic Conversation</p>
                </div>
                <div className="py-2 px-1.5  ring-[0.5px] ring-mainBlue rounded-b-lg">
                  <Chat />
                </div>
              </div>
            </div>
            <ChatButton />
          </div>
        </DashboardLayout>
      )}
    </>
  );
}

const MediumScreenCourseProgressBar = () => {
  const [showProgress, setShowProgress] = useState(false);
  return (
    <div className="relative mt-2 mb-4">
      <button
        onClick={() => setShowProgress((prev) => !prev)}
        className={`${
          showProgress ? " rounded-t-lg" : " rounded-lg"
        } flex items-center justify-between w-full text-white p-2 bg-mainBlue shadow-custom-1`}
      >
        <div className="flex items-center gap-3 flex-1">
          <Icon
            icon="streamline:business-progress-bar-2-solid"
            width="18"
            height="18"
          />
          <h3 className="text-[14px] font-medium uppercase">Jamb Progress</h3>
        </div>
        <div className="flex items-center gap-3 flex-1">
          <div
            className={`w-full h-2.5 bg-mainWhite  dark:bg-whiteFade rounded-sm relative`}
          >
            <div className="h-full bg-[#A8C7DF] dark:bg-lightGrey rounded-sm w-1/4 " />
            <label className="text-[8px] text-mainWhite dark:text-darkMode font-medium absolute left-4 -top-[2px]">
              6%{" "}
            </label>
          </div>
          <Icon
            icon="hugeicons:arrow-up-01"
            width="30"
            height="30"
            className={`${
              showProgress ? "-rotate-[135]" : "rotate-180"
            } transition-drop-down`}
          />
        </div>
      </button>
      <div
        className={`${
          showProgress
            ? "max-h-96 overflow-y-auto"
            : "max-h-0 overflow-y-hidden invisible"
        } transition-drop-down absolute top-9 z-20 w-full text-white p-2 bg-mainBlue shadow-custom-1 rounded-b-lg`}
      >
        <div className="mb-2 space-y-1">
          <div className="flex items-center gap-3 px-1 py-[3px] uppercase bg-white text-mainBlue rounded-custom">
            <Icon
              icon="streamline:business-progress-bar-2-solid"
              width="18"
              height="18"
            />
            <h3 className="text-[14px] font-medium">Jamb</h3>
          </div>
          <div className="flex items-center gap-3 px-1 py-[2px] uppercase">
            <Icon
              icon="streamline:business-progress-bar-2-solid"
              width="18"
              height="18"
            />
            <h3 className="text-[14px] font-medium">Waec</h3>
          </div>
          <div className="flex items-center gap-3 px-1 py-[2px] uppercase">
            <Icon
              icon="streamline:business-progress-bar-2-solid"
              width="18"
              height="18"
            />
            <h3 className="text-[14px] font-medium">Gce</h3>
          </div>
          <div className="flex items-center gap-3 px-1 py-[2px] uppercase">
            <Icon
              icon="streamline:business-progress-bar-2-solid"
              width="18"
              height="18"
            />
            <h3 className="text-[14px] font-medium">Neco</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
const MediumScreenTopicLists = ({ setTopic }) => {
  return (
    <div className="sm:hidden w-full text-mainBlue flex items-center justify-between overflow-x-hidden mb-4">
      <div className="icon pr-1">
        <Icon icon="quill:hamburger" width="24" height="24" />
      </div>
      <button
        onClick={() => setTopic(true)}
        className="text-[14px] bg-mainBlue px-2 py-1 rounded-full text-mainWhite"
      >
        <span>mathematics</span>
      </button>
      <div className="text-[14px] px-2 py-1 rounded-full">
        <span>English</span>
      </div>
      <div className="text-[14px] px-2 py-1 rounded-full">
        <span>physics</span>
      </div>
      <div className="text-[14px] px-2 py-1 rounded-full">
        <span>chemistry</span>
      </div>
    </div>
  );
};

const MediumScreenAllTopics = ({ setTopic }) => {
  return (
    <div className="py-4 px-2">
      <div className="flex items-center gap-3 mb-4">
        <button onClick={() => setTopic(false)}>
          <Icon icon="iconamoon:arrow-left-2-light" width="35" height="35" />
        </button>
        <h2 className="uppercase text-lg font-semibold">Topics</h2>
      </div>
      <div className="mx-4">
        <ul className="text-xs space-y-2">
          <li className="flex justify-between items-center bg-[#EAEBEC] px-4 py-2 rounded-lg">
            Number <span>74%</span>
          </li>
          <li className="flex justify-between items-center bg-[#EAEBEC] px-4 py-2 rounded-lg">
            Measurement <span>74%</span>
          </li>
          <li className="flex justify-between items-center bg-[#EAEBEC] px-4 py-2 rounded-lg">
            Geometry <span>74%</span>
          </li>
          <li className="flex justify-between items-center bg-[#EAEBEC] px-4 py-2 rounded-lg">
            Algebra <span>74%</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
const ChatButton = () => {
  return (
    <Link
      to="/course-chat"
      className="sm:hidden bg-[#EAEBEC] rounded-lg shadow-custom-1 text-[10px] text-ascent fixed top-[calc(100vh-170px)] sm:right-8 right-3.5 z-[60] px-1 py-2 flex flex-col justify-center items-center "
    >
      {/* CHAT WITH US */}
      <div className="group relative mb-1 w-[35px] h-[35px] bg-mainGrey text-mainWhite rounded-lg flex justify-center items-center">
        <Icon icon="tabler:message-chatbot" width="20" height="20" />
      </div>
      <span>Conversation</span>
    </Link>
  );
};
