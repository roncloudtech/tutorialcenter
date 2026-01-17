import { useState } from "react";
import logo from "../Assets/tutorial_logo.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import Layout2 from "../Components/Layout2";
import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useSchoolContext } from "../Context/SchoolContext";

export default function StaffLogin() {
  const { setAuthenticatedUser, setRole } = useSchoolContext();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const API_BASE_URL = "http://localhost:8000/api/";

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);

    try {
      const res = await axios.post(`${API_BASE_URL}staffs/login`, {
        email: formData.email,
        password: formData.password,
      });

      const staffInfo = res.data.staff;

      if (!staffInfo) {
        console.log("No staff data returned.");
        return;
      }

      // Save in context and localStorage
      localStorage.setItem("userInfo", JSON.stringify(staffInfo));
      localStorage.setItem("userRole", "staff");
      setAuthenticatedUser(staffInfo);
      setRole("staff");

      // Redirect
      if (res.status === 200) {
        navigate("/staff/dashboard");
      }
    } catch (error) {
      console.log(error);
      setErrors(error?.response?.data || {});
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout2
      btnPath="/staff/register"
      btnTitle="Sign Up"
      reverse={true}
      bgImage="https://s3-alpha-sig.figma.com/img/b1c7/888c/2024ce8a72cc6d3912a58e0b88041d94?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NetA6YLM1AZG..."
    >
      <div className="Container">
        <div className="area-wrapper !py-4">
          <div className="flex flex-col justify-center items-center">
            <div className="blockContent">
              <div className="mb-3 grid justify-center">
                <img src={logo} alt="Tutorial Logo" className="max-w-24" />
              </div>
              <div className="text-center mb-2">
                <h1 className="semi-title mb-3">Staff Login</h1>
                <p className="text-[0.70rem] font-semibold">
                  Welcome back! Log in to access your staff dashboard.
                </p>
              </div>
            </div>

            <div className="max-w-[410px] w-full lg:px-9 py-5 lg:bg-[#FBFAFA] rounded-md lg:shadow-md mt-3">
              {errors.message && (
                <p className="mb-4 text-xs text-red-500 text-center">{errors.message}</p>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-5">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
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

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 ${
                        errors.password
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:ring-blue-900"
                      }`}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3.5 text-gray-400 hover:text-blue-500 cursor-pointer"
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

                {/* Remember me */}
                <div className="formItems flex gap-2 my-5">
                  <input type="checkbox" />
                  <span className="text-[13.5px] font-semibold">Remember me</span>
                </div>

                {/* Submit */}
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

              {/* Or sign in with */}
              <div className="flex justify-center items-center my-6 gap-2">
                <div className="w-full h-[1.5px] bg-black" />
                <p className="text-xs text-nowrap">Or continue with</p>
                <div className="w-full h-[1.5px] bg-black" />
              </div>

              {/* Google Sign-in */}
              <div className="grid justify-center mb-5">
                <div className="flex gap-3 bg-white shadow-md px-4 py-2 rounded-lg">
                  <Icon icon="devicon:google" width="20" height="20" />
                  <span className="text-[#8695A0] text-xs">Sign in with Google</span>
                </div>
              </div>

              {/* Sign up link */}
              <p className="text-xs text-center font-medium text-mainBlack">
                Don’t have an account?{" "}
                <Link
                  to="/staff/register"
                  className="font-semibold text-red-600 hover:underline transition-all"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout2>
  );
}
