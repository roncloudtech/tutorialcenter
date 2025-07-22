import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../Assets/tutorial_logo.png";
import logo2 from "../../Assets/TC 1.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import Menu from "./Menu";
import { role } from "../../data";
import useScrollVisibility from "../../Hooks/useScrollVisibility";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import LogoutModal from "../../Pages/Auth/LogoutModal";
import { useSchoolContext } from "../../Context/SchoolContext";
export default function SideBar({ expandSideBar, setExpandSideBar }) {
  // The user coontext
  const { setAuthenticatedUser, setRole } = useSchoolContext();
  const navigate = useNavigate();
  // show logout modal
  const [logoutModal, setLogoutModal] = useState(false);

  // Function to handle logout
  const handleLogout = () => {
    localStorage.clear();
    setLogoutModal(false);
    setAuthenticatedUser({});
    setRole("");
    navigate("/login");
  };
  return (
    <>
      <PerfectScrollbar className="hidden xl:block">
        <div
          className={`h-full position xl:flex bg-mainWhite dark:bg-darkMode  shadow-custom-1 p-3 flex-col gap-3 rounded-lg relative ${
            expandSideBar ? "" : "items-center"
          }`}
        >
          <Link className="flex justify-center items-center ">
            {expandSideBar ? (
              <img
                src={logo}
                alt=""
                className={`overflow-hidden transition-all ease-custom ${
                  expandSideBar ? "w-20" : "w-0"
                }`}
              />
            ) : (
              <img
                src={logo2}
                alt=""
                className={`overflow-hidden transition-all ease-custom ${
                  expandSideBar ? "w-0" : "w-10"
                }`}
              />
            )}
          </Link>
          {/* toogle the icon and the label */}
          <Icon
            icon="iconamoon:arrow-left-2-light"
            width="20"
            height="20"
            onClick={() => setExpandSideBar(!expandSideBar)}
            className={`${
              expandSideBar
                ? "absolute rotate-0 rounded-l-lg  top-[120px]"
                : "rotate-180 rounded-r-lg  top-[100px]"
            } right-0 transition-all ease-custom bg-mainBlue text-mainWhite dark:bg-lightGrey dark:text-darkMode  flex justify-center items-center cursor-pointer absolute`}
          />

          {/* PROFILE */}
          <div className="flex items-center gap-2 mt-3">
            <Icon
              icon="radix-icons:avatar"
              width="30"
              height="30"
              className="text-mainBlue dark:text-lightGrey"
            />
            <div className={`${expandSideBar ? "block mb-2" : "hidden"}`}>
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
            <ToggleMode expandSideBar={expandSideBar} />
            <button
              onClick={() => setLogoutModal(true)}
              className="flex items-center gap-2 text-mainBlue dark:text-lightGrey"
            >
              <Icon
                icon="material-symbols:logout-rounded"
                width="20"
                height="20"
              />
              <span
                className={`${
                  expandSideBar ? "block" : "hidden"
                } text-[13px] font-medium`}
              >
                Logout
              </span>
            </button>
          </div>
        </div>
      </PerfectScrollbar>
      <MobileScreenNavigation />
      <LogoutModal
        modal={logoutModal}
        setModal={setLogoutModal}
        handleLogout={handleLogout}
      />
    </>
  );
}

const ToggleMode = ({ expandSideBar }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useLayoutEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <button
      className="text-white text-xs flex items-center justify-between cursor-pointer w-full transition-all"
      onClick={() => toggleTheme()}
    >
      <div>
        <Icon
          icon="mynaui:sun"
          width="18"
          height="18"
          className="text-mainBlue dark:text-lightGrey"
        />
      </div>
      <div
        className={`${
          !expandSideBar && "!bg-transparent"
        } bg-mainBlue dark:bg-lightGrey w-full h-[20px] relative mx-3 rounded-2xl cursor-pointer transition-all ease-custom`}
      >
        <div
          className={`bg-white dark:bg-mainBlue shadow-md w-[16px] h-[16px] absolute top-[2px] rounded-2xl transition-all ease-custom duration-300 ${
            theme === "dark" ? "left-[calc(100%-18px)]" : "left-[2px]"
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
      visible: ["student"],
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
    // ADMIN ROUTES
    {
      label: "Dashboard",
      path: "/admin-dashboard",
      icon: (
        <Icon
          icon="material-symbols:dashboard-rounded"
          width="20"
          height="20"
        />
      ),
      visible: ["admin"],
    },
  ];
  const [visible, setVisible] = useState(false);
  const scrollVisible = useScrollVisibility();
  return (
    <div className="sm:hidden relative z-50">
      <div
        className={`${
          scrollVisible
            ? "fixed right-0  z-50 bg-mainWhite dark:bg-[#2A2A2A] dark:text-lightGrey bottom-0 animate-mobile"
            : "invisible"
        } flex items-center justify-between  border-t-[0.1px] border-mainGrey drop-shadow w-full py-2 px-4 shadow-xl`}
      >
        {menuItems.map((items, i) => {
          if (items.visible?.includes(role)) {
            return (
              <NavLink
                key={i}
                to={items.path}
                className="[&.active]:bg-mainBlue [&.active]:dark:bg-lightGrey [&.active]:dark:text-mainBlue  [&.active]:shadow-custom-1 p-1.5 text-[10px] rounded-lg text-mainBlue dark:text-lightGrey  [&.active]:text-white w-max flex flex-col gap-1 items-center "
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
  useEffect(() => {
    if (visible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [visible]);
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
            <ToggleMode expandSideBar />
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
