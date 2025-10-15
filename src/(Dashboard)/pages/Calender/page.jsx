import React from "react";
import DashboardLayout from "../../DashboardLayout";
import BigCalender from "../../Components/BigCalender";
import { Icon } from "@iconify/react/dist/iconify.js";
import SmallCalendar from "../../Components/Calender";
import { useToggleState } from "../../../Hooks/useToggleState";
import Title from "../../Components/Title";
import TwoColumnLayout from "../../../Components/TwoColumnLayout";

export default function Calender() {
  const [toggle, setToggle] = useToggleState(true);
  const [toggle1, setToggle1] = useToggleState(false);
  return (
    <>
      <DashboardLayout>
        <TwoColumnLayout
          leftContent={
            <div className="item1 xl:px-4 p-2.5 h-full dark:text-lightGrey">
              <Title title={"CALENDER"} />
              <div className="w-full h-full">
                <BigCalender />
              </div>
            </div>
          }
          rightContent={
            <div className=" dark:text-lightGrey  space-y-5">
              <SmallCalendar />
              <button className="w-full flex justify-between items-center">
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
              </button>
              <div
                className={`flex flex-col gap-4 overflow-hidden transition-drop-down  ${
                  toggle ? "invisible max-h-0" : "visible max-h-full mb-2"
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
              <button className="w-full flex justify-between items-center">
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
              </button>
              <div
                className={`flex flex-col gap-4 overflow-hidden transition-drop-down  ${
                  toggle1 ? "invisible max-h-0" : "visible max-h-full "
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
          }
        />
      </DashboardLayout>
    </>
  );
}
