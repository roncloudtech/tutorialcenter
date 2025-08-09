import { Icon } from "@iconify/react/dist/iconify.js";
import Layout2 from "../Components/Layout2";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function TrainingSelection() {
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
  return (
    <Layout2
      bgImage={
        "https://s3-alpha-sig.figma.com/img/7d38/19bf/89f69f01fb13533d24809a0b59801113?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ym692ngM5DbVrpDBFBkuCGza0Q0Z2MYCXbEibV9sGqegnWMr5~E7BYtx8X7UkjlwjUW5k1dQjjXMugDmdvW~LtXLA-l3YOgYGM1FyWpVscPaIG6Qt0EhJmWGlWjH7uXKGpuTHGfVdzMfHJWDMP54ywkxHdGCjByUhKZ9kIbXSlzkHwEwE~sFKO-48eZ870~8LzgvaBVyd4WhlpaxfJ6CmIixHo6ERHY5F6BcrLLUuwvRaJRcNmECz03KL5DJyYgZkd1u02UrsBWpgSXnRspPSe0O6kXEzl9v0d1jflUJ1GNspUocAgv-ogBajpMpiU9v4KXq1EWGCIo9v9DT2BjaZA__"
      }
    >
      {isDepartment ? (
        <SelectDepartment handleBackBtn={handleBackBtn} setState={setState} />
      ) : isSubject ? (
        <SelectSubject handleBackBtn={handleBackBtn} setState={setState} />
      ) : isTrainingDuration ? (
        <TrainingDuration handleBackBtn={handleBackBtn} setState={setState} />
      ) : isPayment ? (
        <PaymentSection handleBackBtn={handleBackBtn} setState={setState} />
      ) : (
        <SelectTraining setState={setState} handleBackBtn={handleBackBtn} />
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
const SelectTraining = ({ setState }) => {
  const courseSequences = ["WAEC", "NECO", "NECO"];
  const [courseDisplay, setCourseDisplay] = useState(["JAMB"]);
  const [nextCourseIndex, setNextCourseIndex] = useState(0);
  const addAnotherCourse = () => {
    if (nextCourseIndex < courseSequences.length) {
      // get the next the course from courseSequence
      const newCourse = courseSequences[nextCourseIndex];
      setCourseDisplay((prev) => [...prev, newCourse]);
      setNextCourseIndex((prev) => prev + 1);
    }
    return;
  };
  // Disable or remove the add another button
  const isButtonDisabled = nextCourseIndex >= courseSequences.length;

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-4">
        <div className="text-center font-medium">
          <h2 className="text-2xl font-bold mb-4">Select Training</h2>
          <div className="w-[448px] max-w-full bg-[#FBFAFA] shadow-lg p-6 rounded-lg">
            <p className="text-sm mb-6">
              Select the examinations you’re about to write, you have the option
              of selection more than 1 examination.
            </p>
            {courseDisplay.map((items, i) => (
              <div
                key={i}
                className="flex justify-between py-3 px-5 bg-[#E336290D] rounded-lg mb-5"
              >
                <span className="text-sm">{items}</span>
              </div>
            ))}
            {!isButtonDisabled && (
              <button
                onClick={addAnotherCourse}
                className="w-full text-sm flex items-center justify-between py-3 px-5 ring-1 rounded-lg ring-mainBlue"
              >
                <span>Add Another</span>
                <Icon icon="uil:plus" width="24" height="24" />
              </button>
            )}
            <button
              onClick={() =>
                setState((prev) => ({
                  ...prev,
                  isDepartment: true,
                  isSubject: false,
                }))
              }
              className="mt-6 w-full py-3 px-5 rounded-lg text-sm text-white bg-gradient-to-r from-[#09314F] to-[#E83831]"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// The select department section component
// This component allows the user to select a department for their examination
const SelectDepartment = ({ setState, handleBackBtn }) => {
  const courses = [
    {
      courseName: "JAMB",
      departments: ["Select Department", "Science", "Commercial", "Arts"],
    },
    {
      courseName: "WAEC",
      departments: ["Select Department", "Science", "Commercial", "Arts"],
    },
    {
      courseName: "NECO",
      departments: ["Select Department", "Science", "Commercial", "Arts"],
    },
    {
      courseName: "GCE",
      departments: ["Select Department", "Science", "Commercial", "Arts"],
    },
  ];
  return (
    <>
      <GoBack onClick={handleBackBtn} />
      <div className="flex flex-col items-center justify-center mt-4">
        <div className="text-center font-medium">
          <h2 className="text-2xl font-bold mb-8">Select Department</h2>
          <div className="w-[448px] max-w-full">
            <div className="w-full bg-primary p-2.5 text-white text-sm font-semibold flex justify-between items-center rounded-t-lg">
              <span>Examination</span>
              <span>Department</span>
            </div>
            {courses.map((items, i) => (
              <div
                key={i}
                className="w-full p-2.5 flex justify-between items-center"
              >
                <div className="py-2 text-center text-sm text-mainBlack">
                  {items.courseName}
                </div>
                <select className="p-2.5 rounded-sm text-center text-mainBlack text-xs bg-[#E336290D]">
                  {items.departments.map((lists, i) => (
                    <option key={i} value={lists}>
                      {lists}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            <button
              onClick={() =>
                setState((prev) => ({
                  ...prev,
                  isDepartment: false,
                  isSubject: true,
                }))
              }
              className="mt-6 w-full py-3 px-5 rounded-lg text-sm text-white bg-gradient-to-r from-[#09314F] to-[#E83831]"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// The select subject section component
// This component allows the user to select subjects for their examination
const SelectSubject = ({ handleBackBtn, setState }) => {
  const subjectsInfo = [
    {
      courseName: "JAMB",
      subjects: [
        "Select subjects",
        "English",
        "Mathematics",
        "Commerce",
        "Economics",
      ],
      amount: "4 / 4",
    },
    {
      courseName: "WAEC",
      subjects: [
        "Select subjects",
        "English",
        "Mathematics",
        "Commerce",
        "Economics",
      ],
      amount: "4 / 8-9",
    },
    {
      courseName: "NECO",
      subjects: [
        "Select subjects",
        "English",
        "Mathematics",
        "Commerce",
        "Economics",
      ],
      amount: "0 / 8-9",
    },
    {
      courseName: "GCE",
      subjects: [
        "Select subjects",
        "English",
        "Mathematics",
        "Commerce",
        "Economics",
      ],
      amount: "0 / 8-9",
    },
  ];

  return (
    <>
      <GoBack onClick={handleBackBtn} />
      <div className="flex flex-col items-center justify-center w-full mt-4">
        <div className="text-center font-medium">
          <h2 className="text-2xl font-bold mb-8">Select Subjects</h2>
          <div className="w-[510px] max-w-full px-8 py-5 rounded-lg shadow-lg bg-[#FBFAFA]">
            <p className="text-sm">
              Select your preferred subjects for your examination.
            </p>
            <div className="mt-6">
              <div className="w-full bg-primary p-2.5 text-white text-sm font-semibold flex justify-between items-center rounded-t-lg">
                <span className="flex-1">Examination</span>
                <span className="flex-1">Subjects</span>
                <span className="flex-1">Numbers</span>
              </div>
              {subjectsInfo.map((items, i) => (
                <div
                  key={i}
                  className="w-full p-2.5 flex justify-between items-center"
                >
                  <div className="flex-1 py-2 text-center text-sm text-mainBlack">
                    {items.courseName}
                  </div>
                  <select className="flex-1 p-2.5 rounded-sm text-center text-mainBlack text-xs bg-[#E336290D]">
                    {items.subjects.map((lists, i) => (
                      <option key={i} value={lists}>
                        {lists}
                      </option>
                    ))}
                  </select>
                  <div className="flex-1 py-2 text-center text-sm text-mainBlack">
                    {items.amount}
                  </div>
                </div>
              ))}
            </div>
            {/* button to handle the state change and move to the next step */}
            <button
              onClick={() =>
                setState((prev) => ({
                  ...prev,
                  isDepartment: false,
                  isSubject: false,
                  isTrainingDuration: true,
                }))
              }
              className="mt-6 w-full py-3 px-5 rounded-lg text-sm text-white bg-gradient-to-r from-[#09314F] to-[#E83831]"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// The training duration section component
// This component allows the user to select the duration for their training
const TrainingDuration = ({ handleBackBtn, setState }) => {
  const trainingInfo = [
    {
      courseName: "JAMB",
      duration: ["Select", "Daily", "Monthly", "Quarterly", "Annually"],
      amount: "₦60,00",
    },
    {
      courseName: "WAEC",
      duration: ["Select", "Daily", "Monthly", "Quarterly", "Annually"],
      amount: "₦2,000",
    },
    {
      courseName: "NECO",
      duration: ["Select", "Daily", "Monthly", "Quarterly", "Annually"],
      amount: "₦16,000",
    },
    {
      courseName: "GCE",
      duration: ["Select", "Daily", "Monthly", "Quarterly", "Annually"],
      amount: "₦25,000",
    },
  ];
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
              <div className="w-full bg-primary p-2.5 text-white text-sm font-semibold flex justify-between items-center rounded-t-lg">
                <span className="flex-1">Examination</span>
                <span className="flex-1">Duration</span>
                <span className="flex-1">Amount</span>
              </div>
              {trainingInfo.map((items, i) => (
                <div
                  key={i}
                  className="w-full p-2.5 flex justify-between items-center"
                >
                  <div className="flex-1 py-2 text-center text-sm text-mainBlack">
                    {items.courseName}
                  </div>
                  <select className="flex-1 p-2.5 rounded-sm text-center text-mainBlack text-xs bg-[#E336290D]">
                    {items.duration.map((lists, i) => (
                      <option key={i} value={lists}>
                        {lists}
                      </option>
                    ))}
                  </select>
                  <div className="flex-1 py-2 text-center text-sm text-mainBlack">
                    {items.amount}
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() =>
                setState((prev) => ({
                  ...prev,
                  isTrainingDuration: false,
                  isPayment: true,
                }))
              }
              className="mt-6 w-full py-3 px-5 rounded-lg text-sm text-white bg-gradient-to-r from-[#09314F] to-[#E83831]"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// The payment section component
// This component displays the payment success message and options
const PaymentSection = () => {
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
            <span className="text-sm text-ascent block text-center">
              JAMB - Daily
            </span>
            <span className="text-sm text-ascent block text-center">
              WAEC - Monthly
            </span>
          </div>
          <Link className="bg-gradient-to-r from-[#09314F] to-[#E83831] text-white w-full text-center p-3 rounded-lg mt-9">
            Go To Dashboard
          </Link>
        </div>
      </div>
    </>
  );
};
