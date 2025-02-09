import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/tutorial_logo.png";
import logo2 from "../Assets/TC 1.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import Menu from "./Components/Menu";
import { useSchoolContext } from "../Context/SchoolContext";

export default function DashboardLayout({ children, title }) {
  // const [toggle, setToggle] = useState(true);
  const { toggle, setToggle } = useSchoolContext();

  return (
    <>
      <div
        className={`${
          toggle ? " grid-cols-[210px_1fr]" : " grid-cols-[100px_1fr]"
        } h-screen grid p-3 transition-all ease-custom`}
      >
        {/* LEFT */}
        <div
          className={`bg-[#D1D5DB] p-3 flex flex-col gap-6 rounded-lg relative ${
            toggle ? "" : "items-center"
          }`}
        >
          <Link className="flex justify-center items-center ">
            {toggle ? (
              <img
                src={logo}
                alt=""
                className={`overflow-hidden transition-all ease-custom ${
                  toggle ? "w-20" : "w-0"
                }`}
              />
            ) : (
              <img
                src={logo2}
                alt=""
                className={`overflow-hidden transition-all ease-custom ${
                  toggle ? "w-0" : "w-10"
                }`}
              />
            )}
          </Link>
          {/* toogle the icon and the label */}

          <Icon
            icon="iconamoon:arrow-left-2-light"
            width="20"
            height="20"
            style={{ color: "" }}
            onClick={() => setToggle(!toggle)}
            className={`${
              toggle ? "right-0 " : " -right-[20px] rotate-180"
            } transition-all ease-custom rounded-l-lg bg-green-200 text-black flex justify-center items-center cursor-pointer absolute top-[130px]`}
          />

          {/* PROFILE */}
          <div className="flex items-center gap-2 mt-3">
            <Icon
              icon="radix-icons:avatar"
              width="30"
              height="30"
              style={{ color: "#000" }}
            />
            <div className={`${toggle ? "block mb-2" : "hidden"}`}>
              <p className="text-[12px] font-medium text-[#8695A0]">Welcome!</p>
              <h3 className="text-xs font-medium">John Doe</h3>
            </div>
          </div>
          {/* NAVIGATION */}
          <div className="flex-1">
            <Menu />
          </div>
          <div className="flex items-center gap-2">
            <Icon
              icon="material-symbols:logout-rounded"
              width="24"
              height="24"
              style={{ color: "#000" }}
            />
            <span
              className={`${toggle ? "block" : "hidden"} text-xs font-medium`}
            >
              Logout
            </span>
          </div>
        </div>
        {/* RIGHT */}
        <div className="px-4">{children}</div>
      </div>
    </>
  );
}
