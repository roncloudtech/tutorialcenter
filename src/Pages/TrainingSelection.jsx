import { Icon } from "@iconify/react/dist/iconify.js";
import Layout2 from "../Components/Layout2";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import PaystackPop from "@paystack/inline-js";

export default function TrainingSelection() {
  // state flow for the training selection
  // state flow for the training selection
  const [state, setState] = useState({
    isDepartment: false,
    isSubject: false,
    isTrainingDuration: false,
    isPayment: false,
  });
  const { isDepartment, isSubject, isTrainingDuration, isPayment } = state;
  const handleBackBtn = () => {
    setState((prev) => ({
      ...prev,
      isDepartment: false,
      isSubject: false,
      isTrainingDuration: false,
      isPayment: false,
    }));
  };
  // The selected course info from the SelectedTraining component
  const [selectedCourses, setSelectedCourses] = useState([]);
  // The selected department info from the SelectDepartment component
  const [selectedDepartment, setSelectedDepartment] = useState("");
  return (
    <Layout2
      bgImage={
        "https://s3-alpha-sig.figma.com/img/7d38/19bf/89f69f01fb13533d24809a0b59801113?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ym692ngM5DbVrpDBFBkuCGza0Q0Z2MYCXbEibV9sGqegnWMr5~E7BYtx8X7UkjlwjUW5k1dQjjXMugDmdvW~LtXLA-l3YOgYGM1FyWpVscPaIG6Qt0EhJmWGlWjH7uXKGpuTHGfVdzMfHJWDMP54ywkxHdGCjByUhKZ9kIbXSlzkHwEwE~sFKO-48eZ870~8LzgvaBVyd4WhlpaxfJ6CmIixHo6ERHY5F6BcrLLUuwvRaJRcNmECz03KL5DJyYgZkd1u02UrsBWpgSXnRspPSe0O6kXEzl9v0d1jflUJ1GNspUocAgv-ogBajpMpiU9v4KXq1EWGCIo9v9DT2BjaZA__"
      }
    >
      {isDepartment ? (
        <SelectDepartment
          setSelectedDepartment={setSelectedDepartment}
          handleBackBtn={handleBackBtn}
          setState={setState}
        />
      ) : isSubject ? (
        <SelectSubject
          selectedCourses={selectedCourses}
          handleBackBtn={handleBackBtn}
          setState={setState}
          department={selectedDepartment}
        />
      ) : isTrainingDuration ? (
        <TrainingDuration
          selectedCourses={selectedCourses}
          setSelectedCourses={setSelectedCourses}
          handleBackBtn={handleBackBtn}
          setState={setState}
        />
      ) : isPayment ? (
        <PaymentSection
          selectedCourses={selectedCourses}
          handleBackBtn={handleBackBtn}
          setState={setState}
        />
      ) : (
        <SelectTraining
          setSelectedCourses={setSelectedCourses}
          setState={setState}
        />
      )}
    </Layout2>
  );
}
const GoBack = ({ onClick }) => {
  return (
    <button onClick={onClick} className="absolute top-[7%] left-[9%] block">
      <Icon
        icon="iconamoon:arrow-left-2-light"
        width="30"
        height="30"
        className=""
      />
    </button>
  );
};

// The select training section component
const SelectTraining = ({ setState, setSelectedCourses }) => {
  const [courses, setCourses] = useState([
    {
      name: "JAMB",
      selected: false,
    },
    {
      name: "WAEC",
      selected: false,
    },
    {
      name: "NECO",
      selected: false,
    },
    {
      name: "GCE",
      selected: false,
    },
  ]);
  const handleSelectedCourse = (index) => {
    setCourses((prev) =>
      prev.map((item, i) => {
        if (index === i) {
          return { ...item, selected: !item.selected };
        }
        return item;
      })
    );
  };
  const [nextPageErr, setNextPageErr] = useState(false);
  const selectedCourses = courses.filter((item) => item.selected);
  const handleNextPage = () => {
    if (selectedCourses.length + 1 <= 1) {
      return setNextPageErr(true);
    }
    setNextPageErr(false);
    setSelectedCourses(selectedCourses.map((item) => item.name));
    setState((prev) => ({
      ...prev,
      isDepartment: true,
      isSubject: false,
    }));
  };
  return (
    <>
      <div className="flex f lex-col items-center justify-center mt-4">
        <div className="text-center font-medium">
          <h2 className="text-2xl font-bold mb-4">Select Training</h2>
          <div className="w-[448px] max-w-full bg-[#FBFAFA] shadow-lg p-6 rounded-lg">
            <p className="text-sm mb-6">
              Select the examinations you’re about to write, you have the option
              of selecting more than 1 examination.
            </p>
            <div className="grid grid-cols-2 items-center gap-3 flex-wrap">
              {courses.map((items, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectedCourse(i)}
                  className={`${
                    items.selected
                      ? "text-white bg-green-600 font-semibold"
                      : "bg-[#E336290D]"
                  } flex items-center text-sm text-center justify-center py-3 px-5  rounded-lg w-full`}
                >
                  {items.name}
                </button>
              ))}
            </div>

            <button
              onClick={handleNextPage}
              className="mt-6 w-full py-3 px-5 rounded-lg text-sm text-white bg-gradient-to-r from-[#09314F] to-[#E83831]"
            >
              Continue
            </button>
            {nextPageErr && (
              <span className="text-red-500 text-[10px] mt-4 block">
                Please select at least one
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

// The select department section component
// This component allows the user to select a department for their examination
const SelectDepartment = ({
  setState,
  handleBackBtn,
  setSelectedDepartment,
}) => {
  const [department, setDepartment] = useState([
    {
      name: "Science",
      selected: false,
    },
    {
      name: "Arts",
      selected: false,
    },
    {
      name: "Commercial",
      selected: false,
    },
  ]);

  const [nextPageErr, setNextPageErr] = useState(false);
  // Handle the selection of a department
  // This function toggles the selected state of the clicked department and deselects others
  const handleSelectedDepartment = (index) => {
    setDepartment((prev) =>
      prev.map((item, i) => {
        if (index === i) {
          // Toggle the selected state of the clicked department
          return { ...item, selected: !item.selected };
        } else {
          return { ...item, selected: false }; // Deselect other departments
        }
      })
    );
  };
  // Get the selected department name
  const selectedDepartment = department.find((item) => item.selected);
  const handleNextPage = () => {
    if (!selectedDepartment) return setNextPageErr(true);
    setNextPageErr(false);
    setSelectedDepartment(selectedDepartment.name);
    setState((prev) => ({
      ...prev,
      isDepartment: false,
      isSubject: true,
    }));
  };
  return (
    <>
      <GoBack onClick={handleBackBtn} />
      <div className="flex flex-col items-center justify-center mt-4">
        <div className="text-center font-medium">
          <h2 className="text-2xl font-bold mb-8">Select Department</h2>
          <div className="w-[448px] max-w-full bg-[#FBFAFA] shadow-lg p-8 rounded-lg mb-2">
            <p className="text-sm mb-7">
              Select a department to progress with your registration
            </p>
            <div className="w-full bg-primary p-2.5 text-white text-sm font-semibold flex justify-between items-center rounded-t-lg">
              <span>Examination</span>
              <span>Department</span>
            </div>
            <div className="mt-7 flex flex-col items-center gap-3">
              {department.map((items, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectedDepartment(i)}
                  className={`${
                    items.selected
                      ? "text-white bg-green-600 uppercase font-semibold"
                      : "bg-[#E336290D]"
                  } flex items-center text-sm text-center justify-center py-3 px-5  rounded-lg w-full uppercase`}
                >
                  {items.name}
                </button>
              ))}
            </div>
            <button
              onClick={handleNextPage}
              className="mt-6 w-full py-3 px-5 rounded-lg text-sm text-white bg-gradient-to-r from-[#09314F] to-[#E83831]"
            >
              Continue
            </button>
            {nextPageErr && (
              <span className="text-red-500 text-[10px] mt-4 block">
                Please select at least one
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const SelectSubject = ({
  handleBackBtn,
  setState,
  department,
  selectedCourses, // ["JAMB", "WAEC"]
}) => {
  // All available subjects
  const allSubjects = [
    { name: "English Language", department: ["Science", "Arts", "Commercial"] },
    { name: "Mathematics", department: ["Science", "Arts", "Commercial"] },
    { name: "Biology", department: ["Science", "Arts", "Commercial"] },
    { name: "I.C.T", department: ["Science", "Arts", "Commercial"] },
    { name: "Economics", department: ["Science", "Arts", "Commercial"] },
    { name: "Government", department: ["Science", "Arts", "Commercial"] },
    { name: "Commerce", department: ["Commercial"] },
    { name: "Financial Accounting", department: ["Commercial"] },
    { name: "Further Mathematics", department: ["Science"] },
    { name: "Physics", department: ["Science"] },
    { name: "Chemistry", department: ["Science"] },
    { name: "Geography", department: ["Science"] },
    { name: "Technical Drawing", department: ["Science"] },
    { name: "Literature in English", department: ["Arts"] },
    { name: "History", department: ["Arts"] },
    { name: "C.R.K", department: ["Arts"] },
    { name: "I.R.K", department: ["Arts"] },
  ];

  // Subject limits for each exam
  const examConfigs = {
    JAMB: 4,
    WAEC: 8,
    NECO: 8,
    GCE: 8,
  };

  const [exams, setExams] = useState([]);
  const [showSubjectModal, setShowSubjectModal] = useState(null);
  const [nextPageErr, setNextPageErr] = useState(false);

  // Initialize only the exams the user picked
  useEffect(() => {
    const initialExams = selectedCourses.map((examName) => ({
      name: examName,
      max: examConfigs[examName],
      selected: [],
    }));
    setExams(initialExams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCourses]);

  // Toggle subject for selected exam
  const toggleSubjectForExam = (examName, subjectName) => {
    setExams((prev) =>
      prev.map((exam) => {
        if (exam.name === examName) {
          const alreadySelected = exam.selected.includes(subjectName);
          let newSelected;

          if (alreadySelected) {
            newSelected = exam.selected.filter((s) => s !== subjectName);
          } else {
            if (exam.selected.length >= exam.max) return exam;
            newSelected = [...exam.selected, subjectName];
          }
          return { ...exam, selected: newSelected };
        }
        return exam;
      })
    );
  };

  // Subject modal
  const SubjectModal = ({ exam }) => (
    <ul
      className={`${
        showSubjectModal === exam.name ? "block" : "hidden"
      } bg-[#F9E7E6] rounded-b-md z-50 absolute bottom-0 translate-y-full left-0 w-full h-full min-h-[160px] overflow-hidden`}
    >
      <PerfectScrollbar
        options={{ suppressScrollX: true }}
        className="w-full space-y-0.5 p-2"
      >
        {allSubjects.map((subject, i) => {
          if (subject.department.includes(department)) {
            const isSelected = exam.selected.includes(subject.name);
            return (
              <li key={i}>
                <button
                  className={`${
                    isSelected
                      ? "bg-lightGreen text-white font-semibold shadow-lg rounded-md"
                      : " text-mainGrey hover:bg-[#E336290D] hover:text-mainBlack"
                  } p-1.5 text-xs w-full disabled:cursor-not-allowed`}
                  onClick={() => toggleSubjectForExam(exam.name, subject.name)}
                >
                  {subject.name}
                </button>
              </li>
            );
          }
          return null;
        })}
      </PerfectScrollbar>
    </ul>
  );

  // Continue button
  const handleNextPage = () => {
    const allValid = exams.every((exam) => exam.selected.length === exam.max);
    if (!allValid) return setNextPageErr(true);

    setNextPageErr(false);
    setState((prev) => ({
      ...prev,
      isSubject: false,
      isTrainingDuration: true,
    }));
  };

  return (
    <>
      <GoBack onClick={handleBackBtn} />
      <div className="flex flex-col items-center justify-center w-full my-5">
        <div className="text-center font-medium">
          <h2 className="text-2xl font-bold mb-8">Select Subjects</h2>
          <div className="w-[510px] max-w-full px-8 py-5 rounded-lg shadow-lg bg-[#FBFAFA]">
            <p className="text-sm">
              Select your preferred subjects for your examinations.
            </p>

            <div className="mt-6">
              <div className="w-full bg-primary p-2.5 text-white text-sm font-semibold flex justify-between items-center rounded-t-lg">
                <span className="flex-1">Examination</span>
                <span className="flex-1">Subjects</span>
                <span className="flex-1">Numbers</span>
              </div>

              {exams.map((exam, idx) => (
                <div
                  key={idx}
                  className="w-full p-2.5 flex justify-between items-center mt-4"
                >
                  <div className="flex-1 py-2 text-center text-sm text-mainBlack">
                    {exam.name}
                  </div>
                  <div className="relative flex-1">
                    <button
                      onClick={() =>
                        setShowSubjectModal(
                          showSubjectModal === exam.name ? null : exam.name
                        )
                      }
                      className="w-full flex items-center justify-between p-2.5 rounded-sm text-center text-mainBlack bg-[#E336290D]"
                    >
                      <span className="text-xs">Select</span>
                      <Icon
                        icon="simple-line-icons:arrow-down"
                        width="14"
                        height="14"
                      />
                    </button>
                    <SubjectModal exam={exam} />
                  </div>
                  <div className="flex-1 py-2 text-center text-sm text-mainBlack">
                    {exam.selected.length} / {exam.max}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleNextPage}
              className="mt-6 w-full py-3 px-5 rounded-lg text-sm text-white bg-gradient-to-r from-[#09314F] to-[#E83831]"
            >
              Continue
            </button>

            {nextPageErr && (
              <span className="text-red-500 text-[10px] mt-4 block">
                Please select the required number of subjects for each exam
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

// The training duration section component
// This component allows the user to select the duration for their training
const TrainingDuration = ({
  handleBackBtn,
  setState,
  selectedCourses,
  setSelectedCourses,
}) => {
  // Pricing table for each course + duration
  const pricingData = {
    JAMB: { Monthly: 2000, Quarterly: 6000, HalfYear: 15000, Annually: 50000 },
    WAEC: { Monthly: 3000, Quarterly: 8000, HalfYear: 20000, Annually: 70000 },
    NECO: { Monthly: 8900, Quarterly: 7000, HalfYear: 18000, Annually: 65000 },
    GCE: { Monthly: 6750, Quarterly: 7500, HalfYear: 19000, Annually: 68000 },
  };

  // State to store duration & amount per course
  const [courseDurations, setCourseDurations] = useState([]);

  // state to store the error message for the continue button
  const [nextPageErr, setNextPageErr] = useState(false);

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

  const publicKey = "pk_test_baecdbe89b4c293f6a4564d49843b1fcd8c937f9";
  const payWithPaystack = () => {
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: publicKey, // Replace with your public key
      email: "customer@email.com", // Customer email
      amount: totalAmount * 100, // Convert to kobo
      currency: "NGN", // Default is NGN
      onSuccess: () => {
        console.log("Payment successful. Reference:");
        // // Move to success page
        setState((prev) => ({
          ...prev,
          isTrainingDuration: false,
          isPayment: true,
        }));
      },
      onCancel: function () {
        alert("Transaction was not completed");
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
    setState((prev) => ({
      ...prev,
      isTrainingDuration: false,
    }));
    payWithPaystack();
  };

  return (
    <>
      <GoBack onClick={handleBackBtn} />
      <div className="flex flex-col items-center justify-center mt-4">
        <div className="text-center font-medium">
          <h2 className="text-2xl font-bold mb-8">Training Duration</h2>
          <div className="w-[510px] max-w-full px-8 py-5 rounded-lg shadow-lg bg-[#FBFAFA]">
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

                  <select
                    value={course.duration}
                    onChange={(e) =>
                      handleDurationChange(course.courseName, e.target.value)
                    }
                    className="flex-1 p-2.5 rounded-sm text-center text-mainBlack text-xs bg-[#D1D5DB]"
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
  );
};

// The payment section component
// This component displays the payment success message and options
const PaymentSection = ({ selectedCourses }) => {
  console.log("Selected Courses:", selectedCourses);
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="w-[510px] max-w-full px-8 py-5 rounded-lg shadow-lg bg-[#FBFAFA] flex flex-col items-center justify-center">
          <div className="w-[120px] h-[120px] bg-[#E336290D] rounded-full flex items-center justify-center">
            <div className="w-[80px] h-[80px] bg-mainBlue text-white rounded-full flex items-center justify-center">
              <Icon icon="mingcute:check-fill" width="45" height="45" />
            </div>
          </div>
          <h2 className="text-2xl text-mainBlue font-semibold mt-4">
            Payment Successful!
          </h2>
          <div className="mt-9 font-medium space-y-1">
            <p className="text-base text-mainBlue">You now have access for</p>
            {selectedCourses.map((items, i) => (
              <span key={i} className="text-sm text-ascent block text-center">
                {items.courseName} - {items.duration}
              </span>
            ))}
          </div>
          <Link className="bg-gradient-to-r from-[#09314F] to-[#E83831] text-white w-full text-center p-3 rounded-lg mt-9">
            Go To Dashboard
          </Link>
        </div>
      </div>
    </>
  );
};
