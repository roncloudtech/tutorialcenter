import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/tutorial_logo.png";
import Menu from "./Menu";

export default function Title({ title }) {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      {/* Tilte || header */}
      <div className="flex justify-between items-center xl:mt-3 mt-0">
        <div
          className="cursor-pointer xl:hidden"
          onClick={() => setVisible(true)}
        >
          <Icon
            icon="quill:hamburger"
            width="26"
            height="26"
            className="text-mainBlue dark:text-lightGrey"
          />
        </div>

        <h3 className="uppercase font-bold text-mainBlue dark:text-lightGrey">
          {title}
        </h3>
        <div className="w-8 h-8 flex justify-center items-center bg-mainBlue text-lightGrey dark:bg-lightGrey dark:text-mainBlue rounded-md">
          {" "}
          <Icon icon="iconoir:bell-notification-solid" width="24" height="24" />
        </div>
      </div>

      <SIDEBAR visible={visible} setVisible={setVisible} />
    </div>
  );
}

// SIDE BAR FOR MOBILE MENU
const SIDEBAR = ({ setVisible, visible }) => {
  return (
    <div
      className={`w-full h-full relative flex xl:hidden ${
        visible ? "" : "invisible"
      }`}
    >
      {/* background Cover */}
      <div
        className={`background-shadow transition-all  duration-300 ease-custom ${
          visible ? "opacity-100" : "opacity-0 invisible"
        } `}
        onClick={() => {
          setVisible(false);
        }}
      />
      <div
        className={`w-[350px] max-w-[calc(100vw-150px)] fixed left-0 top-0 bottom-0 z-50 transition-all duration-300 ease-custom ${
          visible ? "-translate-x-0" : "-translate-x-full invisible"
        } `}
      >
        <div
          className={`scroll position  overflow-y-hidden flex xl:hidden bg-mainWhite dark:bg-darkMode  shadow-custom-1 p-3 flex-col gap-3 relative h-full`}
        >
          <Link className="flex">
            <img
              src={logo}
              alt=""
              className="overflow-hidden transition-all ease-custom max-w-20"
            />
          </Link>

          {/* PROFILE */}
          <div className="flex items-center gap-2 mt-3">
            <Icon
              icon="radix-icons:avatar"
              width="30"
              height="30"
              className="text-mainBlue dark:text-lightGrey"
            />
            <div className="items">
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
              <Icon
                icon="material-symbols:logout-rounded"
                width="20"
                height="20"
              />
              <span className={"text-[13px] font-medium"}>Logout</span>
            </div>
          </div>
          <button
            onClick={() => {
              setVisible(false);
            }}
            className="absolute text-red-800 z-50 top-0 right-0"
          >
            <Icon icon="heroicons:x-mark-20-solid" width="24" height="24" />
          </button>
        </div>
      </div>
    </div>
  );
};

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
