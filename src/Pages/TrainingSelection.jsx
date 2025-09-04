import Layout2 from "../Components/Layout2";
import { useState } from "react";

import SelectDepartment from "./TrainingFlow/SelectDepartment";
import SelectSubject from "./TrainingFlow/SelectSubject";
import TrainingDuration from "./TrainingFlow/TrainingDuration";
import SuccessPaymentSection from "./TrainingFlow/PaymentSucess";
import { Icon } from "@iconify/react/dist/iconify.js";

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
          department={selectedDepartment}
        />
      ) : isPayment ? (
        <SuccessPaymentSection
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
      <div className="flex flex-col items-center justify-center m-4">
        <div className="text-center font-medium">
          <h2 className="text-2xl font-bold mb-4">Select Training</h2>
          <div className="max-w-[448px] w-full bg-[#FBFAFA] shadow-lg p-6 rounded-lg">
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
                  } flex items-center text-sm text-start justify-between py-3 px-5  rounded-lg w-full`}
                >
                  {items.name}
                  {items.selected && (
                    <Icon icon="meteor-icons:check" width="24" height="24" />
                  )}
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
