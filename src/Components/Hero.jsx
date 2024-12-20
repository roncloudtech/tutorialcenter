import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../Assets/TC 1.png"

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <div className="pt-12  ">
        <div className="Container">
          <div className="flex items-center justify-center">
            <div className="flex-1">
              <h1 className="font-bold text-[40px] mb-3">
                <span className="text-ascent">Ace</span> Your{" "}
                <span className="text-ascent">Exams</span> , <br /> Secure Your
                Future!
              </h1>
              <p className="text-base font-medium leading-7 mb-9">
                Your Ultimate Guide to{" "}
                <span className="text-ascent">JAMB, WAEC,</span> <br />{" "}
                <span className="text-ascent">NECO</span> And{" "}
                <span className="text-ascent">GCE</span> Success.
              </p>
              <div className="[&_a]:px-10 [&_a]:py-2 [&_a]:rounded-lg">
                <Link className="bg-gradient-to-r from-[#09314F] to-[#E83831] border-[2px]  border-solid border-x-[#E83831] border-y-[#09314F] mr-3 bg-clip-text text-transparent ">
                  View Training
                </Link>
                <Link className="bg-gradient-to-r from-[#09314F] to-[#E83831] text-white ">
                  Apply Now{" "}
                </Link>
              </div>
            </div>
            <div className="h-[510px] ">
              <div className="">
                <div className="flex">
                  <div className="w-[300px] h-[300px] bg-primary rounded-lg "></div>
                  <div className="w-[300px] h-[300px] bg-sencondary rounded-lg translate-y-36 -translate-x-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* subsidiary */}
      <div className="bg-ascent py-4">
        <div className="flex items-center justify-center gap-3">
         <img className="max-w-[75px]" src={logo1} alt="logo" />
         <p className="text-white font-semibold">Tutorial Center is subsidiary of Roncloud Technologies</p>
        </div>
      </div>
    </>
  );
}
