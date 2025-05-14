import React from "react";
import DashboardLayout from "../../DashboardLayout";
import ProgressBar from "../../Components/ProgressBar";
import { Icon } from "@iconify/react/dist/iconify.js";
import Chat from "../../Components/Chat";
import Title from "../../Components/Title";

export default function Coursepage() {
  return (
    <>
      <DashboardLayout>
        <div className="xl:grid grid-cols-[1fr_0.38fr] p-2.5 xl:p-0 h-full scroll overflow-y-auto">
          {/* left Side */}
          <div className="item1 xl:px-4 overflow-y-auto">
            {/* header */}
            <Title title={"COURSE"} />
            {/* PROGRESS SECTION */}
            <div className="w-full mt-3">
              <div className="jamb progress bar">
                <ProgressBar title="jamb progress bar" />
              </div>
              <div className="progress bar">
                <ProgressBar title="mathematics progress bar" />
              </div>
            </div>
            <div className="flex mt-3">
              <div className="content1 mr-4 ring-[0.5px] ring-mainBlue bg-mainBlue dark:bg-darkMode rounded-lg">
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
                <div className="flex justify-between py-1 text-[16px] text-mainBlack dark:text-lightGrey font-semibold">
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
          <div className="bg-mainWhite dark:bg-whiteFade scroll overflow-y-auto shadow-custom-1 rounded-md p-2 space-y-2">
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
        </div>
      </DashboardLayout>
    </>
  );
}
