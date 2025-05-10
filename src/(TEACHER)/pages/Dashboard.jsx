import React from "react";
import DashboardLayout from "../../(Dashboard)/DashboardLayout";
import Title from "../../(Dashboard)/Components/Title";
import ProgressBar from "../../(Dashboard)/Components/ProgressBar";
import ProgressSlider from "../../(Dashboard)/Components/ProgressSlider";
import StudentProfileList from "../../(Dashboard)/Components/StudentProfileList";

export default function TeacherDashboard() {
  return (
    <DashboardLayout>
      <div className="xl:grid grid-cols-[1fr_0.39fr] p-2.5 xl:p-0">
        {/* RIGHT SIDE */}
        <div className="xl:px-4">
          <Title title={"DASHBOARD"} />
          {/* PROGRESS LEVEL */}
          <div className="my-3">
            <ProgressBar title={"Progress Level"} course={"Courses  4"} />
          </div>
          <ProgressSlider />
        </div>
        {/* LEFT SIDE */}
        <StudentProfileList />
      </div>
    </DashboardLayout>
  );
}
