import React from "react";
import logo from "../Assets/tutorial_logo.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import Layout2 from "../Components/Layout2";

export default function SignUp() {
  return (
    <>
      <Layout2
        btnTitle={"Login"}
        btnPath={"/login"}
        bgImage={
          "https://s3-alpha-sig.figma.com/img/18dd/16a4/afbd92bf96478a277f46483908f76067?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cCIXNy2KgJWlGWDvJ~ffmcn2Vu37r~QozGA3r23BHLOBieU~n7-ckUb7E4kLs-7SNxjvd8wozzGV7GFFIUlx7w6UddLbiQ9DRyEdyz2YRFzdNnqueQ-h8Y2XJzAAs6ddUZP3yxauLgX2oFHNxa4wmjYMkSj0nH-S18v9UFQ5Ek8yX9v8GMh7wh~3of1iqXeFG0rSwY2KhTR0ZkFbb9r7jqqNbRbsl~GkpGJ779mvZjzJMEyUl5n6UcURp8muFvacQOATuITlnVDZsmMKbA-PUX-B8w801PElESUGLBR8EYWiToAOyJmZlH9gRTNPef8UAx1TdGRWvy9tkDOahUTEPw__"
        }
      >
        <div className="Container">
          <div className="area-wrapper !py-4">
            <div className="flex flex-col justify-center items-center">
              <div className="blockContent mb-3">
                <div className="mb-3 grid justify-center">
                  <img src={logo} alt="" className="max-w-24" />
                </div>
                <div className="text-center mb-5">
                  <h1 className="text-[1.2rem] font-bold mb-3">Sign Up</h1>
                  <p className="text-[0.60rem] font-bold ">
                    Create an account to get started with us.
                  </p>
                </div>
                <div className="flex gap-x-16 relative">
                  <p className=" font-bold text-primary">Student</p>
                  <div className="lg:w-[150px] sm:w-[100px] w-[75px] h-[2px] bg-slate-800 absolute -bottom-1  lg:-left-9 sm:-left-4" />
                  <p className="text-[0.60rem]">Guardian / Parents</p>
                </div>
              </div>
              <div className="w-[410px] px-9 py-5 bg-[#FBFAFA] rounded-md shadow-md mt-3">
                {/* Form Inputs */}
                <div className="w-full">
                  <form action="" method="post">
                    <div className="formItems">
                      <label
                        htmlFor=""
                        className="text-[13.5px] font-semibold "
                      >
                        Email / Phone Number
                      </label>
                      <div className="mt-1 flex gap-2 px-2 py-[10px] bg-[#D1D5DB] rounded-lg shadow-sm w-full">
                        <Icon
                          icon="ic:baseline-email"
                          width="24"
                          height="24"
                          style={{ color: "#000" }}
                        />
                        <input
                          type="text"
                          placeholder="Email address"
                          className="placeholder:italic placeholder:text-xs"
                        />
                      </div>
                    </div>
                    <div className="formItems">
                      <label
                        htmlFor=""
                        className="text-[13.5px] font-semibold "
                      >
                        Password
                      </label>
                      <div className="mt-1 flex gap-2 px-2 py-[10px] bg-[#D1D5DB] rounded-lg shadow-sm w-full">
                        <Icon
                          icon="mdi:eye"
                          width="24"
                          height="24"
                          style={{ color: "#000" }}
                        />
                        <input type="password" />
                      </div>
                    </div>
                    <div className="formItems">
                      <label
                        htmlFor=""
                        className="text-[13.5px] font-semibold "
                      >
                        Confirm Password
                      </label>
                      <div className="mt-1 flex gap-2 px-2 py-[10px] bg-[#D1D5DB] rounded-lg shadow-sm w-full">
                        <Icon
                          icon="mdi:eye"
                          width="24"
                          height="24"
                          style={{ color: "#000" }}
                        />
                        <input type="text" />
                      </div>
                    </div>
                    <div className="formItems flex gap-2 my-3">
                      <input
                        type="checkbox"
                        className="flex justify-start items-start "
                      />
                      <span htmlFor="" className="text-[13.5px] font-semibold ">
                        Remember me
                      </span>
                    </div>
                    <div className="mt-1 flex gap-2 px-2 py-[8px] bg-gradient-to-r from-[#09314F] to-[#E83831] rounded-lg shadow-sm w-full">
                      <button
                        type="submit"
                        className="w-full h-full text-white text-[17px] font-semibold"
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                  <div className="flex justify-center items-center my-4 gap-2">
                    <div className="w-full h-[1.5px] bg-black" />
                    <p className="text-xs text-nowrap">Or continue with</p>
                    <div className="w-full h-[1.5px] bg-black" />
                  </div>
                  <div className="grid justify-center ">
                    <div className="flex gap-3 bg-white shadow-md px-4 py-2 rounded-lg">
                      <Icon icon="devicon:google" width="20" height="20" />
                      <span className="text-[#8695A0] text-xs">
                        Sign up with google
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout2>
    </>
  );
}
