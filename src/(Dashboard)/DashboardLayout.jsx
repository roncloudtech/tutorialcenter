import React, { useState } from "react";
import { useSchoolContext } from "../Context/SchoolContext";
import SideBar from "./Components/SideBar";

export default function DashboardLayout({ children }) {
  const { toggle, setToggle } = useSchoolContext();
  return (
    <>
      <div
        className={`${
          toggle ? " grid-cols-[210px_1fr]" : "grid-cols-[100px_1fr]"
        } h-screen xl:grid xl:p-3 transition-all ease-custom overflow-y-hidden scroll bg-mainWhite dark:bg-[#2A2A2A]`}
      >
        {/* LEFT */}
        <SideBar toggle={toggle} setToggle={setToggle} />
        {/* RIGHT */}
        <div className="h-full w-full  overflow-y-hidden">{children}</div>
      </div>
    </>
  );
}
