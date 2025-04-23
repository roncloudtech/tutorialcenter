import React from "react";
import DashboardLayout from "../../DashboardLayout";
import { Icon } from "@iconify/react/dist/iconify.js";
import ProgressBar from "../../Components/ProgressBar";
import BookIcon from "../../../Assets/Vector.png";

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
export default function ParentDashboard() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-[1fr_0.39fr] h-full">
        {/* RIGHT SIDE */}
        <div className="px-4">
          {/* header */}
          <div className="flex justify-between items-center mt-3">
            <h3 className="uppercase font-bold text-[#103713]">Dashboard</h3>
            <div className="w-9 h-9 flex justify-center items-center bg-slate-300 rounded-md">
              {" "}
              <Icon
                icon="iconoir:bell-notification-solid"
                width="24"
                height="24"
                style={{ color: "#000" }}
              />
            </div>
          </div>
          {/* PROGRESS LEVEL */}
          <div className="my-3 bg-[#E7E7E7] py-2 px-3 rounded-md">
            <ProgressBar title={"Progress Level"} course={"Courses  4"} />
          </div>
          {/* PROGRESS LEVEL FOR ALL COURSES AND SUBJECTS */}
          <div className="w-full overflow-x-hidden">
            <div className="overflow-x-scroll w-[700px] 2xl:w-full flex  gap-2">
              <div className="min-w-[350px] 2xl:w-full">
                <div className="bg-[#E7E7E7] p-1.5 rounded-[4px] mb-2">
                  <ProgressBar title={"JAMB"} course={"Subjects  4"} />
                </div>
                <div className="mx-2.5 space-y-1">
                  {/* SUBJECT PROGRESS BAR FOR JAMB */}
                  {jambSubjects.map((sub, i) => (
                    <SubjectProgressBar key={i} subjects={sub} />
                  ))}
                </div>
              </div>
              <div className="min-w-[350px] 2xl:w-full">
                <div className="bg-[#E7E7E7] p-1.5 rounded-[4px] mb-2">
                  <ProgressBar title={"WAEC"} course={"Subjects 9"} />
                </div>
                <div className="mx-2.5 space-y-1">
                  {/* SUBJECT PROGRESS BAR FOR WAEC */}
                  {waecSubjects.map((sub, i) => (
                    <SubjectProgressBar key={i} subjects={sub} />
                  ))}
                </div>
              </div>
              <div className="min-w-[350px] 2xl:w-full">
                <div className="bg-[#E7E7E7] p-1.5 rounded-[4px] mb-2">
                  <ProgressBar title={"NECO"} course={"Subjects 9"} />
                </div>
                <div className="mx-2.5 space-y-1">
                  {/* SUBJECT PROGRESS BAR FOR WAEC */}
                  {waecSubjects.map((sub, i) => (
                    <SubjectProgressBar key={i} subjects={sub} />
                  ))}
                </div>
              </div>
              <div className="min-w-[350px] 2xl:w-full">
                <div className="bg-[#E7E7E7] p-1.5 rounded-[4px] mb-2">
                  <ProgressBar title={"GCE"} course={"Subjects 9"} />
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
        <div className="bg-[#EAEBEC] rounded-md p-2">
          <div className="flex justify-between items-center text-sm font-semibold mb-4">
            <h5>STUDENTS</h5>
            <p>5</p>
          </div>
          <StudentProfile />
        </div>
      </div>
    </DashboardLayout>
  );
}

const SubjectProgressBar = ({ subjects }) => {
  return (
    <>
      <div className="bg-[#E7E7E7] p-2 rounded-[4px] flex justify-between items-center">
        <div className="flex-1">
          <h5 className="text-[12px] font-medium ">{subjects}</h5>
        </div>
        <div className="flex-1">
          <div className="w-full h-3 bg-[#D1D5DB] rounded-sm relative mb-1">
            <div className="h-full bg-[#8695A0] rounded-sm w-1/3 " />
            <label className="text-[8px] font-semibold absolute left-4 -top-[2px] text-white">
              30%{" "}
            </label>
          </div>
          <div className="flex justify-between items-center text-[10px] text-black font-medium">
            <p>START</p>
            <p>FINISH</p>
          </div>
        </div>
      </div>
    </>
  );
};

const StudentProfile = () => {
  return (
    <>
      <div className="p-1 rounded-md ring-[1px] ring-[black] bg-[#00000033]">
        <div className="flex gap-2">
          <div className="flex-1">
            <div className="w-[60px] h-[60px] bg-white rounded-full relative" />
            <h4 className="text-[10px] font-semibold text-center">45%</h4>
          </div>
          <div className="flex gap-2">
            <div className="text-[10px] font-semibold capitalize space-y-1.5">
              <p>name :</p>
              <p>department :</p>
              <p>training :</p>
            </div>
            <div className="text-[10px] font-medium capitalize space-y-1.5">
              <p>kola john</p>
              <p>science</p>
              <p>Waec & Jamb</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center px-2.5 py-2 bg-[#8695A0] rounded-lg mt-3">
          <div className="text-white text-[10px] flex items-center gap-2">
            <img src={BookIcon} alt="" className="max-w-[18px]" />
            <p>View Student Progress</p>
          </div>
          <div className="text-white text-[10px] flex items-center gap-2">
            <div className="w-[8px] h-[8px] rounded-full bg-[#47C05D]" />
            <p>Online</p>
          </div>
        </div>
      </div>
    </>
  );
};
