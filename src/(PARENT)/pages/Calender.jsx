import React from "react";
import DashboardLayout from "../../(Dashboard)/DashboardLayout";
import Title from "../../(Dashboard)/Components/Title";
import StudentProfileList from "../../(Dashboard)/Components/StudentProfileList";
import SmallCalendar from "../../(Dashboard)/Components/Calender";
import { useToggleState } from "../../Hooks/useToggleState";
import { Icon } from "@iconify/react/dist/iconify.js";
import BigCalender from "../../(Dashboard)/Components/BigCalender";

const training = [
  "training Progress",
  "Jamb Progress",
  "waec Progress",
  "neco Progress",
  "gce Progress",
];
export default function ParentCalender() {
  const [toggle, setToggle] = useToggleState(true);
  return (
    <DashboardLayout>
      <div className="xl:grid grid-cols-[1fr_0.39fr] p-2.5 xl:p-0 h-full">
        {/* RIGHT SIDE */}
        <div className="xl:px-4">
          <Title title={"CALENDER"} />
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
              <div className=" text-[12px] font-semibold space-y-3">
                <p>Name:</p>
                <p>Department :</p>
                <p>Training :</p>
              </div>
              <div className=" text-[12px] font-semibold space-y-3 text-right">
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
                className="flex flex-col items-center justify-center gap-3 text-[12px] border-[0.4px] border-solid border-black bg-mainWhite shadow-custom-1 dark:text-lightGrey dark:bg-whiteFade rounded-lg py-2"
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
          <BigCalender />
        </div>
        <div className="space-y-4">
          {/* LEFT SIDE */}
          <StudentProfileList />
          <SmallCalendar />
          <div className=" space-y-3 dark:text-lightGrey">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xs font-medium">My Calender</h3>
              <Icon
                icon="weui:arrow-filled"
                width="20"
                height="20"
                className={`cursor-pointer transition-all ease-custom ${
                  toggle ? "-rotate-90" : "rotate-90"
                }`}
                onClick={setToggle}
              />
            </div>
            <div
              className={` flex flex-col gap-4 transition-height ease-custom  ${
                toggle
                  ? "invisible h-0 -translate-y-6"
                  : "visible -translate-y-0 h-auto"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <div className="w-4 h-4 bg-mainLightBlue rounded-[4px]" />
                  <span className="capitalize text-[12px]">
                    Physics master class
                  </span>
                </div>
                <Icon icon="nrk:more" width="20" height="20" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <div className="w-4 h-4 bg-ascent rounded-[4px]" />
                  <span className="capitalize text-[12px] ">
                    English master class
                  </span>
                </div>
                <Icon icon="nrk:more" width="20" height="20" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <div className="w-4 h-4 bg-mainRed  rounded-[4px]" />
                  <span className="capitalize text-[12px] ">
                    Mathematics master class
                  </span>
                </div>
                <Icon icon="nrk:more" width="20" height="20" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <div className="w-4 h-4 bg-mainYellow rounded-[4px]" />
                  <span className="capitalize text-[12px] ">
                    Chemistry master class
                  </span>
                </div>
                <Icon icon="nrk:more" width="20" height="20" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <div className="w-4 h-4 bg-mainYellow rounded-[4px]" />
                  <span className="capitalize text-[12px] ">
                    Chemistry master class
                  </span>
                </div>
                <Icon icon="nrk:more" width="20" height="20" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <div className="w-4 h-4 bg-mainYellow rounded-[4px]" />
                  <span className="capitalize text-[12px] ">
                    Chemistry master class
                  </span>
                </div>
                <Icon icon="nrk:more" width="20" height="20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
