import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSchoolContext } from "../../Context/SchoolContext";
import { role } from "../../data";

const menuItems = [
  {
    label: "Dashboard",
    path: "/student-dashboard",
    icon: (
      <Icon icon="material-symbols:dashboard-rounded" width="20" height="20" />
    ),
    visible: ["student"],
  },
  {
    label: "Dashboard",
    path: "/student-dashboard",
    icon: (
      <Icon icon="material-symbols:dashboard-rounded" width="20" height="20" />
    ),
    visible: ["parent", "admin"],
  },
  {
    label: "Courses",
    path: "/courses",
    icon: <Icon icon="tdesign:course-filled" width="20" height="20" />,
    ArrowIcon: <Icon icon="weui:arrow-filled" width="20" height="20" />,
    visible: ["student", "admin"],
    list: [
      {
        icon: <Icon icon="hugeicons:course" width="20" height="20" />,
        label: "Jamb",
        path: "/jamb",
      },
      {
        icon: <Icon icon="hugeicons:course" width="20" height="20" />,
        label: "Waec",
        path: "/waec",
      },
      {
        icon: <Icon icon="hugeicons:course" width="20" height="20" />,
        label: "Neco",
        path: "/neco",
      },
      {
        icon: <Icon icon="hugeicons:course" width="20" height="20" />,
        label: "Gce",
        path: "/gce",
      },
    ],
  },
  {
    label: "Calender",
    path: "/calender",
    icon: <Icon icon="uis:calender" width="20" height="20" />,
    visible: ["student", "parent", "admin"],
  },
  {
    label: "Exam Practice",
    path: "/exam",
    icon: <Icon icon="ph:exam-fill" width="20" height="20" />,
    visible: ["student", "parent", "admin"],
  },
  {
    label: "Groups",
    path: "/groups",
    icon: (
      <Icon icon="material-symbols:groups-rounded" width="20" height="20" />
    ),
    visible: ["student", "admin"],
  },
  {
    label: "Payment",
    path: "/payment",
    icon: <Icon icon="fluent:payment-32-filled" width="20" height="20" />,
    visible: ["student", "parent", "admin"],
  },
  {
    label: "Settings",
    path: "/settings",
    icon: <Icon icon="lets-icons:setting-fill" width="20" height="20" />,
    visible: ["student", "parent", "admin"],
  },
  {
    label: "Help",
    path: "/help",
    icon: <Icon icon="material-symbols:help-center" width="20" height="20" />,
    visible: ["student", "parent", "admin"],
  },
];

export default function Menu() {
  const [visibleItems, setVisibleItems] = useState({});
  const toggleMenu = (index) => {
    setVisibleItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  const { toggle } = useSchoolContext();

  return (
    <>
      {menuItems.map((item, index) => {
        if (item.visible.includes(role)) {
          return (
            <div key={index}>
              <NavLink
                className="flex justify-between p-2 dark:text-lightGrey text-mainBlue [&.active]:bg-mainBlue [&.active]:text-mainWhite [&.active]:dark:bg-lightGrey [&.active]:dark:text-mainBlue [&.active]:font-bold rounded-lg"
                onClick={() => toggleMenu(index)}
                to={item.path}
              >
                <div className="flex gap-2 relative group">
                  <div className="">{item.icon}</div>
                  <span
                    className={`${
                      toggle ? "block" : "hidden"
                    } text-[13px] 2xl:text-sm `}
                  >
                    {item.label}
                  </span>
                  {!toggle && (
                    <div
                      className={`absolute left-full  rounded-md  px-2 py-1 ml-2 bg-white  text-black text-xs z-40 invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
                    >
                      {item.label}
                    </div>
                  )}
                </div>
                {item.ArrowIcon && (
                  <div
                    className={` ${
                      visibleItems[index] ? "rotate-90" : "rotate-0"
                    } transition-all ease-custom duration-300`}
                  >
                    {item.ArrowIcon}
                  </div>
                )}
              </NavLink>
              {item.list && (
                <ul
                  className={`${
                    visibleItems[index]
                      ? "h-[160px] opacity-100 visible"
                      : "h-0 opacity-0 invisible"
                  } ml-6 my-1 border-l-2 border-solid border-gray-500 transition-all ease-custom duration-300`}
                >
                  {item.list.map((subItem, index) => (
                    <li key={index}>
                      <NavLink
                        to={subItem.path}
                        className="flex gap-2 p-[10px] [&.active]:bg-white rounded-lg"
                      >
                        {subItem.icon}{" "}
                        <div
                          className={`${
                            toggle ? "block" : "hidden"
                          } text-[10px]`}
                        >
                          {subItem.label}
                        </div>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        }
      })}
    </>
  );
}
