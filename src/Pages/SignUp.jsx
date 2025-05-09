import React, { useState } from "react";
import logo from "../Assets/tutorial_logo.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import Layout2 from "../Components/Layout2";

export default function SignUp() {
  const [role, setRole] = useState(false);
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
              <div className="w-[410px]">
                <div className="blockContent mb-3">
                  <div className="mb-3 grid justify-center">
                    <img src={logo} alt="" className="max-w-24" />
                  </div>
                  <div className="text-center mb-7">
                    <h1 className="semi-title mb-4">Sign Up</h1>
                    <p className="text-xs font-bold">
                      Create an account to get started with us.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 relative text-xs">
                    <p
                      onClick={() => setRole(false)}
                      className={`border-solid ${
                        role
                          ? "text-mainGrey cursor-pointer"
                          : "border-b-2 text-mainBlue pointer-events-none"
                      }  pb-1.5 text-center border-mainBlue font-bold`}
                    >
                      Student
                    </p>
                    <p
                      onClick={() => setRole(true)}
                      className={`border-solid ${
                        role
                          ? "text-mainBlue border-b-2 pointer-events-none"
                          : "text-mainGrey cursor-pointer"
                      }  pb-1.5 text-center border-mainBlue font-bold`}
                    >
                      Guardian / Parents
                    </p>
                  </div>
                </div>
                <div className="px-9 py-5 bg-[#FBFAFA] rounded-md shadow-md mt-3 w-full">
                  {/* Form Inputs */}
                  <form
                    autoComplete="off"
                    action=""
                    method="post"
                    className="space-y-3.5"
                  >
                    <InputFields
                      type="email"
                      label="Email / Phone Number"
                      placeholder="Email address"
                      icon="ic:baseline-email"
                      name="email"
                    />
                    <InputFields
                      type="password"
                      label="Password"
                      placeholder="password"
                      icon="mdi:eye"
                      name="password"
                    />
                    <InputFields
                      type="password"
                      label="Confirm Password"
                      placeholder="password"
                      icon="mdi:eye"
                      name="password"
                    />
                    <div className="formItems flex gap-2 my-3">
                      <input
                        type="checkbox"
                        className="flex justify-start items-start "
                      />
                      <span className="text-[13.5px] font-semibold ">
                        Remember me
                      </span>
                    </div>
                    <div className="mt-1 flex gap-2 py-[10px] bg-gradient-to-r from-[#09314F] to-[#E83831] rounded-lg shadow-sm w-full">
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
                  <button className="w-full flex items-center justify-center ">
                    <div className="flex items-center justify-center w-max gap-3 bg-white shadow-md py-2 px-3.5 rounded-lg">
                      <Icon icon="devicon:google" width="20" height="20" />
                      <span className="text-[#8695A0] text-xs">
                        Sign up with google
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout2>
    </>
  );
}

const InputFields = ({ label, type, name, placeholder, icon }) => {
  return (
    <div className="formItems">
      <label htmlFor="" className="text-[13.5px] font-semibold">
        {label}
      </label>
      <div className="mt-1.5 flex gap-2 px-2 py-[10px] bg-[#D1D5DB] rounded-lg shadow-sm w-full">
        <Icon icon={icon} width="24" height="24" />
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="placeholder:italic placeholder:text-xs"
        />
      </div>
    </div>
  );
};
