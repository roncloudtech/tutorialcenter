import { useState } from "react";
import logo from "../Assets/tutorial_logo.png";
import { Icon } from "@iconify/react/dist/iconify.js";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
// import { Link } from "react-router-dom";
import Layout2 from "../Components/Layout2";

export default function SignUp() {
  const [role, setRole] = useState(false);

  // Caturing the user info
  // For Both Student and Guardian
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  // const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Capture each user entries
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    // if (
    //   formData.phoneNumber &&
    //   !/^\+234[789][01]\d{8}$|^0[789][01]\d{8}$/.test(formData.phoneNumber)
    // ) {
    //   newErrors.phoneNumber = "Invalid phone number format";
    // }

    if (!formData.role) {
      newErrors.role = "Role is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
  }
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
                    onSubmit={handleSubmit}
                  >
                    {/* First Name Input */}
                    <div>
                      <label className="block text-sm font-medium text-blue-900 mb-2">
                        First Name
                      </label>
                      <input
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg ${
                          errors.firstName
                            ? "border-red-500"
                            : "border-gray-300"
                        } focus:ring-2 focus:ring-blue-900 focus:border-transparent`}
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    {/* Last Name Input */}
                    <div>
                      <label className="block text-sm font-medium text-blue-900 mb-2">
                        Last Name
                      </label>
                      <input
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg ${
                          errors.lastName ? "border-red-500" : "border-gray-300"
                        } focus:ring-2 focus:ring-blue-900 focus:border-transparent`}
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.lastName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-blue-900 mb-2">
                        Email Address/Phone Number
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        } focus:ring-2 focus:ring-blue-900 focus:border-transparent`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Password Input */}
                    <div>
                      <label className="block text-sm font-medium text-blue-900 mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={handleChange}
                          className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 ${
                            errors.password
                              ? "border-red-500 focus:ring-red-500"
                              : "border-gray-300 focus:ring-blue-900"
                          }`}
                        />
                        <span
                          className="absolute right-3 top-3.5 text-gray-400 hover:text-blue-500 transition-colors cursor-pointer"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeSlashIcon className="h-4 w-5" />
                          ) : (
                            <EyeIcon className="h-4 w-5" />
                          )}
                        </span>
                      </div>
                      {errors.password && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.password}
                        </p>
                      )}
                    </div>

                    {/* Confirm Password Input */}
                    <div>
                      <label className="block text-sm font-medium text-blue-900 mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 ${
                            errors.confirmPassword
                              ? "border-red-500 focus:ring-red-500"
                              : "border-gray-300 focus:ring-blue-900"
                          }`}
                        />
                        <span
                          className="absolute right-3 top-3.5 text-gray-400 hover:text-blue-500 transition-colors cursor-pointer"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        >
                          {showConfirmPassword ? (
                            <EyeSlashIcon className="h-4 w-5" />
                          ) : (
                            <EyeIcon className="h-4 w-5" />
                          )}
                        </span>
                      </div>
                      {errors.password && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.password}
                        </p>
                      )}
                    </div>
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

// const InputFields = ({ label, type, name, placeholder, icon }) => {
//   return (
//     <div className="formItems">
//       <label htmlFor="" className="text-[13.5px] font-semibold">
//         {label}
//       </label>
//       <div className="mt-1.5 flex gap-2 px-2 py-[10px] bg-[#D1D5DB] rounded-lg shadow-sm w-full">
//         <Icon icon={icon} width="24" height="24" />
//         <input
//           type={type}
//           name={name}
//           placeholder={placeholder}
//           className="placeholder:italic placeholder:text-xs"
//         />
//       </div>
//     </div>
//   );
// };
