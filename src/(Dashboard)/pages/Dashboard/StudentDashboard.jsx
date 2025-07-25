import ProgressBar from "../../Components/ProgressBar";
import SmallCalendar from "../../Components/Calender";
import DashboardLayout from "../../DashboardLayout";
import Title from "../../Components/Title";
import ProgressSlider from "../../Components/ProgressSlider";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

export default function StudentDashboard() {
  return (
    <DashboardLayout>
      <div className="xl:grid grid-cols-[1fr_0.38fr] h-full overflow-hidden">
        {/* RIGHT SIDE */}
        <PerfectScrollbar options={{ suppressScrollX: true }}>
          <div className="xl:px-4 p-2.5 scroll h-full">
            <Title title={"DASHBOARD"} />
            {/* PROGRESS LEVEL */}
            <div className="my-3">
              <ProgressBar title={"Progress Level"} course={"Courses  4"} />
            </div>
            <ProgressSlider />
          </div>
        </PerfectScrollbar>
        {/* LEFT SIDE */}

        <PerfectScrollbar className="hidden xl:block">
          <div className="dark:bg-darkMode scroll bg-mainWhite shadow-custom-1 rounded-md p-2 m-0.5">
            <SmallCalendar />
            <Notification />
          </div>
        </PerfectScrollbar>
      </div>
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
