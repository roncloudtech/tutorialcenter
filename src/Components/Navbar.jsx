import React, { useEffect, useState } from "react";
import logo from "../Assets/tutorial_logo.png";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import useScrollVisibility from "../Hooks/useScrollVisibility";

const navigation = [
  { path: "/", name: "Home" },
  { path: "/training", name: "Training / Tuition" },
  { path: "/about", name: "About Us" },
  { path: "/contact", name: "Contact Us" },
  { path: "/blog", name: "News / Blog" },
];
export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const scrollVisible = useScrollVisibility();
  return (
    <>
      <div
        className={`${
          scrollVisible
            ? " bg-white shadow-custom-1 animate-header"
            : "invisible"
        } py-3.5 sticky top-0 z-[80]  w-full  h-[85px] flex items-center justify-center scroll`}
      >
        <div className="Container">
          <div className="flex items-center justify-between">
            {/* Tutotrial Logo */}
            <img src={logo} alt="" className="max-w-[120px]" />
            {/* navigation Links */}
            <div className="hidden lg:block">
              {navigation.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className="text-xs  font-semibold text-mainGrey mx-3 [&.active]:text-mainBlack"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
            {/* Apply button */}
            <div className="hidden lg:block">
              <Link to="/login" className="mr-7 font-bold">
                Login
              </Link>
              <Link
                to="/register"
                className="bg-primary text-white px-4 py-2 rounded-full"
              >
                Apply Now
              </Link>
            </div>
            {/* Mobile Menu Navigation Links */}
            <div className="block lg:hidden">
              <button
                onClick={() => {
                  setVisible(!visible);
                }}
                className={`relative z-[500] ${visible ? "block" : "hidden"}`}
              >
                <Icon
                  icon="quill:hamburger"
                  width="26"
                  height="26"
                  className="text-mainBlue"
                />
              </button>
            </div>
            {/* mobile menu ends here */}
          </div>
        </div>
      </div>
      <MobileNavigation setVisible={setVisible} visible={visible} />
    </>
  );
}

const MobileNavigation = ({ setVisible, visible }) => {
  return (
    <div
      className={`relative z-[100] ${visible ? "invisible" : "visible p-4"}`}
    >
      {/* background Cover */}
      <div
        className={` background-shadow transition-all duration-300 ease-custom
                    ${visible ? "opacity-0" : "opacity-full"} `}
        onClick={() => {
          setVisible(true);
        }}
      />
      {/* Menu Items */}
      <div
        className={`${visible ? "translate-x-full" : "translate-x-0"}
                  fixed right-0 top-0 bottom-0 z-[600] w-full max-w-[240px] bg-white transition-all duration-300 ease-custom`}
      >
        <div className="flex flex-col justify-end ">
          <div className="flex flex-col justify-center items-center p-3">
            <button
              onClick={() => {
                setVisible(true);
              }}
              className="absolute -left-7 top-0 z-50"
            >
              <Icon
                icon="heroicons:x-mark-20-solid"
                width="30"
                height="30"
                style={{ color: "#fff" }}
              />
            </button>
            {/* Navigation links for mobile menu */}
            <div className="self-end text-right mb-4">
              {navigation.map((item, index) => (
                <Link
                  to={item.path}
                  key={index}
                  className="text-sm block font-semibold text-gray-800 hover:text-gray-900 my-3"
                >
                  {item.name}
                </Link>
              ))}
              {/* Apply button for mobile menu */}
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 self-end">
              <Link className="block text-xs bg-primary text-white py-2 px-3 rounded-xl">
                Apply Now
              </Link>
              <Link
                to="/login"
                className="block font-bold border border-[#94A3B8] bg-white shadow rounded-xl px-3 py-2"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
