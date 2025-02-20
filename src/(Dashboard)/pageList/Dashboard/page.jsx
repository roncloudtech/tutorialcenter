import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import ProgressBar from "../../Components/ProgressBar";
import SmallCalendar from "../../Components/Calender";
import DashboardLayout from "../../DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="px-3">
        {/* hearder */}
        <div className="flex justify-between items-center bg-slate-600 px-6 py-2 rounded-md">
          <h3 className="uppercase text-white font-semibold">Dashboard</h3>
          <div className="w-9 h-9 flex justify-center items-center bg-slate-300 rounded-md">
            <Icon
              icon="iconoir:bell-notification-solid"
              width="24"
              height="24"
              style={{ color: "#000" }}
            />
          </div>
        </div>
        <div className="mt-4">
          <ProgressBar
            course="All courses"
            title="progress bar"
            bgColor="#E7E7E7"
          />
        </div>
        <div className="grid grid-cols-2 gap-3 my-5">
          <ProgressBar course="jamb" title="progress bar" bgColor="#E7E7E7" />
          <ProgressBar course="neco" title="progress bar" bgColor="#E7E7E7" />
          <ProgressBar course="waec" title="progress bar" bgColor="#E7E7E7" />
          <ProgressBar course="gce" title="progress bar" bgColor="#E7E7E7" />
        </div>
        <div className="grid grid-cols-2 grid-rows-[320px]  gap-3 my-3">
          <div className="bg-[#E7E7E7] flex justify-between p-3 rounded-md">
            <h2 className="uppercase text-sm font-semibold">notification</h2>
            <p className="text-sm font-semibold">100</p>
          </div>
          <div className="bg-[#E7E7E7] p-3 rounded-md">
            <div className="flex justify-between items-center">
              <h2 className="uppercase text-sm font-semibold">Calender</h2>
              <p className="uppercase text-xs font-semibold">8-jan-2014</p>
            </div>
            <div className="w-full h-full mt-3">
              <SmallCalendar />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
