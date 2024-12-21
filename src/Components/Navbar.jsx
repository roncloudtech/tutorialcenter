import React from "react";
import logo from "../Assets/tutorial_logo.png";
import { Link } from "react-router-dom";

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
            <div className="">
              {navigation.map((item, index) => (
                <Link
                  to={item.path}
                  key={index}
                  className=" font-medium text-gray-800 hover:text-gray-900 mx-3"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {/* Apply button */}
            <div className="">
              <Link to="/login" className="mr-7 font-bold">
                Login
              </Link>
              <Link className="bg-primary text-white px-4 py-2 rounded-lg">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary py-2 text-center">
        <p className="text-white ">
          Click here to join our students in archiving excellence...{" "}
          <span className="text-ascent font-bold">Apply Now</span>
        </p>
      </div>
    </>
  );
}
