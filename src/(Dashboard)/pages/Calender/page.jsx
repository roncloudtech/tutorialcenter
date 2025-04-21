import React from "react";
import DashboardLayout from "../../DashboardLayout";
import BigCalender from "../../Components/BigCalender";
import { Icon } from "@iconify/react/dist/iconify.js";
import SmallCalendar from "../../Components/Calender";
import { useToggleState } from "../../../Hooks/useToggleState";

export default function Calender() {
  const [toggle, setToggle] = useToggleState(true);
  const [toggle1, setToggle1] = useToggleState(true);
  return (
    <>
      <DashboardLayout>
        <div className="grid grid-cols-[1fr_0.45fr]  w-full h-full pt-0.5">
          <div className="px-4 ">
            <div className="flex justify-between items-center  py-2 rounded-md">
              <h3 className="uppercase text-mainBlue dark:text-lightGrey  font-semibold ">
                Calender
              </h3>
              <div className="w-9 h-9 flex justify-center items-center bg-slate-300 rounded-md dark:bg-lightGrey dark:text-mainBlue">
                <Icon
                  icon="iconoir:bell-notification-solid"
                  width="24"
                  height="24"
                />
              </div>
            </div>
            <div className="w-full h-full">
              <BigCalender />
            </div>
          </div>
          <div className="dark:bg-whiteFade dark:text-lightGrey shadow-custom-1 p-2.5 rounded-md space-y-6">
            <SmallCalendar />
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-medium">My Calender</h3>
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
              className={`flex flex-col gap-4 transition-all ease-custom  ${
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
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-medium">Other Calender</h3>
              <Icon
                icon="weui:arrow-filled"
                width="20"
                height="20"
                className={`cursor-pointer transition-all ease-custom ${
                  toggle1 ? "rotate-90" : "-rotate-90"
                }`}
                onClick={setToggle1}
              />
            </div>
            <div
              className={`flex flex-col gap-4 transition-all ease-custom  ${
                toggle1
                  ? "visible h-auto -translate-y-0"
                  : "invisible h-0 -translate-y-6"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <div className="w-4 h-4 bg-mainLightBlue" />
                  <span className="capitalize text-[12px] ">
                    Assignments Due
                  </span>
                </div>
                <Icon icon="nrk:more" width="20" height="20" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <div className="w-4 h-4 bg-ascent" />
                  <span className="capitalize text-[12px] ">
                    Exam Practicing
                  </span>
                </div>
                <Icon icon="nrk:more" width="20" height="20" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <div className="w-4 h-4 bg-mainRed" />
                  <span className="capitalize text-[12px] ">Quiz</span>
                </div>
                <Icon icon="nrk:more" width="20" height="20" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <div className="w-4 h-4 bg-mainYellow" />
                  <span className="capitalize text-[12px] ">Birthdays</span>
                </div>
                <Icon icon="nrk:more" width="20" height="20" />
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}
