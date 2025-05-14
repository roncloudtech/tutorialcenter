import React from "react";
import DashboardLayout from "../../DashboardLayout";
import BigCalender from "../../Components/BigCalender";
import { Icon } from "@iconify/react/dist/iconify.js";
import SmallCalendar from "../../Components/Calender";
import { useToggleState } from "../../../Hooks/useToggleState";
import Title from "../../Components/Title";

export default function Calender() {
  const [toggle, setToggle] = useToggleState(true);
  const [toggle1, setToggle1] = useToggleState(true);
  return (
    <>
      <DashboardLayout>
        <div className="xl:grid grid-cols-[1fr_0.38fr] p-2.5 xl:p-0 h-full scroll overflow-y-auto">
          <div className="item1 xl:px-4 overflow-y-auto">
            <Title title={"CALENDER"} />
            <div className="w-full h-full">
              <BigCalender />
            </div>
          </div>
          <div className="dark:bg-whiteFade dark:text-lightGrey shadow-custom-1 p-2.5 overflow-y-auto rounded-md space-y-6">
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
              className={`flex flex-col gap-4 transition-height  ${
                toggle ? "hidden" : "block"
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
                className={`cursor-pointer transition-all ${
                  toggle1 ? "rotate-90" : "-rotate-90"
                }`}
                onClick={setToggle1}
              />
            </div>
            <div
              className={`flex flex-col gap-4 transition-height ${
                toggle1 ? "block" : "hidden"
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
