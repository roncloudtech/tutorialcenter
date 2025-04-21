import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import ProgressBar from "../../Components/ProgressBar";
import SmallCalendar from "../../Components/Calender";
import DashboardLayout from "../../DashboardLayout";
import Title from "../../Components/Title";

const jambSubjects = ["English", "Mathematics", "Chemistry", "Physics"];
const waecSubjects = [
  "English",
  "Mathematics",
  "Chemistry",
  "Physics",
  "Agriculture",
  "Geography",
  "Biology",
];
export default function StudentDashboard() {
  return (
    <DashboardLayout>
      <div className="xl:grid grid-cols-[1fr_0.38fr] p-2.5 xl:p-0">
        {/* RIGHT SIDE */}
        <div className="xl:px-4">
          <Title title={"DASHBOARD"} />
          {/* PROGRESS LEVEL */}
          <div className="my-3">
            <ProgressBar title={"Progress Level"} course={"Courses  4"} />
          </div>
          {/* PROGRESS LEVEL FOR ALL COURSES AND SUBJECTS */}
          <div className="w-full overflow-x-hidden">
            <div className="overflow-x-scroll w-[700px] 2xl:w-full flex  gap-2">
              <div className="min-w-[350px] 2xl:w-full">
                <div className="bg-lightGrey shadow-custom-1 dark:bg-darkMode p-1.5 rounded-[4px] mb-2">
                  <ProgressBar bgColor title={"JAMB"} course={"Subjects  4"} />
                </div>
                <div className="mx-2.5 space-y-1">
                  {/* SUBJECT PROGRESS BAR FOR JAMB */}
                  {jambSubjects.map((sub, i) => (
                    <SubjectProgressBar key={i} subjects={sub} />
                  ))}
                </div>
              </div>
              <div className="min-w-[350px] 2xl:w-full">
                <div className="bg-lightGrey shadow-custom-1 dark:bg-darkMode p-1.5 rounded-[4px] mb-2">
                  <ProgressBar bgColor title={"WAEC"} course={"Subjects 9"} />
                </div>
                <div className="mx-2.5 space-y-1">
                  {/* SUBJECT PROGRESS BAR FOR WAEC */}
                  {waecSubjects.map((sub, i) => (
                    <SubjectProgressBar key={i} subjects={sub} />
                  ))}
                </div>
              </div>
              <div className="min-w-[350px] 2xl:w-full">
                <div className="bg-lightGrey shadow-custom-1 dark:bg-darkMode p-1.5 rounded-[4px] mb-2">
                  <ProgressBar bgColor title={"NECO"} course={"Subjects 9"} />
                </div>
                <div className="mx-2.5 space-y-1">
                  {/* SUBJECT PROGRESS BAR FOR WAEC */}
                  {waecSubjects.map((sub, i) => (
                    <SubjectProgressBar key={i} subjects={sub} />
                  ))}
                </div>
              </div>
              <div className="min-w-[350px] 2xl:w-full">
                <div className="bg-lightGrey shadow-custom-1 dark:bg-darkMode p-1.5 rounded-[4px] mb-2">
                  <ProgressBar bgColor title={"GCE"} course={"Subjects 9"} />
                </div>
                <div className="mx-2.5 space-y-1">
                  {/* SUBJECT PROGRESS BAR FOR WAEC */}
                  {waecSubjects.map((sub, i) => (
                    <SubjectProgressBar key={i} subjects={sub} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* LEFT SIDE */}
        <div className="dark:bg-darkMode bg-mainWhite shadow-custom-1 rounded-md p-1.5 overflow-scroll hidden xl:block">
          <SmallCalendar />
          <Notification />
        </div>
      </div>
    </DashboardLayout>
  );
}
const SubjectProgressBar = ({ subjects }) => {
  return (
    <>
      <div className="shadow-custom-1 dark:bg-whiteFade  p-2 rounded-[4px] flex justify-between items-center text-mainBlack dark:text-lightGrey">
        <div className="flex-1">
          <h5 className="text-[13px] font-medium ">{subjects}</h5>
        </div>
        <div className="flex-1">
          <div className="w-full h-3 bg-mainLightBlue dark:bg-whiteFade rounded-sm relative mb-1">
            <div className="h-full bg-mainBlue dark:bg-lightGrey rounded-sm w-1/3 " />
            <label className="text-[10px] font-medium absolute left-4 -top-[2px] text-mainWhite dark:text-darkMode">
              30%{" "}
            </label>
          </div>
          <div className="flex justify-between items-center text-[8px] text-black dark:text-lightGrey">
            <p>START</p>
            <p>FINISH</p>
          </div>
        </div>
      </div>
    </>
  );
};

const Notification = () => {
  // Notification data
  const data = [
    {
      text: "A student made a general English , be the first to respond",
      time: ":12pm",
    },
    {
      text: "A student made a general English , be the first to respond",
      time: ":12pm",
    },
    {
      text: "A student made a general English , be the first to respond",
      time: ":12pm",
    },
    {
      text: "A student made a general English , be the first to respond",
      time: ":12pm",
    },
    {
      text: "A student made a general English , be the first to respond",
      time: ":12pm",
    },
  ];
  return (
    <div className="mt-4">
      {/* HEADER */}
      <div className="mb-2.5 text-sm dark:text-lightGrey text-mainBlue font-bold flex items-center justify-between">
        <h2>Notification</h2>
        <p>100</p>
      </div>
      <div className="space-y-2">
        {data.map((item, i) => (
          <div
            key={i}
            className="cursor-pointer text-[12px] dark:bg-whiteFade bg-lightGrey dark:text-lightGrey text-mainBlack p-1.5 rounded-md w-full focus-within:bg-mainGrey focus:text-mainWhite"
          >
            <p>{item.text}</p>
            <p className="text-right">{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
