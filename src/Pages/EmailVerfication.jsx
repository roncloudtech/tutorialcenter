import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import logo1 from "../Assets/TC 1.png";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:8000/";

export default function EmailVerfication() {
  const [searchParams] = useSearchParams();
  const identifier = searchParams.get("identifier");
  const role = searchParams.get("role");

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    num1: "",
    num2: "",
    num3: "",
    num4: "",
    num5: "",
    num6: "",
  });

  const [toast, setToast] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  // Starts the countdown at 60 seconds for resend functionality
  const [timer, setTimer] = useState(60);

  const inputRefs = {
    num1: useRef(null),
    num2: useRef(null),
    num3: useRef(null),
    num4: useRef(null),
    num5: useRef(null),
    num6: useRef(null),
  };
  // autofocus on first load
  useEffect(() => {
    inputRefs.num1.current.focus();
  }, [inputRefs.num1]);

  // Countdown timer effect
  useEffect(() => {
    let interval;
    // Start the count down timer
    if (timer > 0)
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (value.length > 1) return; // prevent more than 1 character

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Move to next input
    if (value) {
      const nextInput = {
        num1: "num2",
        num2: "num3",
        num3: "num4",
        num4: "num5",
        num5: "num6",
      }[name];

      if (nextInput && inputRefs[nextInput]) {
        inputRefs[nextInput].current.focus();
      }
    }
  };

  // Handle paste event
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    const newFormData = { ...formData };

    for (let i = 0; i < pastedData.length; i++) {
      if (i < 6) {
        newFormData[`num${i + 1}`] = pastedData[i];
      }
    }

    setFormData(newFormData);

    // Focus on the last input filled
    const lastInput = `num${Math.min(pastedData.length, 6)}`;
    inputRefs[lastInput].current.focus();
  };
  // Handle key down
  const handleKeyDown = (e) => {
    const { name, value } = e.target;
    const currentInputIndex = parseInt(name.replace("num", ""));
    // Handle backspace
    if (e.key === "Backspace" && currentInputIndex > 1) {
      if (value === "") {
        inputRefs[`num${currentInputIndex - 1}`].current.focus();
      }
    }
    // Handle arrow keys
    if (e.key === "ArrowLeft" && currentInputIndex > 1) {
      inputRefs[`num${currentInputIndex - 1}`].current.focus();
    } else if (e.key === "ArrowRight" && currentInputIndex < 6) {
      inputRefs[`num${currentInputIndex + 1}`].current.focus();
    }
  };
  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) newErrors[key] = `${key} is required`;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    const code =
      formData.num1 +
      formData.num2 +
      formData.num3 +
      formData.num4 +
      formData.num5 +
      formData.num6;

    try {
      const response = await axios.post(
        `${
          role === "guardian"
            ? `${API_BASE_URL}api/guardians`
            : `${API_BASE_URL}api/students`
        }/verify`,
        {
          identifier: identifier,
          code: code,
        }
      );

      if (response.status === 200) {
        setToast({ type: "success", message: response.data.message });
        setTimeout(() => {
          navigate("/login");
        }, 2500);
      }
    } catch (error) {
      console.log(error);
      setToast({
        type: "error",
        message: error.response?.data?.message || "Verification failed",
      });
    } finally {
      setLoading(false);
    }
  };
  // Resend verification code
  const handleResendCode = async () => {
    // Reset the timer and disable the resend button again
    setTimer(60);
    // API call to resend the verification code
    try {
      const res = await axios.patch(
        `${API_BASE_URL}api/${role}s/resend-code`,
        {
          email: identifier,
        }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <section className="my-16">
        <div className="Container flex items-center justify-center text-center">
          <div className="md:w-[25rem] w-full md:p-10 bg-white md:shadow-xl rounded-lg flex flex-col items-center justify-center">
            <div className="logo mb-4">
              <img
                className="max-w-[80px] max-md:max-w-[70px]"
                src={logo1}
                alt="logo"
              />
            </div>
            <div className="description-text">
              <h2 className="md:text-2xl text-xl font-semibold">
                Please check your email
              </h2>
              <p className="text-sm text-gray-400 mt-2">
                We've sent code to{" "}
                <span className="text-black font-semibold">{identifier}</span>
              </p>
            </div>
            {toast?.message && (
              <div className="text-center mt-4">
                <p
                  className={`text-sm ${
                    toast?.type === "error" ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {toast?.message}
                </p>
              </div>
            )}
            <form
              autoComplete="off"
              onSubmit={handleSubmit}
              className="verfication code my-4 w-full flex flex-col items-center justify-evenly"
            >
              <div className="verification-code my-5 w-full flex items-center justify-evenly gap-2">
                {["num1", "num2", "num3", "num4", "num5", "num6"].map(
                  (field) => (
                    <input
                      key={field}
                      ref={inputRefs[field]}
                      name={field}
                      type="text"
                      value={formData[field]}
                      onChange={handleChange}
                      onPaste={handlePaste}
                      onKeyDown={handleKeyDown}
                      maxLength="1"
                      placeholder="0"
                      className={`p-2 ring-1 rounded-sm ring-gray-300 text-center text-sm text-blue-900 w-10 h-10 border ${
                        errors[field] ? "border-red-500" : "border-gray-300"
                      } focus:ring-2 focus:ring-blue-900`}
                    />
                  )
                )}
              </div>
              <div className="my-3">
                {timer > 0 ? (
                  <p className="text-sm text-gray-500">
                    If you didn’t get verification code yet. Resend code in
                    <span className="ml-1 font-semibold text-black">
                      {timer} seconds
                    </span>
                  </p>
                ) : (
                  <button
                    type="button"
                    onClick={handleResendCode}
                    className="text-base font-semibold text-batext-black"
                    disabled={timer > 0}
                  >
                    Resend code
                  </button>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-4 rounded-lg font-medium ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#09314F] to-[#E83831] hover:opacity-90"
                } text-white transition`}
              >
                {loading ? "Verifying..." : "Verify Email Address"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
