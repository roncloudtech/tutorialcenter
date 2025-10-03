import React from "react";
import ProgressBar from "./ProgressBar";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
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
export default function ProgressSlider({ data }) {
  // console.log(data);
  return (
    <>
      {/* PROGRESS LEVEL FOR ALL COURSES AND SUBJECTS */}
      <div className="w-full xl:w-[700px] overflow-x-hidden mb-4">
        <PerfectScrollbar>
          <div className="w-full 2xl:w-full flex gap-2 mb-4">
            {data?.courses.map((course) => (
              <div key={course.id} className="min-w-[350px] 2xl:w-full">
                <div className="bg-lightGrey shadow-custom-1 dark:bg-darkMode p-1.5 rounded-[4px] mb-2">
                  <ProgressBar
                    bgColor
                    title={course.name}
                    course={`Subjects  ${course.subjects.length}`}
                  />
                </div>
                <div className="mx-2.5 space-y-1">
                  {/* SUBJECT PROGRESS BAR FOR JAMB */}
                  {course.subjects.map((sub) => (
                    <SubjectProgressBar key={sub.id} subject={sub} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </PerfectScrollbar>
      </div>
    </>
  );
}

const SubjectProgressBar = ({ subject }) => {
  return (
    <>
      <div className="shadow-custom-1 dark:bg-whiteFade  p-2 rounded-[4px] flex justify-between items-center text-mainBlack dark:text-lightGrey">
        <div className="flex-1">
          <h5 className="text-[13px] font-medium ">{subject.name}</h5>
        </div>
        <div className="flex-1">
          <div className="w-full h-3 bg-mainLightBlue dark:bg-whiteFade rounded-sm relative mb-1">
            <div
              className={`h-full bg-mainBlue dark:bg-lightGrey rounded-sm`}
              style={{ width: `${subject.progress}px` }}
            />
            <label
              style={{ left: `${subject.progress}px` }}
              className="text-[10px] font-medium absolute left-4 -top-[2px] text-mainWhite dark:text-darkMode"
            >
              {subject.progress}%
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
