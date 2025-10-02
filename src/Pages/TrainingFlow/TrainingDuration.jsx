// The training duration section component
import { useEffect, useState } from "react";
import PaystackPop from "@paystack/inline-js";
import GoBack from "./GoBackBtn";
import { useSchoolContext } from "../../Context/SchoolContext";
import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

// This function updates the student's department both in the backend and in local storage
const handleStudentDeptUpdate = async (id, department) => {
  // Remove the student previous info from local storage
  try {
    const res = await axios.put(
      `${API_BASE_URL}/students/${id}`,
      { department },
      { withCredentials: true }
    );
    // Update the user in local storage
    localStorage.removeItem("userInfo");
    localStorage.setItem("userInfo", JSON.stringify(res.data.student));
    console.log(res.data.student);
  } catch (error) {
    console.log(error);
  }
};

// API call to payment registration for each course
const handlePaymentRegistration = async (studentId, tranx, courses) => {
  try {
    // Build an array of promises for each course payment registration
    const requests = courses.map((course) => {
      return axios.post(`${API_BASE_URL}/payments`, {
        student_id: studentId,
        course_id: course.courseId,
        course_name: course.courseName,
        payment_method: "paystack",
        payment_status: "completed",
        amount: course.amount,
        duration: course.duration,
        reference_number: tranx.reference,
      });
    });
    // Wait for all requests to complete
    const responses = await Promise.all(requests);
    responses.forEach((res, id) => {
      console.log(res.data + " " + `Payment${id + 1} success`);
    });
    console.log("All payments registered successfully");
  } catch (error) {
    console.log(error);
  }
};

// API call to Enroll all subjects the student enrolled for
const handleSubjectEnrollment = async (studentId, courses) => {
  try {
    // Build an array of Promises for each course the student picked
    const requests = courses.map((course) => {
      return axios.post(`${API_BASE_URL}/enrollments`, {
        student_id: studentId,
        course_id: course.courseId,
        end_date: course.duration,
        subjects: course.selectedSubjects,
      });
    });
    // Await all requests to complete
    const res = await Promise.all(requests);
    // Log all responses
    res.forEach((r) => {
      console.log(r.data);
    });
  } catch (error) {
    console.log(error);
  }
};

// Function to auto calculate course price based on duration with 10% discount for durations longer than a month
const autoCalcCoursePrice = (pricePerMonth, duration) => {
  let calcDuration;
  switch (duration) {
    case "quarterly":
      calcDuration = 3;
      break;
    case "half_year":
      calcDuration = 6;
      break;
    case "annually":
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

// Paystack configuration
const publicKey = "pk_test_baecdbe89b4c293f6a4564d49843b1fcd8c937f9";
const payWithPaystack = ({ email, amount, onSuccess, onCancel }) => {
  const paystack = new PaystackPop();
  paystack.newTransaction({
    key: publicKey,
    email,
    amount,
    currency: "NGN",
    onSuccess,
    onCancel,
  });
};
// This component allows the Student to select the duration for their training and calculates the total amount based on the selected courses and durations.
const TrainingDuration = ({
  handleBackBtn,
  setState,
  selectedCourses,
  setSelectedCourses,
  department,
}) => {
  // Get the authenticated user from context
  const { authenticatedUser, setAuthenticatedUser } = useSchoolContext();

  // Pricing table for each course + duration
  const pricingData = {
    jamb: {
      monthly: 5000,
      quarterly: autoCalcCoursePrice(5000, "quarterly"),
      half_year: autoCalcCoursePrice(5000, "half_year"),
      annually: autoCalcCoursePrice(5000, "annually"),
    },
    waec: {
      monthly: 8000,
      quarterly: autoCalcCoursePrice(8000, "quarterly"),
      half_year: autoCalcCoursePrice(8000, "half_year"),
      annually: autoCalcCoursePrice(8000, "annually"),
    },
    neco: {
      monthly: 8000,
      quarterly: autoCalcCoursePrice(8000, "quarterly"),
      half_year: autoCalcCoursePrice(8000, "half_year"),
      annually: autoCalcCoursePrice(8000, "annually"),
    },
    gce: {
      monthly: 8000,
      quarterly: autoCalcCoursePrice(8000, "quarterly"),
      half_year: autoCalcCoursePrice(8000, "half_year"),
      annually: autoCalcCoursePrice(8000, "annually"),
    },
  };

  // State to store duration & amount per course
  const [courseDurations, setCourseDurations] = useState([]);

  // state to store the error message for the continue button
  const [nextPageErr, setNextPageErr] = useState(false);

  // Initialize state from selectedCourses
  useEffect(() => {
    const initData = selectedCourses.map((course) => ({
      courseName: course.name,
      courseId: course.id,
      duration: "",
      amount: 0,
      selectedSubjects: course.selected,
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
  // Handle continue button click
  const handleContinue = () => {
    // Check if all have durations
    const allDurationsSelected = courseDurations.every(
      (course) => course.duration !== ""
    );
    if (!allDurationsSelected) return setNextPageErr(true);
    setNextPageErr(false);

    payWithPaystack({
      publicKey,
      email: authenticatedUser.email,
      amount: totalAmount * 100, // Convert to kobo
      onSuccess: (tranx) => {
        // Update the student's department in the backend and context
        setAuthenticatedUser((prev) => ({ ...prev, department: department }));
        handleStudentDeptUpdate(authenticatedUser.id, department);
        // Register each course payment in the backend
        handlePaymentRegistration(authenticatedUser.id, tranx, courseDurations);
        handleSubjectEnrollment(authenticatedUser.id, courseDurations);
        setSelectedCourses(courseDurations);
        // Move to success page
        setState((prev) => ({
          ...prev,
          isTrainingDuration: false,
          isPayment: true,
        }));
      },
      onCancel: () => {
        alert("Transaction was not completed");
      },
    });
  };

  return (
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
                  <div className="flex-1 py-2 text-center text-sm text-mainBlack uppercase">
                    {course.courseName}
                  </div>

                  <div className="bg-[#D1D5DB] flex-1 pr-2 rounded-sm text-center text-mainBlack text-xs">
                    <select
                      value={course.duration}
                      onChange={(e) =>
                        handleDurationChange(course.courseName, e.target.value)
                      }
                      className="p-2.5 capitalize"
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
                    ₦{course?.amount?.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            {/* Continue Button */}
            <button
              onClick={handleContinue}
              className="mt-6 w-full py-3 px-5 rounded-lg text-sm text-white bg-gradient-to-r from-[#09314F] to-[#E83831]"
            >
              Continue = ₦{totalAmount?.toLocaleString()}
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
  );
};
export default TrainingDuration;
