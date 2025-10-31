import { useEffect, useLayoutEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Assets/tutorial_logo.png";
import logo2 from "../../Assets/TC 1.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import Menu from "./Menu";
// import { role } from "../../data";
import useScrollVisibility from "../../Hooks/useScrollVisibility";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import LogoutModal from "../../Pages/Auth/LogoutModal";
import { useSchoolContext } from "../../Context/SchoolContext";
import avatar from "../assets/Avatar1.jpg";

export default function SideBar({ expandSideBar, setExpandSideBar }) {
  const { authenticatedUser } = useSchoolContext();
  // show logout modal
  const [logoutModal, setLogoutModal] = useState(false);

  // fetch userInfo from localstorage
  const userInfo = authenticatedUser;
  const fullname = userInfo.firstname + ", " + userInfo.lastname;
  const profile_picture_url = userInfo.profile_picture
    // ? `http://localhost:8000/storage/${userInfo.profile_picture}`
    ? `${userInfo.profile_picture}`
    : avatar;
  // Fetching userrole
  const userrole = localStorage.getItem("userRole");

  return (
    <>
      <PerfectScrollbar className="hidden xl:block bg-mainWhite dark:bg-darkMode  shadow-custom-1 rounded-lg h-full">
        <div
          className={`h-full position xl:flex    p-3 flex-col gap-3  relative ${
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
            {/* <Icon
              icon="radix-icons:avatar"
              width="30"
              height="30"
              className="text-mainBlue dark:text-lightGrey"
            /> */}
            <img
              src={profile_picture_url || avatar}
              alt={fullname}
              className="h-[30px] w-[30px] rounded-full mb-2 "
            />
            <div className={`${expandSideBar ? "block mb-2" : "hidden"}`}>
              <p className="text-[12px] font-medium text-ascent capitalize">
                Welcome {userrole}!
              </p>
              <h3 className="text-xs font-medium text-mainBlue dark:text-lightGrey">
                {fullname}
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
      <MobileScreenNavigation setLogoutModal={setLogoutModal} />
      <LogoutModal modal={logoutModal} setModal={setLogoutModal} />
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

const MobileScreenNavigation = ({ setLogoutModal }) => {
  // The role context
  const { role } = useSchoolContext();
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
          return null;
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
      <MobileScreenSideBar
        setLogoutModal={setLogoutModal}
        setVisible={setVisible}
        visible={visible}
      />
    </div>
  );
};

// SIDE BAR FOR MOBILE MENU
const MobileScreenSideBar = ({ setVisible, visible, setLogoutModal }) => {
  const { authenticatedUser } = useSchoolContext();
  const profile_picture_url = authenticatedUser.profile_picture
    ? `http://localhost:8000/storage/${authenticatedUser.profile_picture}`
    : null;
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
  const showLogoutModal = () => {
    setVisible(false);
    setLogoutModal(true);
  };
  return (
    <div
      className={`${
        visible
          ? "visible opacity-100"
          : "invisible opacity-0 transition-all ease-in-out duration-1000"
      } w-full h-full fixed top-0 left-0 bg-black bg-opacity-50 z-50 flex flex-col items-end justify-end`}
    >
      <div
        onClick={() => setVisible(false)}
        className="w-full h-full cursor-pointer"
      />
      <div
        className={`m-1.5 max-w-52 w-full  fixed left-0 top-0 bottom-0 z-[100] transition-all duration-300 ease-custom ${
          visible ? "-translate-x-0" : "-translate-x-full invisible"
        } `}
      >
        <button
          onClick={() => setVisible(false)}
          className="absolute transition-all top-0 right-0 translate-x-3 -translate-y-1  close-modal-button flex items-center justify-center w-[35px] h-[35px] rounded-full shadow-[0_4px_10px_#0000002b] dark:bg-white bg-mainBlue text-white dark:text-[#563725] z-50"
        >
          <Icon
            icon="uil:plus"
            width="30"
            height="30"
            className={`rotate-45`}
          />
        </button>
        <div
          className={`scroll position  overflow-y-hidden flex xl:hidden bg-mainWhite dark:bg-darkMode rounded-lg  shadow-custom-1 p-3 flex-col gap-3 relative h-full`}
        >
          <Link to={"/dashboard"} className="flex">
            <img
              src={logo}
              alt=""
              className="overflow-hidden transition-all ease-custom max-w-20"
            />
          </Link>

          {/* PROFILE */}
          <div className="flex items-center gap-2 mt-3">
            <img
              src={profile_picture_url || avatar}
              alt={authenticatedUser.firstname}
              className="h-[30px] w-[30px] rounded-full mb-2 "
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
            <button
              onClick={showLogoutModal}
              className="flex items-center gap-2 text-mainBlue dark:text-lightGrey"
            >
              <Icon
                icon="material-symbols:logout-rounded"
                width="20"
                height="20"
              />
              <span className={"text-[13px] font-medium"}>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
