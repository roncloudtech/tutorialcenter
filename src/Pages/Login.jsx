import React from "react";
import logo from "../Assets/tutorial_logo.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import Layout2 from "../Components/Layout2";
export default function Login() {
  return (
    <>
      <Layout2
        btnPath={"/register"}
        btnTitle={"Sign Up"}
        reverse={true}
        bgImage={
          'https://s3-alpha-sig.figma.com/img/b1c7/888c/2024ce8a72cc6d3912a58e0b88041d94?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NetA6YLM1AZG-9ptqmgqNPonpGympdnjVHZFKNTA5BybXC57Wb6Kjq0gtuKgGKZnVgQC4XFF3QBGe3OPn5C~5xW6xD0Vj4nFbJr8e0VrEONx16dGilnEkgEpqYILI9jKpw68JDzMyCKXsgFZ44L~Bw-2nHn6NYF8ozEKnwLYf1UbrOkyJDsxR2PYXpnFg4jq0gd6YZCDmUI3rSUXFkaSEO7QUi7xlnmMcPX5KdBhhWBiWVoLcQWRxzB2NBBgvVABGzywJ43MO9htbcOJSqhJMZXInsUGpq3YFt7kqfAVVVttRIdAb1CND~pfePU3Un8kfBmbjvX8niPpDB1MvtyvGg__'
        }
      >
        <div className="Container">
          <div className="area-wrapper !py-4">
            <div className="flex flex-col justify-center items-center">
              <div className="blockContent">
                <div className="mb-3 grid justify-center">
                  <img src={logo} alt="" className="max-w-24" />
                </div>
                <div className="text-center mb-2">
                  <h1 className="text-[1.2rem] font-bold mb-3">Login</h1>
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
                      <span htmlFor="" className="text-[13.5px] font-semibold ">
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
      </Layout2>
    </>
  );
}
