import { useSchoolContext } from "../Context/SchoolContext";
import SideBar from "./Components/SideBar";

export default function DashboardLayout({ children }) {
  const { expandSideBar, setExpandSideBar } = useSchoolContext();
  return (
    <>
      <div
        className={`${
          expandSideBar ? " grid-cols-[210px_1fr]" : "grid-cols-[100px_1fr]"
        } scroll h-screen xl:grid xl:p-2 transition-all ease-custom sm:overflow-hidden bg-mainWhite dark:bg-[#2A2A2A]`}
      >
        {/* LEFT */}
        <SideBar
          expandSideBar={expandSideBar}
          setExpandSideBar={setExpandSideBar}
        />
        {/* RIGHT */}
        <div className="h-full w-full sm:overflow-y-hidden">{children}</div>
      </div>
    </>
  );
}
