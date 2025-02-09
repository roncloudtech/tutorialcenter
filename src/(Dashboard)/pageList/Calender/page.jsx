import React from "react";
import DashboardLayout from "../../DashboardLayout";
import BigCalender from "../../Components/BigCalender";

export default function Calender() {
  return (
    <>
      <DashboardLayout title={"Calender"}>
        <div className="w-full h-full grid grid-cols-12 gap-4">
          <div className="col-span-8 ">
            <BigCalender />
          </div>
          <div className="col-span-4 bg-gray-400"></div>
        </div>
      </DashboardLayout>
    </>
  );
}
