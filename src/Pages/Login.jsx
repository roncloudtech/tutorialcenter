import React from "react";
import logo from "../Assets/tutorial_logo.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <>
      <div className="h-screen w-screen lg:flex flex-row-reverse overflow-x-hidden">
        <div className="lg:w-[55%] w-full h-screen bg-white">
          <div className="Container">
            <div className="area-wrapper !py-4">
              <div className="flex flex-col justify-center items-center">
                <div className="blockContent">
                  <div className="mb-3 grid justify-center">
                    <img src={logo} alt="" className="max-w-24" />
                  </div>
                  <div className="text-center mb-2">
                    <h1 className="text-[1.2rem] font-bold mb-3">Sign Up</h1>
                    <p className="text-[0.70rem] font-semibold ">
                      Welcome back! Log in to continue your journey <br /> with
                      us.{" "}
                    </p>
                  </div>
                </div>
                <div className="max-w-[390px] px-9 py-5 bg-[#FBFAFA] rounded-md shadow-md mt-3">
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
                        <div className="mt-1 flex gap-2 px-2 py-[6px] bg-[#D1D5DB] rounded-lg shadow-sm w-full">
                          <Icon
                            icon="ic:baseline-email"
                            width="24"
                            height="24"
                            style={{ color: "#000" }}
                          />
                          <input
                            type="text"
                            placeholder="Email address"
                            className="placeholder:italic placeholder:text-xs "
                          />
                        </div>
                      </div>
                      <div className="formItems my-3">
                        <label
                          htmlFor=""
                          className="text-[13.5px] font-semibold "
                        >
                          Password
                        </label>
                        <div className="mt-1 flex gap-2 px-2 py-[6px] bg-[#D1D5DB] rounded-lg shadow-sm w-full">
                          <Icon
                            icon="mdi:eye"
                            width="24"
                            height="24"
                            style={{ color: "#000" }}
                          />
                          <input type="password" />
                        </div>
                      </div>

                      <div className="formItems flex gap-2 my-3">
                        <input
                          type="checkbox"
                          className="flex justify-start items-start "
                        />
                        <span
                          htmlFor=""
                          className="text-[13.5px] font-semibold "
                        >
                          Remember me
                        </span>
                      </div>
                      <div className="mt-1 flex gap-2 px-2 py-[8px] bg-gradient-to-r from-[#09314F] to-[#E83831] rounded-lg shadow-sm w-full">
                        <button
                          type="submit"
                          className="w-full h-full text-white text-[17px] font-semibold"
                        >
                          Login
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
        </div>
        <div className="hidden lg:block w-[45%] h-screen  bg-primary relative">
          <div className="absolute -right-1 bottom-32 w-20 h-8 bg-white  rounded-l-3xl">
            <Link
              to="/register"
              className="text-xs text-primary font-semibold w-full h-full flex justify-center items-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
