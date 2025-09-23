import ProgressBar from "../../Components/ProgressBar";
import SmallCalendar from "../../Components/Calender";
import DashboardLayout from "../../DashboardLayout";
import Title from "../../Components/Title";
import ProgressSlider from "../../Components/ProgressSlider";
import TwoColumnLayout from "../../../Components/TwoColumnLayout";
import useDepartmentCheck from "../../../Hooks/useDepartmentCheck";

export default function StudentDashboard() {
  // Check if the user has department
  useDepartmentCheck();
  return (
    <DashboardLayout>
      <TwoColumnLayout
        leftContent={
          <div className="xl:px-4 p-2.5 scroll h-full">
            <Title title={"DASHBOARD"} />
            {/* PROGRESS LEVEL */}
            <div className="my-3">
              <ProgressBar title={"Progress Level"} course={"Courses  4"} />
            </div>
            <ProgressSlider />
          </div>
        }
        rightContent={
          <div className=" dark:bg-darkMode scroll bg-mainWhite shadow-custom-1 rounded-md p-2 m-0.5">
            <SmallCalendar />
            <Notification />
          </div>
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
