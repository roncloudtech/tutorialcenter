import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSchoolContext } from "../../Context/SchoolContext";
import { role } from "../../data";

const menuItems = [
  // STUDENT ROUTES
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: (
      <Icon icon="material-symbols:dashboard-rounded" width="20" height="20" />
    ),
    visible: ["student"],
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
    visible: ["student"],
  },
  {
    label: "Exam Practice",
    path: "/exam",
    icon: <Icon icon="ph:exam-fill" width="20" height="20" />,
    visible: ["student"],
  },
  {
    label: "Groups",
    path: "/groups",
    icon: (
      <Icon icon="material-symbols:groups-rounded" width="20" height="20" />
    ),
    visible: ["student"],
  },
  {
    label: "Payment",
    path: "/payment",
    icon: <Icon icon="fluent:payment-32-filled" width="20" height="20" />,
    visible: ["student"],
  },
  {
    label: "Settings",
    path: "/settings",
    icon: <Icon icon="lets-icons:setting-fill" width="20" height="20" />,
    visible: ["student"],
  },
  {
    label: "Help",
    path: "/help",
    icon: <Icon icon="material-symbols:help-center" width="20" height="20" />,
    visible: ["student"],
  },

  // PARENT ROUTES
  {
    label: "Dashboard",
    path: "/parent-dashboard",
    icon: (
      <Icon icon="material-symbols:dashboard-rounded" width="20" height="20" />
    ),
    visible: ["parent"],
  },
  {
    label: "Overview",
    path: "/parent-overview",
    icon: (
      <Icon icon="material-symbols:dashboard-rounded" width="20" height="20" />
    ),
    visible: ["parent"],
  },
  {
    label: "Calender",
    path: "/parent-calender",
    icon: <Icon icon="uis:calender" width="20" height="20" />,
    visible: ["parent"],
  },
  {
    label: "Exam Practice",
    path: "/parent-exam-practice",
    icon: <Icon icon="ph:exam-fill" width="20" height="20" />,
    visible: ["parent"],
  },
  {
    label: "Payment",
    path: "/parent-payment",
    icon: <Icon icon="fluent:payment-32-filled" width="20" height="20" />,
    visible: ["parent"],
  },
  {
    label: "Settings",
    path: "/parent-settings",
    icon: <Icon icon="lets-icons:setting-fill" width="20" height="20" />,
    visible: ["parent"],
  },
  {
    label: "Help",
    path: "/help",
    icon: <Icon icon="material-symbols:help-center" width="20" height="20" />,
    visible: ["parent"],
  },

  // TEACHER || TUTOR ROUTES
  {
    label: "Dashboard",
    path: "/teacher-dashboard",
    icon: (
      <Icon icon="material-symbols:dashboard-rounded" width="20" height="20" />
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
  {
    label: "Groups",
    path: "/teacher-group",
    icon: <Icon icon="fluent:payment-32-filled" width="20" height="20" />,
    visible: ["teacher"],
  },
  {
    label: "Results",
    path: "/teacher-result",
    icon: <Icon icon="fluent:payment-32-filled" width="20" height="20" />,
    visible: ["teacher"],
  },
  {
    label: "Settings",
    path: "/teacher-settings",
    icon: <Icon icon="lets-icons:setting-fill" width="20" height="20" />,
    visible: ["teacher"],
  },
  {
    label: "Help",
    path: "/help",
    icon: <Icon icon="material-symbols:help-center" width="20" height="20" />,
    visible: ["teacher"],
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
        if (item.visible?.includes(role)) {
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
                      ? "h-[160px] opacity-100 block"
                      : "h-0 opacity-0 hidden"
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
