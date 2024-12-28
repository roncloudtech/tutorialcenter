import React, { useState } from "react";
import logo from "../Assets/tutorial_logo.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

const navigation = [
  { path: "/", name: "Home" },
  { path: "/training", name: "Training" },
  { path: "/tuition", name: "Tuition" },
  { path: "/about", name: "About Us" },
  { path: "/contact", name: "Contact Us" },
  { path: "/blog", name: "News / Blog" },
  ,
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <div className="py-3">
        <div className="Container">
          <div className="flex items-center justify-between ">
            {/* Tutotrial Logo */}
            <div className="">
              <img src={logo} alt="" className="max-w-[150px]" />
            </div>
            {/* navigation Links */}
            <div className="hidden lg:block">
              {navigation.map((item, index) => (
                <Link
                  to={item.path}
                  key={index}
                  className="text-xs  font-semibold text-gray-800 hover:text-gray-900 mx-3"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {/* Apply button */}
            <div className="hidden lg:block">
              <Link to="/login" className="mr-7 font-bold">
                Login
              </Link>
              <Link className="bg-primary text-white px-4 py-2 rounded-lg">
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
                  icon="solar:hamburger-menu-bold"
                  width="30"
                  height="30"
                  style={{ color: "#000" }}
                />
              </button>
              <div className={`${visible ? "hidden" : "block"}`}>
                {/* background Cover */}
                <div
                  className={`${
                    visible ? "translate-x-full" : "translate-x-0"
                  } background-shadow transition-all duration-500 ease-linear`}
                  onClick={() => {
                    setVisible(true);
                  }}
                />
                {/* Menu Items */}
                <div className="fixed right-0 top-0 bottom-0 z-[600] w-full max-w-[240px] bg-white">
                  <div className="flex flex-col justify-end ">
                    <div className="flex flex-col justify-center items-center p-3">
                      <button
                        onClick={() => {
                          setVisible(true);
                        }}
                        className="self-end relative right-7"
                      >
                        <Icon
                          icon="heroicons:x-mark-20-solid"
                          width="30"
                          height="30"
                          style={{ color: "#000" }}
                        />
                      </button>
                      {/* Navigation links for mobile menu */}
                      <div className="self-end text-center mb-6">
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
                          <Link to="/login" className="block font-bold border border-[#94A3B8] bg-white shadow rounded-xl px-3 py-2">
                            Login
                          </Link>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* mobile menu ends here */}
          </div>
        </div>
      </div>

      <div className="bg-primary py-2 text-center block max-sm:hidden">
        <p className="text-white ">
          Click here to join our students in archiving excellence...{" "}
          <span className="text-ascent font-bold">Apply Now</span>
        </p>
      </div>
    </>
  );
}
