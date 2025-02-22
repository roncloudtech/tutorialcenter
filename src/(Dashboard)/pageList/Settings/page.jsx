import React from "react";
import DashboardLayout from "../../DashboardLayout";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

export default function Settings() {
  return (
    <>
      <DashboardLayout>
        <div className="grid grid-cols-[1fr_290px] h-full">
          <div className="px-5">
            {/* header */}
            <div className="flex justify-between items-center  py-2 rounded-md mb-4">
              <h3 className="uppercase  font-semibold">settings</h3>
              <div className="w-9 h-9 flex justify-center items-center bg-slate-300 rounded-md">
                <Icon
                  icon="iconoir:bell-notification-solid"
                  width="24"
                  height="24"
                  style={{ color: "#000" }}
                />
              </div>
            </div>
            {/* EDIT PERSONAL INFORMATION*/}
            <div className="EDIT PERSONAL INFORMATION">
              <h4 className="text-sm font-semibold my-4">
                EDIT PERSONAL INFORMATION
              </h4>
              <div className="flex gap-6 items-center mb-2.5">
                <div className="flex-1">
                  <label htmlFor="firstname" className="text-xs font-medium ">
                    First name
                  </label>
                  <input
                    type="text"
                    placeholder="input first name"
                    className="mt-1.5 w-full px-3 py-2 rounded-md bg-[#E336290D] ring-[1px] ring-[#D1D5DB]"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="lastname" className="text-xs font-medium ">
                    Last name
                  </label>
                  <input
                    type="text"
                    placeholder="input last name"
                    className="mt-1.5 w-full px-3 py-2 rounded-md bg-[#E336290D] ring-[1px] ring-[#D1D5DB]"
                  />
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <div className="flex-1">
                  <label htmlFor="email" className="text-xs font-medium ">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="input email"
                    className="mt-1.5 w-full px-3 py-2 rounded-md bg-[#E336290D] ring-[1px] ring-[#D1D5DB]"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="phone number"
                    className="text-xs font-medium "
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    placeholder="input phone number"
                    className="mt-1.5 w-full px-3 py-2 rounded-md bg-[#E336290D] ring-[1px] ring-[#D1D5DB]"
                  />
                </div>
              </div>
              <button className="mt-6 w-full py-2 rounded-md text-xs font-semibold bg-[#D1D5DB]">
                DONE
              </button>
            </div>
            {/* EDIT PASSWORD*/}
            <div className="EDIT PASSWORD">
              <h4 className="text-sm font-semibold my-4">EDIT PASSWORD</h4>
              <div className="flex gap-6 items-center mb-2.5">
                <div className="flex-1">
                  <label
                    htmlFor="old password"
                    className="text-xs font-medium "
                  >
                    Old Password
                  </label>
                  <input
                    type="password"
                    placeholder="input password"
                    className="mt-1.5 w-full px-3 py-2 rounded-md bg-[#E336290D] ring-[1px] ring-[#D1D5DB]"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="Cpassword" className="text-xs font-medium ">
                    Confirm Old Password
                  </label>
                  <input
                    type="password"
                    placeholder="Re-type old  password"
                    className="mt-1.5 w-full px-3 py-2 rounded-md bg-[#E336290D] ring-[1px] ring-[#D1D5DB]"
                  />
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <div className="flex-1">
                  <label
                    htmlFor="new password"
                    className="text-xs font-medium "
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    placeholder="input new password"
                    className="mt-1.5 w-full px-3 py-2 rounded-md bg-[#E336290D] ring-[1px] ring-[#D1D5DB]"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="new Password"
                    className="text-xs font-medium "
                  >
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Re-type new password"
                    className="mt-1.5 w-full px-3 py-2 rounded-md bg-[#E336290D] ring-[1px] ring-[#D1D5DB]"
                  />
                </div>
              </div>
              <button className="mt-6 mb-2 w-full py-2 rounded-md text-xs font-semibold bg-[#D1D5DB]">
                DONE
              </button>
              <Link
                className="text-xs underline font-semibold"
                to={"/settings"}
              >
                Forgot your password?
              </Link>
            </div>
          </div>
          <div className="bg-[#EAEBEC] rounded-lg p-3">
            {/* USER PROFILE */}
            <div className="mb-6">
              <div className="w-[260px] h-[200px] bg-white rounded-md mb-2"></div>
              <h4 className="text-[18px] font-semibold">First & Last Name</h4>
              <p className="text-[14px] text-[#888888] font-medium">
                user@email.com
              </p>
            </div>
            <div className="INFORMATION">
              <h4 className="text-sm font-semibold">Information</h4>
              <div className="text-[12px] flex justify-between items-center my-2.5">
                <p className="font-semibold">Name:</p>
                <span>First, Last Name</span>
              </div>
              <div className="text-[12px] flex justify-between items-center my-2.5">
                <p className="font-semibold">Email:</p>
                <span>user@email.com</span>
              </div>
              <div className="text-[12px] flex justify-between items-center my-2.5">
                <p className="font-semibold">Phone:</p>
                <span>+234 123 456 7890</span>
              </div>
            </div>
            <div className="PREFERENCE">
              <h4 className="text-sm font-semibold">Preferences</h4>
              <div className="text-[12px] flex justify-between items-center my-2.5">
                <p className="font-semibold">Light:</p>
                <div className="w-[36px] h-[20px] bg-[#8695A0] rounded-lg flex items-center justify-left p-[2px]">
                  <div className="w-[16px] h-[16px] bg-white shadow-xl flex items-center justify-center rounded-full">
                    <Icon
                      icon="heroicons:x-mark-20-solid"
                      width="16"
                      height="16"
                      style={{ color: "#8695A0" }}
                    />
                  </div>
                </div>
              </div>
              <div className="text-[12px] flex justify-between items-center my-2.5">
                <p className="font-semibold">Dark:</p>
                <div className="w-[36px] h-[20px] bg-[#121D24] rounded-lg flex items-end justify-end p-[2px]">
                  <div className="w-[16px] h-[16px] bg-white shadow-xl flex items-center justify-center rounded-full">
                    <Icon
                      icon="heroicons:x-mark-20-solid"
                      width="16"
                      height="16"
                      style={{ color: "#8695A0" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}
