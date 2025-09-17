import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import GoBack from "./GoBackBtn";
import { useSubjects } from "../../Hooks/useSubjects";

// Subject limits for each exam
const examConfigs = {
  jamb: 4,
  waec: 9,
  neco: 9,
  gce: 9,
};

const SelectSubject = ({
  handleBackBtn,
  setState,
  department,
  selectedCourses,
}) => {
  const [exams, setExams] = useState([]);
  const [showSubjectModal, setShowSubjectModal] = useState(null);
  const [nextPageErr, setNextPageErr] = useState(false);
  // Initialize only the exams the user picked
  useEffect(() => {
    const initialExams = selectedCourses.map((exam) => ({
      id: exam.id,
      name: exam.slug,
      max: examConfigs[exam.slug],
      selected: [],
    }));
    setExams(initialExams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCourses]);

  // Continue button
  const handleNextPage = () => {
    const allValid = exams.every((exam) => {
      // Special case for WAEC, NECO, GCE minimum of 8 subjects and maximum of 9
      if (exam.name === "waec" || exam.name === "neco" || exam.name === "gce") {
        return exam.selected.length >= 8 && exam.selected.length <= 9;
      } else {
        return exam.selected.length === exam.max;
      }
    });
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
      <div className="flex flex-col items-center justify-center m-4">
        <div className="text-center font-medium">
          <h2 className="text-2xl font-bold mb-8">Select Subjects</h2>
          <div className="max-w-[510px] w-full px-8 py-5 rounded-lg shadow-lg bg-[#FBFAFA]">
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
                  className="w-full p-2.5 flex justify-between items-center mt-3"
                >
                  <div className="uppercase flex-1 py-2 text-center text-sm text-mainBlack">
                    {exam.name}
                  </div>
                  <div className="relative flex-1">
                    <button
                      onClick={() =>
                        setShowSubjectModal(
                          showSubjectModal === exam.name ? null : exam.name
                        )
                      }
                      className="w-full flex items-center justify-between px-4 py-2.5 rounded-sm text-center text-mainBlack bg-[#E336290D]"
                    >
                      <span className="text-xs">Select</span>
                      <Icon
                        icon="simple-line-icons:arrow-down"
                        width="12"
                        height="12"
                      />
                    </button>
                    <SubjectModal
                      exam={exam}
                      setExams={setExams}
                      showSubjectModal={showSubjectModal}
                      department={department}
                    />
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
export default SelectSubject;

// Subject modal
const SubjectModal = ({ exam, setExams, showSubjectModal, department }) => {
  const { data } = useSubjects();

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
  return (
    <ul
      className={`${
        showSubjectModal === exam.name ? "block" : "hidden"
      }  z-50 absolute bottom-0 translate-y-full left-0 w-full h-full bg-[#F9E7E6] rounded-b-md min-h-[170px] overflow-hidden`}
    >
      <PerfectScrollbar className="w-full h-full space-y-0.5 p-2 ">
        {data?.[0]?.map((subject, i) => {
          if (
            subject.departments.includes(department) &&
            subject.courses_ids.includes(exam.id)
          ) {
            const isSelected = exam.selected.includes(subject.name);
            return (
              <li key={i}>
                <button
                  className={`${
                    isSelected
                      ? "bg-lightGreen text-white font-semibold shadow-lg rounded-md"
                      : " text-mainGrey hover:bg-[#E336290D] hover:text-mainBlack"
                  } p-1.5 text-xs w-full`}
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
};
