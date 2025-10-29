import ProgressBar from "../../Components/ProgressBar";
import SmallCalendar from "../../Components/Calender";
import DashboardLayout from "../../DashboardLayout";
import Title from "../../Components/Title";
import ProgressSlider from "../../Components/ProgressSlider";
import TwoColumnLayout from "../../../Components/TwoColumnLayout";
import useDepartmentCheck from "../../../Hooks/useDepartmentCheck";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useSelectedCourses } from "../../../Hooks/useSelectedCourses";

export default function StudentDashboard() {
  // Check if the user has department
  useDepartmentCheck();

  // Fetch all courses and subjects the student enrolled in using custom hook
  const { data, isLoading } = useSelectedCourses();
  if (isLoading) {
    return (
      <div className="w-full  flex items-center justify-center text-center gap-2 dark:text-lightGrey">
        <Icon icon="line-md:loading-loop" width="35" height="35" />
        <span className="text-xs">Loading...</span>
      </div>
    );
  }
  return (
    <DashboardLayout>
      <TwoColumnLayout
        leftContent={<LeftContent data={data} />}
        rightContent={
          <>
            <SmallCalendar />
            <Notification />
          </>
        }
      ></TwoColumnLayout>
    </DashboardLayout>
  );
}

const Notification = () => {
  // Notification data
  const data = [
    {
      text: "A student made a general English , be the first to respond",
      time: ":12pm",
    },
    {
      text: "A student made a general English , be the first to respond",
      time: ":12pm",
    },
    {
      text: "A student made a general English , be the first to respond",
      time: ":12pm",
    },
    {
      text: "A student made a general English , be the first to respond",
      time: ":12pm",
    },
    {
      text: "A student made a general English , be the first to respond",
      time: ":12pm",
    },
  ];
  return (
    <div className="mt-4">
      {/* HEADER */}
      <div className="mb-2.5 text-sm dark:text-lightGrey text-mainBlue font-bold flex items-center justify-between">
        <h2>Notification</h2>
        <p>100</p>
      </div>
      <div className="space-y-2">
        {data.map((item, i) => (
          <div
            key={i}
            className="cursor-pointer text-[12px] dark:bg-whiteFade bg-lightGrey dark:text-lightGrey text-mainBlack p-1.5 rounded-md w-full focus-within:bg-mainGrey focus:text-mainWhite"
          >
            <p>{item.text}</p>
            <p className="text-right">{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const LeftContent = ({ data }) => {
  return (
    <div className="xl:px-4 p-2.5 scroll h-full">
      <Title title={"DASHBOARD"} />
      {/* PROGRESS LEVEL */}
      <div className="my-3">
        <ProgressBar title={"Progress Level"} course={"Courses  4"} />
      </div>
      <ProgressSlider data={data} />
    </div>
  );
};
