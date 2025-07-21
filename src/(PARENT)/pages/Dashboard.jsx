import React, { useState } from "react";
import DashboardLayout from "../../(Dashboard)/DashboardLayout";
import Title from "../../(Dashboard)/Components/Title";
import ProgressBar from "../../(Dashboard)/Components/ProgressBar";
import ProgressSlider from "../../(Dashboard)/Components/ProgressSlider";
import StudentProfileList from "../../(Dashboard)/Components/StudentProfileList";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

export default function ParentDashboard() {
  return (
    <DashboardLayout>
      <div className="xl:grid grid-cols-[1fr_0.40fr] h-full overflow-hidden">
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
          <StudentProfileList />
        </PerfectScrollbar>
      </div>
    </DashboardLayout>
  );
}
