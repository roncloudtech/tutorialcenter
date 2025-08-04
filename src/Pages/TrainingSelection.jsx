import { Icon } from "@iconify/react/dist/iconify.js";
import Layout2 from "../Components/Layout2";
import { useState } from "react";

export default function TrainingSelection() {
  const [isDepartment, setIsDepartment] = useState(false);
  const [isSubject, setIsSubject] = useState(false);
  const [isTrainingDuration, setIsTrainingDuration] = useState(false);
  const handleBackBtn = () => {
    setIsDepartment(false);
    setIsSubject(false);
    setIsTrainingDuration(false);
  };
  return (
    <>
      {isDepartment ? (
        <SelectDepartment
          setIsDepartment={setIsDepartment}
          setIsSubject={setIsSubject}
          handleBackBtn={handleBackBtn}
        />
      ) : isSubject ? (
        <SelectSubject
          handleBackBtn={handleBackBtn}
          setIsDepartment={setIsDepartment}
          setIsSubject={setIsSubject}
          setIsTrainingDuration={setIsTrainingDuration}
        />
      ) : isTrainingDuration ? (
        <TrainingDuration handleBackBtn={handleBackBtn} />
      ) : (
        <SelectTraining
          handleBackBtn={handleBackBtn}
          setIsDepartment={setIsDepartment}
        />
      )}
    </>
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
const SelectTraining = ({ setIsDepartment, handleBackBtn }) => {
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
    <Layout2
      bgImage={
        "https://s3-alpha-sig.figma.com/img/7d38/19bf/89f69f01fb13533d24809a0b59801113?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ym692ngM5DbVrpDBFBkuCGza0Q0Z2MYCXbEibV9sGqegnWMr5~E7BYtx8X7UkjlwjUW5k1dQjjXMugDmdvW~LtXLA-l3YOgYGM1FyWpVscPaIG6Qt0EhJmWGlWjH7uXKGpuTHGfVdzMfHJWDMP54ywkxHdGCjByUhKZ9kIbXSlzkHwEwE~sFKO-48eZ870~8LzgvaBVyd4WhlpaxfJ6CmIixHo6ERHY5F6BcrLLUuwvRaJRcNmECz03KL5DJyYgZkd1u02UrsBWpgSXnRspPSe0O6kXEzl9v0d1jflUJ1GNspUocAgv-ogBajpMpiU9v4KXq1EWGCIo9v9DT2BjaZA__"
      }
    >
      <GoBack onClick={handleBackBtn} />
      <div className="flex flex-col items-center justify-center h-full">
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
              onClick={() => setIsDepartment(true)}
              className="mt-6 w-full py-3 px-5 rounded-lg text-sm text-white bg-gradient-to-r from-[#09314F] to-[#E83831]"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </Layout2>
  );
};

const SelectDepartment = ({ setIsDepartment, setIsSubject }) => {
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
  const handleSubject = () => {
    setIsDepartment(false);
    setIsSubject(true);
  };
  return (
    <Layout2
      bgImage={
        "https://s3-alpha-sig.figma.com/img/7d38/19bf/89f69f01fb13533d24809a0b59801113?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ym692ngM5DbVrpDBFBkuCGza0Q0Z2MYCXbEibV9sGqegnWMr5~E7BYtx8X7UkjlwjUW5k1dQjjXMugDmdvW~LtXLA-l3YOgYGM1FyWpVscPaIG6Qt0EhJmWGlWjH7uXKGpuTHGfVdzMfHJWDMP54ywkxHdGCjByUhKZ9kIbXSlzkHwEwE~sFKO-48eZ870~8LzgvaBVyd4WhlpaxfJ6CmIixHo6ERHY5F6BcrLLUuwvRaJRcNmECz03KL5DJyYgZkd1u02UrsBWpgSXnRspPSe0O6kXEzl9v0d1jflUJ1GNspUocAgv-ogBajpMpiU9v4KXq1EWGCIo9v9DT2BjaZA__"
      }
    >
      <GoBack onClick={() => setIsDepartment(false)} />
      <div className="flex flex-col items-center justify-center">
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
              onClick={handleSubject}
              className="mt-6 w-full py-3 px-5 rounded-lg text-sm text-white bg-gradient-to-r from-[#09314F] to-[#E83831]"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </Layout2>
  );
};

const SelectSubject = ({
  setIsDepartment,
  setIsSubject,
  setIsTrainingDuration,
  handleBackBtn,
}) => {
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
  const handleTraining = () => {
    setIsDepartment(false);
    setIsSubject(false);
    setIsTrainingDuration(true);
  };
  return (
    <Layout2
      bgImage={
        "https://s3-alpha-sig.figma.com/img/7d38/19bf/89f69f01fb13533d24809a0b59801113?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ym692ngM5DbVrpDBFBkuCGza0Q0Z2MYCXbEibV9sGqegnWMr5~E7BYtx8X7UkjlwjUW5k1dQjjXMugDmdvW~LtXLA-l3YOgYGM1FyWpVscPaIG6Qt0EhJmWGlWjH7uXKGpuTHGfVdzMfHJWDMP54ywkxHdGCjByUhKZ9kIbXSlzkHwEwE~sFKO-48eZ870~8LzgvaBVyd4WhlpaxfJ6CmIixHo6ERHY5F6BcrLLUuwvRaJRcNmECz03KL5DJyYgZkd1u02UrsBWpgSXnRspPSe0O6kXEzl9v0d1jflUJ1GNspUocAgv-ogBajpMpiU9v4KXq1EWGCIo9v9DT2BjaZA__"
      }
    >
      <GoBack onClick={handleBackBtn} />
      <div className="flex flex-col items-center justify-center w-full">
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
            <button
              onClick={handleTraining}
              className="mt-6 w-full py-3 px-5 rounded-lg text-sm text-white bg-gradient-to-r from-[#09314F] to-[#E83831]"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </Layout2>
  );
};

const TrainingDuration = ({ setIsDepartment, handleBackBtn }) => {
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
    <Layout2
      bgImage={
        "https://s3-alpha-sig.figma.com/img/7d38/19bf/89f69f01fb13533d24809a0b59801113?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ym692ngM5DbVrpDBFBkuCGza0Q0Z2MYCXbEibV9sGqegnWMr5~E7BYtx8X7UkjlwjUW5k1dQjjXMugDmdvW~LtXLA-l3YOgYGM1FyWpVscPaIG6Qt0EhJmWGlWjH7uXKGpuTHGfVdzMfHJWDMP54ywkxHdGCjByUhKZ9kIbXSlzkHwEwE~sFKO-48eZ870~8LzgvaBVyd4WhlpaxfJ6CmIixHo6ERHY5F6BcrLLUuwvRaJRcNmECz03KL5DJyYgZkd1u02UrsBWpgSXnRspPSe0O6kXEzl9v0d1jflUJ1GNspUocAgv-ogBajpMpiU9v4KXq1EWGCIo9v9DT2BjaZA__"
      }
    >
      <GoBack onClick={handleBackBtn} />
      <div className="flex flex-col items-center justify-center">
        <div className="text-center font-medium">
          <h2 className="text-2xl font-bold mb-8">Training Duration</h2>
          <div className="w-[510px] max-w-full px-8 py-5 rounded-lg shadow-lg bg-[#FBFAFA]">
            <p className="text-sm">
              Select your preferred training duration for your examination.
            </p>
            <div className="mt-6">
              <div className="w-full bg-primary p-2.5 text-white text-sm font-semibold flex justify-between items-center rounded-t-lg">
                <span className="flex-1">Examination</span>
                <span className="flex-1">Subjects</span>
                <span className="flex-1">Numbers</span>
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
            <button className="mt-6 w-full py-3 px-5 rounded-lg text-sm text-white bg-gradient-to-r from-[#09314F] to-[#E83831]">
              Continue
            </button>
          </div>
        </div>
      </div>
    </Layout2>
  );
};
