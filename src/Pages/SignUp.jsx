import axios from "axios";
import { useState } from "react";
import logo from "../Assets/tutorial_logo.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import Layout2 from "../Components/Layout2";

export default function SignUp() {
  const API_BASE_URL = "http://localhost:8000";
  const [role, setRole] = useState(false);

  // Caturing the user info
  // For Both Student and Guardian
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
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

    if (!formData.gender.trim()) newErrors.gender = "Please select your gender";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.password = "Passwords do not match";
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Confirm Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('This is role', role);
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post(
        `${
          role
            ? `${API_BASE_URL}/api/guardians`
            : `${API_BASE_URL}/api/students`
        }/register`,
        {
          firstname: formData.firstName,
          lastname: formData.lastName,
          email: formData.email,
          password: formData.password,
        }
      );

      if (response.status === 201) {
        navigate(
          `/email-verification?identifier=${formData.email}&role=${role}`
        );
      }
    } catch (error) {
      console.log(error);
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      } else {
        console.error("Registration error:", error);
      }
    } finally {
      setLoading(false);
    }
  };
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
              <div className="max-w-[410px] w-full">
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
                    <button
                      onClick={() => setRole(false)}
                      className={`border-solid ${
                        role
                          ? "text-mainGrey cursor-pointer"
                          : "border-b-2 text-mainBlue pointer-events-none"
                      }  pb-1.5 text-center border-mainBlue font-bold`}
                    >
                      Student
                    </button>
                    <button
                      onClick={() => setRole(true)}
                      className={`border-solid ${
                        role
                          ? "text-mainBlue border-b-2 pointer-events-none"
                          : "text-mainGrey cursor-pointer"
                      }  pb-1.5 text-center border-mainBlue font-bold`}
                    >
                      Guardian / Parents
                    </button>
                  </div>
                </div>
                <div className="lg:px-9 py-5 lg:bg-[#FBFAFA] lg:shadow-md rounded-md mt-3 w-full">
                  {/* Form Inputs */}
                  {role ? (
                    /* Show Student Form
                       handle the submit registration logic for the student
                    */
                    <Form
                      onSubmit={handleSubmit}
                      formData={formData}
                      handleChange={handleChange}
                      loading={loading}
                      errors={errors}
                      setShowPassword={setShowPassword}
                      showPassword={showPassword}
                      showConfirmPassword={showConfirmPassword}
                      setShowConfirmPassword={setShowConfirmPassword}
                    />
                  ) : (
                    /* Show Parent Form
                       handle the submit registration logic for the parent
                    */
                    <Form
                      onSubmit={handleSubmit}
                      formData={formData}
                      handleChange={handleChange}
                      loading={loading}
                      errors={errors}
                      setShowPassword={setShowPassword}
                      showPassword={showPassword}
                      showConfirmPassword={showConfirmPassword}
                      setShowConfirmPassword={setShowConfirmPassword}
                    />
                  )}
                  <div className="flex justify-center items-center my-6 gap-2">
                    <div className="w-full h-[1.5px] bg-black" />
                    <p className="text-xs text-nowrap">Or continue with</p>
                    <div className="w-full h-[1.5px] bg-black" />
                  </div>
                  <button className="w-full flex items-center justify-center mb-5">
                    <div className="flex items-center justify-center w-max gap-3 bg-white shadow-md py-2 px-3.5 rounded-lg">
                      <Icon icon="devicon:google" width="20" height="20" />
                      <span className="text-[#8695A0] text-xs">
                        Sign up with google
                      </span>
                    </div>
                  </button>
                  <p className="text-xs text-center font-medium text-mainBlack">
                    {" "}
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="font-semibold text-red-600 hover:underline transition-all"
                    >
                      Log In
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout2>
    </>
  );
}

const Form = ({
  onSubmit,
  formData,
  handleChange,
  errors,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword,
  loading,
}) => {
  return (
    <form
      autoComplete="off"
      action=""
      method="post"
      className="space-y-5"
      onSubmit={onSubmit}
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
            errors.firstName ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-blue-900 focus:border-transparent`}
        />
        {errors.firstName && (
          <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
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
          <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-blue-900 mb-2">
          Email Address
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
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      {/* Gender Select */}
      <div>
        <label className="block text-sm font-medium text-blue-900 mb-2">
          Gender
        </label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className={`w-full px-4 py-2 border border-solid rounded-lg ${
            errors.gender ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-blue-900 focus:border-transparent`}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>
        {errors.gender && (
          <p className="mt-1 text-sm text-red-500">{errors.gender}</p>
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
          <p className="mt-1 text-sm text-red-500">{errors.password}</p>
        )}
      </div>

      {/* Confirm Password Input */}
      <div>
        <label className="block text-sm font-medium text-blue-900 mb-2">
          Confirm Password
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
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <EyeSlashIcon className="h-4 w-5" />
            ) : (
              <EyeIcon className="h-4 w-5" />
            )}
          </span>
        </div>
        {errors.confirmPassword && (
          <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
        )}
      </div>
      {/* Sign Up Button */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 px-4 rounded-lg font-medium ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-[#09314F] to-[#E83831] hover:bg-green-800"
        } text-white transition-colors`}
      >
        Register
      </button>
    </form>
  );
};
