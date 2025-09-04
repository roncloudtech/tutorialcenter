// The training duration section component

import { useEffect, useState } from "react";
import PaystackPop from "@paystack/inline-js";
import GoBack from "./GoBackBtn";
import { useSchoolContext } from "../../Context/SchoolContext";
import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";
// Update student Info API call
const updateStudentDepartment = async (id, department) => {
  return axios.put(
    `${API_BASE_URL}/students/${id}`,
    { department },
    { withCredentials: true }
  );
};

// This component allows the user to select the duration for their training and calculates the total amount based on the selected courses and durations.
const TrainingDuration = ({
  handleBackBtn,
  setState,
  selectedCourses,
  setSelectedCourses,
  department,
}) => {
  // Get the authenticated user from context
  const { authenticatedUser, setAuthenticatedUser } = useSchoolContext();

  const autoCalcCoursePrice = (pricePerMonth, duration) => {
    let calcDuration;
    switch (duration) {
      case "quarterly":
        calcDuration = 3;
        break;
      case "HalfYear":
        calcDuration = 6;
        break;
      case "Annually":
        calcDuration = 12;
        break;

      default:
        calcDuration = 1;
        break;
    }
    const durationAmount = pricePerMonth * calcDuration;
    const discountPrice = durationAmount * 0.1;
    const finalPrice = durationAmount - discountPrice;
    return finalPrice;
  };
  // Pricing table for each course + duration
  const pricingData = {
    JAMB: {
      Monthly: 5000,
      Quarterly: autoCalcCoursePrice(5000, "quarterly"),
      HalfYear: autoCalcCoursePrice(5000, "HalfYear"),
      Annually: autoCalcCoursePrice(5000, "Annually"),
    },
    WAEC: {
      Monthly: 8000,
      Quarterly: autoCalcCoursePrice(8000, "quarterly"),
      HalfYear: autoCalcCoursePrice(8000, "HalfYear"),
      Annually: autoCalcCoursePrice(8000, "Annually"),
    },
    NECO: {
      Monthly: 8000,
      Quarterly: autoCalcCoursePrice(8000, "quarterly"),
      HalfYear: autoCalcCoursePrice(8000, "HalfYear"),
      Annually: autoCalcCoursePrice(8000, "Annually"),
    },
    GCE: {
      Monthly: 8000,
      Quarterly: autoCalcCoursePrice(8000, "quarterly"),
      HalfYear: autoCalcCoursePrice(8000, "HalfYear"),
      Annually: autoCalcCoursePrice(8000, "Annually"),
    },
  };

  // State to store duration & amount per course
  const [courseDurations, setCourseDurations] = useState([]);

  // state to store the error message for the continue button
  const [nextPageErr, setNextPageErr] = useState(false);
  // Paystack payment section state
  const [isPayment, setIsPayment] = useState(false);

  // Initialize state from selectedCourses
  useEffect(() => {
    const initData = selectedCourses.map((course) => ({
      courseName: course,
      duration: "",
      amount: 0,
    }));
    setCourseDurations(initData);
  }, [selectedCourses]);

  // Handle selecting a duration
  const handleDurationChange = (courseName, duration) => {
    setCourseDurations((prev) =>
      prev.map((item) =>
        item.courseName === courseName
          ? {
              ...item,
              duration,
              amount: duration ? pricingData[courseName][duration] : 0,
            }
          : item
      )
    );
  };

  // Calculate total
  const totalAmount = courseDurations.reduce(
    (sum, course) => sum + course.amount,
    0
  );

  // Paystack configuration
  const publicKey = "pk_test_baecdbe89b4c293f6a4564d49843b1fcd8c937f9";
  const payWithPaystack = () => {
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: publicKey, // Replace with your public key
      email: authenticatedUser.email,
      name: authenticatedUser.firstName,
      amount: totalAmount * 100, // Convert to kobo
      currency: "NGN", // Default is NGN
      onSuccess: async (tranx) => {
        console.log("Payment successful. Reference:" + tranx.reference);
        // Remove the student previous info from local storage
        try {
          const res = await updateStudentDepartment(
            authenticatedUser.id,
            department
          );
          // Update the user in local storage and context
          localStorage.removeItem("userInfo");
          localStorage.setItem("userInfo", JSON.stringify(res.data.student));
          setAuthenticatedUser((prev) => ({ ...prev, department: department }));
          console.log(res.data.student);
          // // Move to success page
          setState((prev) => ({
            ...prev,
            isTrainingDuration: false,
            isPayment: true,
          }));
        } catch (error) {
          console.log(error);
        }
      },
      onCancel: () => {
        alert("Transaction was not completed");
        setState((prev) => ({
          ...prev,
          isTrainingDuration: false,
        }));
        setIsPayment(false);
      },
    });
  };

  // Handle continue button click
  const handleContinue = () => {
    // Check if all have durations
    const allDurationsSelected = courseDurations.every(
      (course) => course.duration !== ""
    );
    if (!allDurationsSelected) return setNextPageErr(true);
    setNextPageErr(false);
    setSelectedCourses(courseDurations);
    setIsPayment(true);
    payWithPaystack();
  };

  return (
    !isPayment && (
      <>
        <GoBack onClick={handleBackBtn} />
        <div className="flex flex-col items-center justify-center m-4">
          <div className="text-center font-medium">
            <h2 className="text-2xl font-bold mb-8">Training Duration</h2>
            <div className="max-w-[510px] w-full px-8 py-5 rounded-lg shadow-lg bg-[#FBFAFA]">
              <p className="text-sm">
                Select your preferred training duration for your examination.
              </p>

              <div className="mt-6">
                {/* Header Row */}
                <div className="w-full bg-primary p-2.5 text-white text-sm font-semibold flex justify-between items-center rounded-t-lg">
                  <span className="flex-1">Examination</span>
                  <span className="flex-1">Duration</span>
                  <span className="flex-1">Amount</span>
                </div>

                {/* Courses */}
                {courseDurations.map((course, i) => (
                  <div
                    key={i}
                    className="w-full p-2.5 flex justify-between items-center"
                  >
                    <div className="flex-1 py-2 text-center text-sm text-mainBlack">
                      {course.courseName}
                    </div>

                    <div className="bg-[#D1D5DB] flex-1 pr-2 rounded-sm text-center text-mainBlack text-xs">
                      <select
                        value={course.duration}
                        onChange={(e) =>
                          handleDurationChange(
                            course.courseName,
                            e.target.value
                          )
                        }
                        className="p-2.5"
                      >
                        <option value="">Select</option>

                        {Object.keys(pricingData[course.courseName]).map(
                          (duration, idx) => (
                            <option key={idx} value={duration}>
                              {duration}
                            </option>
                          )
                        )}
                      </select>
                    </div>

                    <div className="flex-1 py-2 text-center text-sm text-mainBlack">
                      ₦{course.amount.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Button */}
              <button
                onClick={handleContinue}
                className="mt-6 w-full py-3 px-5 rounded-lg text-sm text-white bg-gradient-to-r from-[#09314F] to-[#E83831]"
              >
                Continue = ₦{totalAmount.toLocaleString()}
              </button>
              {nextPageErr && (
                <span className="text-red-500 text-[10px] mt-4 block">
                  Please select a duration for each examination
                </span>
              )}
            </div>
          </div>
        </div>
      </>
    )
  );
};
export default TrainingDuration;
