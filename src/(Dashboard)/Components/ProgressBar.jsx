import React from "react";

export default function ProgressBar({ course, title, bgColor }) {
  return (
    <div className={`progress bg-[${bgColor}] p-2 rounded-md`}>
      <div className="flex justify-between items-center">
        <h3 className="uppercase text-xs font-semibold mb-4">{title}</h3>
        <p className="text-xs font-semibold uppercase">{course}</p>
      </div>
      <div className="w-full h-5 bg-[#D1D5DB] rounded-sm relative">
        <div className="h-full bg-[#8695A0] rounded-sm w-1/3 " />
        <label className="text-[12px] absolute left-1/4 top-1">30% </label>
      </div>
      <div className="flex justify-between items-center mt-3">
        <p className="text-[10px] text-black font-medium">START</p>
        <p className="text-[10px] text-black font-medium">FINISH</p>
      </div>
    </div>
  );
}
