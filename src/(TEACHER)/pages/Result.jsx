import React, { useState } from "react";
import Title from "../../(Dashboard)/Components/Title";
import DashboardLayout from "../../(Dashboard)/DashboardLayout";
import BookIcon from "../../Assets/Vector.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import TwoColumnLayout from "../../Components/TwoColumnLayout";

const studentInfo = [
  {
    name: "John Doe",
    department: "science",
    training: "Waec & Jamb",
  },
  {
    name: "John Doe",
    department: "science",
    training: "Waec & Jamb",
  },
  {
    name: "John Doe",
    department: "science",
    training: "Waec & Jamb",
  },
  {
    name: "John Doe",
    department: "science",
    training: "Waec & Jamb",
  },
];
export default function TeacherResult() {
  const [activeModal, setActiveModal] = useState(false);
  return (
    <DashboardLayout>
      <TwoColumnLayout
        leftContent={
          <div className="item1 xl:px-4 p-2.5">
            <Title title={"RESULT"} />
            <div className="department my-5 flex items-center justify-between font-semibold text-xs uppercase">
              <p>sCIENCE</p>
              <p>200</p>
            </div>
            <div className="grid 2xl:grid-cols-3 grid-cols-2 gap-3">
              {studentInfo.map((item, i) => (
                <Card
                  setToggleModal={setActiveModal}
                  key={i}
                  name={item.name}
                  department={item.department}
                  training={item.training}
                />
              ))}
            </div>
          </div>
        }
        rightContent={
          <div className="bg-mainWhite dark:bg-darkMode shadow-custom-1 rounded-md p-2 space-y-3 my-0.5">
            <div className="select-department mt-4">
              <h3 className="text-xs text-mainBlack uppercase font-medium mb-3">
                Select a department
              </h3>
              <select
                name=""
                id=""
                className="w-full bg-mainWhite py-2 px-1.5 rounded-custom placeholder:text-black text-xs"
              >
                <option value="">Science</option>
                <option value="">Commercial</option>
                <option value="">Arts</option>
              </select>
            </div>
            <div className="subjects-topic mt-6">
              <div className="flex justify-between font-medium text-[14px] uppercase">
                <p>Subjects</p>
                <p>topics</p>
              </div>
              <div className="mt-2 space-y-1">
                <div className="capitalize py-2 px-1.5 rounded-custom bg-mainWhite flex items-center justify-between text-[10px]">
                  <p>English</p>
                  <p>73</p>
                </div>
                <div className="capitalize py-2 px-1.5 rounded-custom flex items-center justify-between text-[10px]">
                  <p>mathematics</p>
                  <p>64</p>
                </div>
                <div className="capitalize py-2 px-1.5 rounded-custom flex items-center justify-between text-[10px]">
                  <p>physics</p>
                  <p>70</p>
                </div>
                <div className="capitalize py-2 px-1.5 rounded-custom flex items-center justify-between text-[10px]">
                  <p>chemistry</p>
                  <p>64</p>
                </div>
                <div className="capitalize py-2 px-1.5 rounded-custom flex items-center justify-between text-[10px]">
                  <p>biology</p>
                  <p>64</p>
                </div>
                <div className="capitalize py-2 px-1.5 rounded-custom flex items-center justify-between text-[10px]">
                  <p>agriculture</p>
                  <p>64</p>
                </div>
                <div className="capitalize py-2 px-1.5 rounded-custom flex items-center justify-between text-[10px]">
                  <p>geography</p>
                  <p>64</p>
                </div>
                <div className="capitalize py-2 px-1.5 rounded-custom flex items-center justify-between text-[10px]">
                  <p>further mathematics</p>
                  <p>64</p>
                </div>
              </div>
            </div>
          </div>
        }
      />

      {activeModal && <PerformanceModal setToggleModal={setActiveModal} />}
    </DashboardLayout>
  );
}

const Card = ({ name, department, training, setToggleModal }) => {
  return (
    <div
      onClick={() => setToggleModal(true)}
      className={`w-full p-1 rounded-lg cursor-pointer ring-black ring-[0.5px]`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="flex flex-col items-center">
          <img
            src="https://www.figma.com/file/C2fHCiSoElx3NBQgrtVrXE/image/9fa492644538aeb8fa7ffd83195864e66d955fde"
            alt=""
            className="w-[60px] h-[60px] rounded-full"
          />
          <span className="text-[12px] ">45%</span>
        </div>

        <div className=" text-[12px] font-medium space-y-3">
          <p>{name}</p>
          <p>{department}</p>
          <p>{training}</p>
        </div>
      </div>
      <div className="text-[10px] dark:bg-darkMode bg-mainGrey py-3 px-2 rounded-md flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img src={BookIcon} alt="Book" className="w-4" />
          <p className="text-lightGrey">View Student Progress</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-[#47C05D] w-2 h-2 rounded-full" />
          <p className="text-lightGrey">online</p>
        </div>
      </div>
    </div>
  );
};

const PerformanceModal = ({ setToggleModal }) => {
  return (
    <>
      <div
        className="w-full h-full bg-[#121D244D] absolute top-0 left-0 z-40 cursor-pointer flex items-center justify-center"
        onClick={() => setToggleModal(false)}
      ></div>
      <div className="p-4 w-[700px] h-[403px] bg-white dark:bg-darkMode dark:text-lightGrey shadow-custom-1 absolute top-1/2 left-[47%] -translate-x-1/2 -translate-y-1/2 z-50 border-[0.5px] border-mainGrey border-solid rounded-xl">
        <div className="dark:text-lightGrey flex items-center justify-between">
          <h3 className="text-sm uppercase font-semibold">performance</h3>
          <Icon
            icon="heroicons:x-mark-20-solid"
            width="24"
            height="24"
            className="cursor-pointer"
            onClick={() => setToggleModal(false)}
          />
        </div>
        <div className="mt-4 text-xs dark:text-lightGrey">
          <p>Topic</p>
          <select
            name="Topic"
            id="Topic"
            className="mt-1.5 w-full dark:bg-whiteFade bg-[#EAEBEC] rounded-custom p-2.5 flex justify-between"
          >
            <option value="">Noun</option>
          </select>
        </div>
        {/* PROGRESS */}
        <div className="mt-4">
          <div className="percent w-[60px] h-[60px] relative -z-10 rounded-full -rotate-90">
            <svg>
              <circle
                cx={30}
                cy={30}
                r={30}
                className="w-full h-full relative z-50 fill-[transparent] [stroke-width:2] stroke-mainRed [stroke-dasharray:188] [stroke-dashoffset:94]"
              />
            </svg>
            <span className="text-[12px] uppercase absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-mainRed rotate-90">
              1st try
            </span>
          </div>
          <h3 className="dark:text-lightGrey text-sm">JAMB OBJ</h3>
        </div>
      </div>
    </>
  );
};
