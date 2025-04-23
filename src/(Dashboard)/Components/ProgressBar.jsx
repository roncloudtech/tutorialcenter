import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export default function ProgressBar({ course, title, bgColor }) {
  return (
    <div
      className={`progress bg-[${bgColor}] p-2 rounded-md dark:text-lightGrey text-mainBlack`}
    >
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <Icon
            icon="streamline:business-progress-bar-2-solid"
            width="18"
            height="18"
          />
          <h3 className="text-[14px] font-medium "> {title}</h3>
        </div>
        <p className="text-xs font-medium ">{course}</p>
      </div>
      <div className="flex justify-between items-center mb-2 text-[8px] font-medium">
        <p>START</p>
        <p>FINISH</p>
      </div>
      <div
        className={`w-full h-2.5 ${
          bgColor ? "bg-mainLightBlue" : "bg-lightGrey"
        } dark:bg-whiteFade rounded-sm relative`}
      >
        <div className="h-full bg-mainBlue dark:bg-lightGrey rounded-sm w-1/4 " />
        <label className="text-[8px] text-mainWhite dark:text-darkMode font-medium absolute left-4 -top-[2px]">
          6%{" "}
        </label>
      </div>
    </div>
  );
}
