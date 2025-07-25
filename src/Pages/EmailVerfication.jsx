import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import logo1 from "../Assets/TC 1.png";

export default function EmailVerfication() {
  const [searchParams] = useSearchParams();
  const identifier = searchParams.get("identifier");
  const role = searchParams.get("role") === "true";
  const API_BASE_URL = "http://localhost:8000";

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    num1: "",
    num2: "",
    num3: "",
    num4: "",
    num5: "",
    num6: "",
  });

  const [msg, setMsg] = useState("");
  const [toast, setToast] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const inputRefs = {
    num1: useRef(null),
    num2: useRef(null),
    num3: useRef(null),
    num4: useRef(null),
    num5: useRef(null),
    num6: useRef(null),
  };

  useEffect(() => {
    inputRefs.num1.current.focus(); // autofocus on first load
  }, [inputRefs.num1]);

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
          role
            ? `${API_BASE_URL}/api/guardians`
            : `${API_BASE_URL}/api/students`
        }/verify`,
        {
          identifier: identifier,
          code: code,
        }
      );

      if (response.status === 200) {
        setToast({ type: "success", message: response.data.message });
        setMsg(<span className="text-green-500">{response.data.message}</span>);
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
      setMsg(
        <span className="text-red-500">{error.response.data.message}</span>
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="my-16">
        <div className="Container flex items-center justify-center">
          <div className="md:w-96 w-full md:p-10 bg-white md:shadow-md rounded-lg flex flex-col items-center justify-center">
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
                <span className="text-black font-semibold">
                  olarewaju@gmail.com
                </span>
              </p>
            </div>
            <div className="text-center mt-4">
              {toast.message && (
                <p
                  className={`text-sm ${
                    toast?.type === "error" ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {toast.message}
                </p>
              )}
            </div>
            <form
              autoComplete="off"
              onSubmit={handleSubmit}
              className="verfication code my-5 w-full flex flex-col items-center justify-evenly"
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
                      maxLength="1"
                      placeholder="0"
                      className={`p-2 ring-1 rounded-sm ring-gray-300 text-center text-sm text-blue-900 w-10 h-10 border ${
                        errors[field] ? "border-red-500" : "border-gray-300"
                      } focus:ring-2 focus:ring-blue-900`}
                    />
                  )
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
