import React from "react";
import DashboardLayout from "../../DashboardLayout";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import Title from "../../Components/Title";

export default function Settings() {
  return (
    <>
      <DashboardLayout>
        <div className="xl:grid grid-cols-[1fr_0.38fr] p-2.5 xl:p-0 h-full scroll overflow-y-auto">
          <div className="item1 xl:px-4 overflow-y-auto">
            {/* header */}
            <Title title={"settings"} />
            {/* EDIT PERSONAL INFORMATION*/}
            <div className="EDIT PERSONAL INFORMATION">
              <h4 className="text-sm font-semibold my-4 text-mainBlack dark:text-lightGrey">
                EDIT PERSONAL INFORMATION
              </h4>
              <div className="flex flex-col gap-2.5 mb-2.5 dark:text-lightGrey">
                <label htmlFor="firstname" className="text-xs font-medium ">
                  First name
                </label>
                <input
                  type="text"
                  placeholder="input first name"
                  className=" w-full px-3 py-2 rounded-md  ring-[1px] ring-whiteFade shadow-custom-1 text-mainLightBlue"
                />

                <label htmlFor="lastname" className="text-xs font-medium ">
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="input last name"
                  className="w-full px-3 py-2 rounded-md  ring-[1px] ring-whiteFade shadow-custom-1 text-mainLightBlue"
                />

                <label htmlFor="phone number" className="text-xs font-medium ">
                  Phone Number
                </label>
                <input
                  type="number"
                  placeholder="input phone number"
                  className="w-full px-3 py-2 rounded-md  ring-[1px] ring-whiteFade shadow-custom-1 text-mainLightBlue"
                />
              </div>

              <button className="mt-6 w-full py-2 rounded-md text-xs font-semibold shadow-custom-1 bg-mainBlue text-mainWhite dark:bg-darkMode dark:text-lightGrey ">
                DONE
              </button>
            </div>
          </div>
          <div className="bg-mainWhite dark:bg-darkMode shadow-custom-1 scroll overflow-y-auto rounded-md p-3  dark:text-lightGrey">
            {/* USER PROFILE */}
            <div className="mb-6">
              <img
                src="https://www.figma.com/file/C2fHCiSoElx3NBQgrtVrXE/image/9fa492644538aeb8fa7ffd83195864e66d955fde"
                alt=""
                className="w-[260px] h-[200px] rounded-md mb-2"
              />
              <h4 className="text-[18px] font-semibold">First & Last Name</h4>
              <p className="text-[14px] text-mainGrey font-medium">
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
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}
