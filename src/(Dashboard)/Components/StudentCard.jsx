import React from "react";
import BookIcon from "../../Assets/Vector.png";

export default function StudentCard({
  name,
  department,
  training,
  active,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`w-full ${
        active ? "bg-lightGrey" : "dark:bg-whiteFade bg-mainWhite"
      }  shadow-custom-1 p-1 rounded-lg cursor-pointer`}
    >
      <div
        className={`flex items-center gap-3 mb-3 ${
          active ? "dark:text-darkMode" : "dark:text-lightGrey text-mainBlack"
        }`}
      >
        <div className="flex flex-col items-center">
          <img
            src="https://www.figma.com/file/C2fHCiSoElx3NBQgrtVrXE/image/9fa492644538aeb8fa7ffd83195864e66d955fde"
            alt=""
            className="w-[60px] h-[60px] rounded-full"
          />
          <span className="text-[12px] ">45%</span>
        </div>
        <div className="flex items-center justify-between flex-1">
          <div className=" text-[12px] font-medium space-y-3">
            <p>Name:</p>
            <p>Department :</p>
            <p>Training :</p>
          </div>
          <div className=" text-[12px] font-medium space-y-3">
            <p>{name}</p>
            <p>{department}</p>
            <p>{training}</p>
          </div>
        </div>
      </div>
      <div className="dark:bg-darkMode bg-mainBlue py-3 px-2 rounded-md flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img src={BookIcon} alt="Book" className="w-4" />
          <p className="text-lightGrey text-[12px]">View Student Progress</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-[#47C05D] w-2 h-2 rounded-full" />
          <p className="text-lightGrey text-[12px]">online</p>
        </div>
      </div>
    </div>
  );
}
