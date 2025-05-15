import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Assets/tutorial_logo.png";
import logo2 from "../../Assets/TC 1.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import Menu from "./Menu";
import { role } from "../../data";
import useScrollVisibility from "../../Hooks/useScrollVisibility";
export default function SideBar({ toggle, setToggle }) {
  return (
    <>
      <div
        className={`position hidden xl:flex bg-mainWhite dark:bg-darkMode  shadow-custom-1 p-3 flex-col gap-3 rounded-lg relative ${
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
        <div className="flex-1 flex flex-col gap-1">
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
            <span
              className={`${
                toggle ? "block" : "hidden"
              } text-[13px] font-medium`}
            >
              Logout
            </span>
          </div>
        </div>
      </div>
      <MobileScreenNavigation />
    </>
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

const MobileScreenNavigation = () => {
  const menuItems = [
    // STUDENT ROUTES
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: (
        <Icon
          icon="material-symbols:dashboard-rounded"
          width="20"
          height="20"
        />
      ),
      visible: ["student"],
    },
    {
      label: "Courses",
      path: "/courses",
      icon: <Icon icon="tdesign:course-filled" width="20" height="20" />,
      visible: ["student", "admin"],
    },
    {
      label: "Calender",
      path: "/calender",
      icon: <Icon icon="uis:calender" width="20" height="20" />,
      visible: ["student"],
    },

    // PARENT ROUTES
    {
      label: "Dashboard",
      path: "/parent-dashboard",
      icon: (
        <Icon
          icon="material-symbols:dashboard-rounded"
          width="20"
          height="20"
        />
      ),
      visible: ["parent"],
    },
    {
      label: "Overview",
      path: "/parent-overview",
      icon: (
        <Icon
          icon="material-symbols:dashboard-rounded"
          width="20"
          height="20"
        />
      ),
      visible: ["parent"],
    },
    {
      label: "Calender",
      path: "/parent-calender",
      icon: <Icon icon="uis:calender" width="20" height="20" />,
      visible: ["parent"],
    },
    // TEACHER || TUTOR ROUTES
    {
      label: "Dashboard",
      path: "/teacher-dashboard",
      icon: (
        <Icon
          icon="material-symbols:dashboard-rounded"
          width="20"
          height="20"
        />
      ),
      visible: ["teacher"],
    },
    {
      label: "Calender",
      path: "/calender",
      icon: <Icon icon="uis:calender" width="20" height="20" />,
      visible: ["teacher"],
    },
    {
      label: "Assessment",
      path: "/teacher-assessment",
      icon: <Icon icon="uis:calender" width="20" height="20" />,
      visible: ["teacher"],
    },
  ];
  const [visible, setVisible] = useState(false);
  const scrollVisible = useScrollVisibility();
  return (
    <div className="sm:hidden relative z-50">
      <div
        className={`${
          scrollVisible
            ? "fixed right-0  z-50 bg-mainWhite bottom-0 animate-mobile"
            : "invisible"
        } flex items-center justify-between  borde-t-[0.1px] border-mainGrey drop-shadow w-full py-2 px-4`}
      >
        {menuItems.map((items, i) => {
          if (items.visible?.includes(role)) {
            return (
              <NavLink
                key={i}
                to={items.path}
                className="[&.active]:bg-mainBlue  [&.active]:shadow-custom-1 p-1.5 text-[10px] rounded-lg text-mainBlue  [&.active]:text-white w-max flex flex-col gap-1 items-center "
              >
                {items.icon}
                <span>{items.label}</span>
              </NavLink>
            );
          }
        })}
        <button
          onClick={() => setVisible(true)}
          className="p-1.5 text-[10px]  flex flex-col gap-1 items-center "
        >
          <Icon
            icon="quill:hamburger"
            width="26"
            height="26"
            className="text-mainBlue dark:text-lightGrey"
          />
          <span>Menu</span>
        </button>
      </div>
      <MobileScreenSideBar setVisible={setVisible} visible={visible} />
    </div>
  );
};

// SIDE BAR FOR MOBILE MENU
const MobileScreenSideBar = ({ setVisible, visible }) => {
  return (
    <div
      className={`w-full h-full relative z-[60] flex xl:hidden ${
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
