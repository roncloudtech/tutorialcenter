import { useState } from "react";
import logo from "../Assets/tutorial_logo.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import Layout2 from "../Components/Layout2";
import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useSchoolContext } from "../Context/SchoolContext";
export default function Login() {
  // Importing authenticatedUser context
  const { setAuthenticatedUser, setRole, role } = useSchoolContext();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [userRole, setUserRole] = useState("guardian"); // Default role
  const API_BASE_URL = "http://localhost:8000/api/";
  const [errors, setErrors] = useState({}); // Form State Errors
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  }); // Form Data State
  const [isLoading, setIsLoading] = useState(false); // Loading State

  // Capture each user entries
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form Validation
  const validateForm = () => {
    const newErrors = {};
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
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form Submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Stop submission if validation fails
    setIsLoading(true);
    // check if the user has been authenticated if yes, redirect them to the dashboard
    if (role && role !== "") {
      navigate(userRole === "student" ? "/dashboard" : "/parent-dashboard");
      return;
    }
    try {
      const res = await axios.post(
        `${
          userRole === "student"
            ? `${API_BASE_URL}students`
            : `${API_BASE_URL}guardians`
        }/login`,
        {
          password: formData.password,
          email: formData.email,
          identifier: formData.email,
        }
      );
      // clear all form fields
      setFormData({
        password: "",
        email: "",
      });
      // Set authenticated user in the local and context state
      if (userRole === "student") {
        // This is where the error might occur if the student data is not returned correctly
        const studentInfo = res.data.student;
        if (studentInfo === undefined) {
          console.log(
            `No student data found, check the login flow.  ${studentInfo}`
          );
          return;
        }
        // Store user info and role in local storage and context
        localStorage.setItem("userInfo", JSON.stringify(studentInfo));
        localStorage.setItem("userRole", "student");
        setAuthenticatedUser(studentInfo);
        setRole("student");
      } else {
        // This is where the error might occur if the guardian data is not returned correctly
        const guardianInfo = res.data.guardian;
        if (guardianInfo === undefined) {
          console.log(
            `No guardian data found, check the login flow.  ${guardianInfo}`
          );
          return;
        }
        // Store user info and role in local storage and context
        localStorage.setItem("userInfo", JSON.stringify(guardianInfo));
        localStorage.setItem("userRole", "guardian");
        setAuthenticatedUser(guardianInfo);
        setRole("guardian");
      }
      if (res.status === 200) {
        userRole === "student"
          ? navigate("/dashboard")
          : navigate("/parent-dashboard");
      }
    } catch (error) {
      console.log(error);
      setErrors(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Layout2
        btnPath={"/register"}
        btnTitle={"Sign Up"}
        reverse={true}
        bgImage={
          "https://s3-alpha-sig.figma.com/img/b1c7/888c/2024ce8a72cc6d3912a58e0b88041d94?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NetA6YLM1AZG-9ptqmgqNPonpGympdnjVHZFKNTA5BybXC57Wb6Kjq0gtuKgGKZnVgQC4XFF3QBGe3OPn5C~5xW6xD0Vj4nFbJr8e0VrEONx16dGilnEkgEpqYILI9jKpw68JDzMyCKXsgFZ44L~Bw-2nHn6NYF8ozEKnwLYf1UbrOkyJDsxR2PYXpnFg4jq0gd6YZCDmUI3rSUXFkaSEO7QUi7xlnmMcPX5KdBhhWBiWVoLcQWRxzB2NBBgvVABGzywJ43MO9htbcOJSqhJMZXInsUGpq3YFt7kqfAVVVttRIdAb1CND~pfePU3Un8kfBmbjvX8niPpDB1MvtyvGg__"
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
                  <h1 className="semi-title mb-3">Login</h1>
                  <p className="text-[0.70rem] font-semibold ">
                    Welcome back! Log in to continue your journey <br /> with
                    us.{" "}
                  </p>
                </div>
                <div className="grid grid-cols-2 relative text-xs mt-6">
                  <button
                    onClick={() => setUserRole("student")}
                    className={`border-solid ${
                      userRole === "student"
                        ? "border-b-2 text-mainBlue pointer-events-none"
                        : "text-mainGrey cursor-pointer"
                    }  pb-1.5 text-center border-mainBlue font-bold mr-2`}
                  >
                    Student
                  </button>
                  <button
                    onClick={() => setUserRole("guardian")}
                    className={`border-solid ${
                      userRole === "guardian"
                        ? "border-b-2 text-mainBlue pointer-events-none"
                        : "text-mainGrey cursor-pointer"
                    }  pb-1.5 text-center border-mainBlue font-bold`}
                  >
                    Guardian / Parents
                  </button>
                </div>
              </div>
              <StudentForm
                userRole={userRole}
                setShowPassword={setShowPassword}
                showPassword={showPassword}
                formData={formData}
                errors={errors}
                handleChange={handleChange}
                isLoading={isLoading}
                handleFormSubmit={handleFormSubmit}
              />
              <GuardianForm
                userRole={userRole}
                setShowPassword={setShowPassword}
                showPassword={showPassword}
                formData={formData}
                errors={errors}
                handleChange={handleChange}
                isLoading={isLoading}
                handleFormSubmit={handleFormSubmit}
              />
            </div>
          </div>
        </div>
      </Layout2>
    </>
  );
}
const GuardianForm = ({
  userRole,
  setShowPassword,
  showPassword,
  formData,
  errors,
  handleChange,
  isLoading,
  handleFormSubmit,
}) => {
  return (
    <>
      <div
        className={`${
          userRole === "guardian" ? "block" : "hidden"
        } max-w-[410px] w-full lg:px-9 py-5 lg:bg-[#FBFAFA] rounded-md lg:shadow-md mt-3`}
      >
        {/* Log the error message */}
        {errors.message && (
          <p className="mb-4 text-xs text-red-500 text-center">
            {errors.message}
          </p>
        )}
        {/* Form Inputs */}
        <form
          onSubmit={handleFormSubmit}
          action=""
          method="post"
          autoComplete="off"
          className="space-y-5"
        >
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2">
              Email Address
            </label>
            <input
              id="student-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-blue-900 focus:border-transparent`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="student-password"
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
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          <div className="formItems flex gap-2 my-5">
            <input
              type="checkbox"
              className="flex justify-start items-start "
            />
            <span htmlFor="" className="text-[13.5px] font-semibold ">
              Remember me
            </span>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-4 rounded-lg font-medium ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-[#09314F] to-[#E83831] hover:bg-green-800"
            } text-white transition-colors flex items-center justify-center`}
          >
            {isLoading ? (
              <Icon icon="line-md:loading-loop" width="24" height="24" />
            ) : (
              "Login"
            )}
          </button>
        </form>
        <div className="flex justify-center items-center my-6 gap-2">
          <div className="w-full h-[1.5px] bg-black" />
          <p className="text-xs text-nowrap">Or continue with</p>
          <div className="w-full h-[1.5px] bg-black" />
        </div>
        <div className="grid justify-center mb-5">
          <div className="flex gap-3 bg-white shadow-md px-4 py-2 rounded-lg">
            <Icon icon="devicon:google" width="20" height="20" />
            <span className="text-[#8695A0] text-xs">Sign up with google</span>
          </div>
        </div>
        <p className="text-xs text-center font-medium text-mainBlack">
          {" "}
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-red-600 hover:underline transition-all"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
};
const StudentForm = ({
  userRole,
  setShowPassword,
  showPassword,
  formData,
  errors,
  handleChange,
  isLoading,
  handleFormSubmit,
}) => {
  return (
    <div
      className={`${
        userRole === "student" ? "block" : "hidden "
      } max-w-[410px] w-full lg:px-9 py-5 lg:bg-[#FBFAFA] rounded-md lg:shadow-md mt-3`}
    >
      {/* Log the error message */}
      {errors.message && (
        <p className="mb-4 text-xs text-red-500 text-center  gap-1">
          {errors.message}
          {/* Check if the error message is email address not verified show the verfication link  */}
          {errors.message === "Email or Phone not verified" && (
            <Link
              to={`/email-verification?identifier=${formData.email}&role=${userRole}`}
              className="text-[12px] text-gray-600 hover:text-gray-400 transition block text-center"
            >
              verify your email
            </Link>
          )}
        </p>
      )}
      {/* Form Inputs */}
      <form
        action=""
        onSubmit={handleFormSubmit}
        method="post"
        autoComplete="off"
        className="space-y-5"
      >
        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium text-blue-900 mb-2">
            Email Address
          </label>
          <input
            id="student-email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg ${
              errors.email ? "border-red-500" : "border-gray-300"
            } focus:ring-2 focus:ring-blue-900 focus:border-transparent`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>
        {/* Password Input */}
        <div>
          <label className="block text-sm font-medium text-blue-900 mb-2">
            Password
          </label>
          <div className="relative">
            <input
              id="student-password"
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
            <p className="mt-1 text-sm text-red-500">{errors.password}</p>
          )}
        </div>
        <div className="formItems flex gap-2 my-5">
          <input type="checkbox" className="flex justify-start items-start " />
          <span htmlFor="" className="text-[13.5px] font-semibold ">
            Remember me
          </span>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-3 px-4 rounded-lg font-medium ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-[#09314F] to-[#E83831] hover:bg-green-800"
          } text-white transition-colors flex items-center justify-center`}
        >
          {isLoading ? (
            <Icon icon="line-md:loading-loop" width="24" height="24" />
          ) : (
            "Login"
          )}
        </button>
      </form>
      <div className="flex justify-center items-center my-6 gap-2">
        <div className="w-full h-[1.5px] bg-black" />
        <p className="text-xs text-nowrap">Or continue with</p>
        <div className="w-full h-[1.5px] bg-black" />
      </div>
      <div className="grid justify-center mb-5">
        <div className="flex gap-3 bg-white shadow-md px-4 py-2 rounded-lg">
          <Icon icon="devicon:google" width="20" height="20" />
          <span className="text-[#8695A0] text-xs">Sign up with google</span>
        </div>
      </div>
      <p className="text-xs text-center font-medium text-mainBlack">
        {" "}
        Don’t have an account?{" "}
        <Link
          to="/register"
          className="font-semibold text-red-600 hover:underline transition-all"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};
