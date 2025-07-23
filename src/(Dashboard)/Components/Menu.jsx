import { Icon } from "@iconify/react/dist/iconify.js";
import { NavLink } from "react-router-dom";
import { useSchoolContext } from "../../Context/SchoolContext";

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
    visible: ["student"],
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
    visible: ["guardian"],
  },
  {
    label: "Overview",
    path: "/parent-overview",
    icon: (
      <Icon icon="material-symbols:dashboard-rounded" width="20" height="20" />
    ),
    visible: ["guardian"],
  },
  {
    label: "Calender",
    path: "/parent-calender",
    icon: <Icon icon="uis:calender" width="20" height="20" />,
    visible: ["guardian"],
  },
  {
    label: "Exam Practice",
    path: "/parent-exam-practice",
    icon: <Icon icon="ph:exam-fill" width="20" height="20" />,
    visible: ["guardian"],
  },
  {
    label: "Payment",
    path: "/parent-payment",
    icon: <Icon icon="fluent:payment-32-filled" width="20" height="20" />,
    visible: ["guardian"],
  },
  {
    label: "Settings",
    path: "/parent-settings",
    icon: <Icon icon="lets-icons:setting-fill" width="20" height="20" />,
    visible: ["guardian"],
  },
  {
    label: "Help",
    path: "/help",
    icon: <Icon icon="material-symbols:help-center" width="20" height="20" />,
    visible: ["guardian"],
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
  // ADMIN ROUTES
  {
    label: "Dashboard",
    path: "/admin-dashboard",
    icon: (
      <Icon icon="material-symbols:dashboard-rounded" width="20" height="20" />
    ),
    visible: ["admin"],
  },
  {
    label: "Students",
    path: "/student-list",
    icon: <Icon icon="mdi:human-male" width="20" height="20" />,
    visible: ["admin"],
  },
];

export default function Menu() {
  // Get the role from the context
  const { role } = useSchoolContext();

  // Get the expandSideBar state from the context
  const { expandSideBar } = useSchoolContext();

  return (
    <>
      {menuItems.map((item, index) => {
        if (item.visible?.includes(role)) {
          return (
            <NavLink
              className="flex justify-between p-2 dark:text-lightGrey text-mainBlue [&.active]:bg-mainBlue [&.active]:text-mainWhite [&.active]:dark:bg-lightGrey [&.active]:dark:text-mainBlue [&.active]:font-bold rounded-lg"
              to={item.path}
              key={index}
            >
              <div className="flex gap-2 relative group">
                <div className="">{item.icon}</div>
                <span
                  className={`${
                    expandSideBar ? "block" : "hidden"
                  } text-[13px] 2xl:text-sm `}
                >
                  {item.label}
                </span>
                {!expandSideBar && (
                  <div
                    className={`absolute bottom-4 -left-5  rounded-md p-1 bg-white dark:bg-black  text-black dark:text-lightGrey text-[10px] z-50 invisible opacity-20 transition-all group-hover:visible group-hover:opacity-100`}
                  >
                    {item.label}
                  </div>
                )}
              </div>
            </NavLink>
          );
        }
        return null;
      })}
    </>
  );
}
