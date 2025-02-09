import React from "react";
import DashboardLayout from "../../DashboardLayout";
import ProgressBar from "../../Components/ProgressBar";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Coursepage() {
  return (
    <>
      <DashboardLayout title={"Courses"}>
        <div className="grid grid-cols-[1fr_290px] ">
          {/* left Side */}
          <div className="item1 pr-4">
            {/* hearder */}
            <div className="flex justify-between items-center  py-2 rounded-md">
              <h3 className="uppercase  font-semibold ">Courses</h3>
              <div className="w-9 h-9 flex justify-center items-center bg-slate-300 rounded-md">
                <Icon
                  icon="iconoir:bell-notification-solid"
                  width="24"
                  height="24"
                  style={{ color: "#000" }}
                />
              </div>
            </div>
            {/* PROGRESS SECTION */}
            <div className="w-full">
              <div className="jamb progress bar">
                <ProgressBar title="jamb progress bar" />
              </div>
              <div className="progress bar">
                <ProgressBar title="mathematics progress bar" />
              </div>
            </div>
            <div className="flex">
              <div className="content1 pr-4">
                <div className="title w-full flex justify-center bg-slate-300 py-1 rounded-t-md">
                  <h3 className="uppercase text-base font-medium">Jamb</h3>
                </div>
                <div className="bg-gray-300 rounded-md flex w-full [&_li]:text-[9px] [&_li]:font-medium [&_li]:m-[1px] [&_li]:text-blue-700  [&_li]:p-1 [&_li]:rounded-md">
                  <div className="flex-1">
                    <p className="text-[12px] font-semibold uppercase bg-slate-400 px-5 py-2">
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
                    <div className="w-[1.60px] h-full bg-black "></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-semibold uppercase bg-slate-400 px-5 py-2">
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
                <div className="flex justify-between py-1 px-4">
                  <p className="text-[16px] font-semibold">SUBJECT</p>
                  <p className="text-[16px] font-semibold">MATHEMATICS</p>
                </div>
                <div className="relative w-full h-[260px] bg-[#EDF7ED] rounded-md">
                  <div className="w-16 h-16 rounded-full bg-white absolute top-1/4 right-1/2 flex justify-center items-center">
                    <Icon
                      icon="solar:play-bold-duotone"
                      width="24"
                      height="24"
                      style={{ color: "#47C05D" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Right Side */}
            <div className="Right Side">
              {/* Download Course Material */}
              <div className="w-full">
                <div className="flex justify-between items-center w-full px-1 py-3">
                  <div className="font-semibold">
                    <span className="text-[8px]">Topic </span>
                    <p className="text-[16px]">Logarithms</p>
                  </div>
                  <div className="flex justify-center items-center gap-2 bg-[#47C05D] pl-2 rounded-md">
                    <span className="text-[12px] text-white capitalize font-semibold">
                      download course material
                    </span>
                    <div className="w-8 h-8 bg-white rounded-sm flex justify-center items-center m-1">
                      <Icon
                        icon="material-symbols:download"
                        width="24"
                        height="24"
                        style={{ color: "#47C05D" }}
                      />
                    </div>
                  </div>
                </div>
                <div className=" bg-[#EDF7ED] font-semibold rounded-sm mb-5">
                  <div className="flex justify-between py-1 px-2">
                    <p className="capitalize text-[12px]">sub-topic title</p>
                    <span className="text-[12px]">00:00</span>
                  </div>
                  <div className="flex justify-between py-1 px-2 bg-black text-white">
                    <p className="capitalize text-[12px] ">sub-topic title</p>
                    <span className="text-[12px]">00:00</span>
                  </div>
                  <div className="flex justify-between py-1 px-2">
                    <p className="capitalize text-[12px]">sub-topic title</p>
                    <span className="text-[12px]">00:00</span>
                  </div>
                </div>
                <div className="flex justify-between items-center bg-[#47C05D] rounded-md px-3 py-2 mb-3">
                  <div className="flex items-center gap-6">
                    <span className="text-white text-[16px] font-medium">
                      Take Quiz
                    </span>
                    <Icon
                      icon="fluent:quiz-new-20-regular"
                      width="24"
                      height="24"
                      style={{ color: "#fff" }}
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
                      style={{ color: "#fff" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#8695A0]"></div>
        </div>
      </DashboardLayout>
    </>
  );
}
