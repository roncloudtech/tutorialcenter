import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/tutorial_logo.png";
import logo2 from "../../Assets/TC 1.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import Menu from "./Menu";
export default function SideBar({ toggle, setToggle, visible }) {
  return (
    <div
      className={`scroll position  overflow-y-hidden hidden xl:flex bg-mainWhite dark:bg-darkMode  shadow-custom-1 p-3 flex-col gap-3 rounded-lg relative ${
        toggle ? "" : "items-center"
      }`}
    >
      <Link className="flex justify-center items-center ">
        {toggle ? (
          <img
            src={logo}
            alt=""
            className={`overflow-hidden transition-all ease-custom ${
              toggle ? "w-20" : "w-0"
            }`}
          />
        ) : (
          <img
            src={logo2}
            alt=""
            className={`overflow-hidden transition-all ease-custom ${
              toggle ? "w-0" : "w-10"
            }`}
          />
        )}
      </Link>
      {/* toogle the icon and the label */}
      <Icon
        icon="iconamoon:arrow-left-2-light"
        width="20"
        height="20"
        onClick={() => setToggle(!toggle)}
        className={`${
          toggle ? "absolute right-0 rotate-0" : " -right-[20px] rotate-180"
        } transition-all ease-custom rounded-l-lg bg-mainBlue text-mainWhite dark:bg-lightGrey dark:text-darkMode  flex justify-center items-center cursor-pointer absolute top-[130px]`}
      />

      {/* PROFILE */}
      <div className="flex items-center gap-2 mt-3">
        <Icon
          icon="radix-icons:avatar"
          width="30"
          height="30"
          className="text-mainBlue dark:text-lightGrey"
        />
        <div className={`${toggle ? "block mb-2" : "hidden"}`}>
          <p className="text-[12px] font-medium text-ascent">Welcome!</p>
          <h3 className="text-xs font-medium text-mainBlue dark:text-lightGrey">
            John Doe
          </h3>
        </div>
      </div>
      {/* NAVIGATION */}
      <div className="flex-1 flex flex-col gap-1 overflow-y-scroll">
        <Menu />
      </div>
      <div className="space-y-2 w-full my-[2px]">
        <ToggleMode />
        <div className="flex items-center gap-2 text-mainBlue dark:text-lightGrey">
          <Icon icon="material-symbols:logout-rounded" width="20" height="20" />
          <span
            className={`${toggle ? "block" : "hidden"} text-[13px] font-medium`}
          >
            Logout
          </span>
        </div>
      </div>
    </div>
  );
}

const ToggleMode = () => {
  const [mode, setMode] = useState(false);
  const darkModeHandler = () => {
    setMode(!mode);
    document.body.classList.toggle("dark");
  };
  return (
    <button
      className="text-white text-xs flex items-center justify-between cursor-pointer w-full transition-all"
      onClick={() => darkModeHandler()}
    >
      <div>
        <Icon
          icon="mynaui:sun"
          width="18"
          height="18"
          className="text-mainBlue dark:text-lightGrey"
        />
      </div>
      <div className="w-full h-[20px] bg-mainBlue dark:bg-lightGrey relative mx-3 rounded-2xl cursor-pointer transition-all ease-custom">
        <div
          className={`bg-white dark:bg-mainBlue shadow-md w-[16px] h-[16px] absolute top-[2px] rounded-2xl transition-all ease-custom duration-300 ${
            mode ? "left-[2px]" : "left-[calc(100%-18px)]"
          }`}
        />
      </div>
      <div>
        <Icon
          icon="famicons:moon-outline"
          width="18"
          height="18"
          className="text-mainBlue dark:text-lightGrey"
        />
      </div>
    </button>
  );
};
