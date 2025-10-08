import { useEffect, useState } from "react";
import DashboardLayout from "../../DashboardLayout";
import { Icon } from "@iconify/react/dist/iconify.js";
import Title from "../../Components/Title";
import Calculator from "../../Components/Calculator";
import TwoColumnLayout from "../../../Components/TwoColumnLayout";
import { useSelectedCourses } from "../../../Hooks/useSelectedCourses";

export default function Exampage() {
  // Fetch all courses and subjects the student enrolled in using custom hook
  const { data, isLoading } = useSelectedCourses();
  if (isLoading) {
    return (
      <div className="w-full  flex items-center justify-center text-center gap-2 dark:text-lightGrey">
        <Icon icon="line-md:loading-loop" width="35" height="35" />
        <span className="text-xs">Loading...</span>
      </div>
    );
  }
  return <ExamPageContainer data={data} />;
}

const ExamPageContainer = ({ data }) => {
  const [active, setActive] = useState(true);
  // First course is selected by default
  const [selectedCourse, setSelectedCourse] = useState(data.courses[0]);
  // First subject is selected by default
  const [selectedSubject, setSelectedSubject] = useState(
    selectedCourse.subjects[0].name
  );
  // UseEffect to synchronize with the selected course when it changes
  useEffect(() => {
    setSelectedSubject(selectedCourse.subjects[0].name);
  }, [selectedCourse]);
  return (
    <DashboardLayout>
      <TwoColumnLayout
        leftContent={
          <div className="item1 xl:px-4 p-2.5">
            {/* header */}
            <Title title={"exam practice"} />
            {active ? (
              // Exam Instructions
              <ExamInstruction
                setActive={setActive}
                selectedCourse={selectedCourse}
                setSelectedCourse={setSelectedCourse}
                selectedSubject={selectedSubject}
                setSelectedSubject={setSelectedSubject}
                data={data}
              />
            ) : (
              // ExamPractice
              <ExamPractice
                setActive={setActive}
                selectedCourse={selectedCourse}
                selectedSubject={selectedSubject}
              />
            )}
          </div>
        }
        rightContent={
          <div className="dark:bg-darkMode scroll bg-mainWhite shadow-custom-1 rounded-md p-2 m-0.5">
            <Calculator />
          </div>
        }
      />
    </DashboardLayout>
  );
};

const ExamPractice = ({ setActive, selectedCourse, selectedSubject }) => {
  return (
    <>
      <div className="Exam Practice dark:text-lightGrey">
        <div className="flex justify-between items-center mb-4 text-center">
          <button onClick={() => setActive(true)}>
            <Icon icon="iconamoon:arrow-left-2-light" width="35" height="35" />
          </button>
          <p className="text-sm font-semibold sm:block hidden">14:59</p>
          <div className="flex gap-3">
            <Icon
              icon="material-symbols:alarm-rounded"
              width="25"
              height="25"
            />
            <span className="text-sm font-semibold ">15mins</span>
          </div>
        </div>
        <div className="font-semibold flex justify-between items-center mb-5 dark:text-lightGrey text-mainBlack">
          <div className="flex flex-col justify-center">
            <p className="text-[8px] font-light">course</p>
            <h3 className="text-sm uppercase">{selectedCourse.name}</h3>
          </div>
          <h1 className="text-lg sm:block hidden">50 QUESTIONS</h1>
          <div className="flex flex-col justify-center">
            <p className="text-[8px] uppercase font-light">Subject</p>
            <h3 className="text-sm ">{selectedSubject}</h3>
          </div>
        </div>
        <div className="sm:px-6 sm:py-5 p-2.5 dark:text-lightGrey rounded-md bg-white text-mainBlack dark:bg-whiteFade mb-5">
          <div className="flex justify-between items-center mb-3  border-b-[1.1px]  border-solid border-black text-[16px] font-semibold uppercase">
            <p>Question 5</p>
            <div className="text-[16px] font-semibold gap-4 capitalize sm:flex hidden">
              <p>Answered: 5/30</p>
              <p>unanswered: 25/30</p>
            </div>
          </div>
          <div className="text-[16px] font-semibold capitalize sm:hidden flex items-center my-4 justify-between">
            <p>Answered: 5/30</p>
            <p>unanswered: 25/30</p>
          </div>
          <p className="text-[15px] dark:text-lightGrey mb-4">
            Students taking the exam can pre-select the duration for practice,
            but not beyond the default exam time. They can also pre-select and
            increase the number of questions beyond the default limit. For
            example, a student may choose to practice for 5 minutes with 5
            questions or attempt more questions within a shorter time frame,
            encouraging quick thinking and reading skills. The pass mark is set
            at 70, while a score of 85 and above is considered excellent.
          </p>
          <div className="grid grid-cols-2 gap-4 text-center text-mainBlack dark:text-lightGrey">
            <div className="sm:px-5 sm:py-3 py-2 bg-lightGrey dark:bg-whiteFade sm:text-xs text-[12px] rounded-md">
              <p>A. Thgsbfyhjfnajfnsaj</p>
            </div>
            <div className="sm:px-5 sm:py-3 px-1 py-2 bg-lightGrey dark:bg-whiteFade sm:text-xs text-[12px] rounded-md">
              <p>B. Thgsbfyhjfnajfnsaj</p>
            </div>
            <div className="sm:px-5 sm:py-3 px-1 py-2 bg-lightGrey dark:bg-whiteFade sm:text-xs text-[12px] rounded-md">
              <p>C. Thgsbfyhjfnajfnsaj</p>
            </div>
            <div className="sm:px-5 sm:py-3 px-1 py-2 bg-lightGrey dark:bg-whiteFade sm:text-xs text-[12px] rounded-md">
              <p>D. Thgsbfyhjfnajfnsaj</p>
            </div>
          </div>
        </div>
        {/* PAGINATE */}
        <div className="mb-5">
          <div className="flex justify-center items-center gap-3 mb-5">
            <Icon
              icon="iconamoon:arrow-left-2-light"
              width="24"
              height="24"
              className="rotate"
            />
            <div className="flex-1 flex justify-center items-center gap-5 text-xs">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button>7</button>
              <button>8</button>
              <button>9</button>
              <button>10</button>
              <button>11</button>
              <button>12</button>
              <button>13</button>
            </div>
            <Icon
              icon="iconamoon:arrow-left-2-light"
              width="24"
              height="24"
              className="rotate-180"
            />
          </div>
          <div className="flex gap-3">
            <button className="w-full bg-mainLightBlue text-mainBlue  font-semibold text-center text-xs py-2 rounded-md uppercase">
              previous
            </button>
            <button className="w-full bg-mainLightBlue text-mainBlue  font-semibold text-center text-xs py-2 rounded-md uppercase">
              next
            </button>
          </div>
        </div>
        <button className="w-full rounded-md shadow-custom-1 bg-mainBlue text-mainWhite dark:bg-darkMode py-2.5 uppercase text-xs font-semibold mb-3">
          submit
        </button>
      </div>
      <button
        to="/course-chat"
        className="sm:hidden bg-[#EAEBEC] rounded-lg shadow-custom-1 text-[10px] text-ascent fixed top-[calc(100vh-170px)] sm:right-8 right-3.5 z-[60] px-1 py-2 flex flex-col justify-center items-center "
      >
        {/* CHAT WITH US */}
        <div className="group relative mb-1 w-[35px] h-[35px] bg-mainGrey text-mainWhite rounded-lg flex justify-center items-center">
          <Icon icon="tabler:message-chatbot" width="20" height="20" />
        </div>
        <span>Calculator</span>
      </button>
    </>
  );
};

const ExamInstruction = ({
  setActive,
  selectedCourse,
  setSelectedCourse,
  selectedSubject,
  setSelectedSubject,
  data,
}) => {
  // Handle subject change
  const handleSubjectChange = (e) => {
    const value = e.target.value;
    setSelectedSubject(value);
  };
  return (
    <div className="Exam Instruction space-y-6">
      <div className="sm:px-6 sm:py-5 sm:m-0 my-4  p-3 rounded-md bg-mainWhite dark:bg-whiteFade shadow-custom-1">
        <div className="flex justify-between items-center mb-3 border-b-[1.1px]  border-solid border-black dark:border-lightGrey text-xs text-mainBlack dark:text-lightGrey font-semibold uppercase">
          <p className="">instruction </p>
          <p>Default Time: 50 mins</p>
        </div>
        <p className="text-[14px] text-mainBlack dark:text-lightGrey">
          Students taking the exam can pre-select the duration for practice, but
          not beyond the default exam time. They can also pre-select and
          increase the number of questions beyond the default limit. For
          example, a student may choose to practice for 5 minutes with 5
          questions or attempt more questions within a shorter time frame,
          encouraging quick thinking and reading skills. The pass mark is set at
          70, while a score of 85 and above is considered excellent.
        </p>
      </div>
      <div className="w-full flex flex-col gap-5">
        <div className="flex items-center sm:justify-normal sm:gap-6 justify-between text-mainBlack dark:text-lightGrey">
          <h3 className="text-xs font-semibold uppercase">course</h3>
          <div className="p-1 w-full flex justify-between bg-lightGrey dark:bg-whiteFade text-mainBlue dark:text-lightGrey rounded-md">
            {data?.courses.map((course) => (
              <button
                key={course.id}
                onClick={() => setSelectedCourse(course)}
                className={`${
                  course.id === selectedCourse.id
                    ? "text-mainWhite bg-mainBlue dark:bg-darkMode"
                    : ""
                } uppercase font-semibold text-[12px] sm:px-4  px-2.5 py-[7px] rounded-md`}
              >
                {course.name}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center sm:justify-normal sm:gap-6 justify-between text-mainBlack dark:text-lightGrey">
          <h3 className="text-xs font-semibold uppercase">subject</h3>
          <div className="p-1.5 w-max sm:block  sm:bg-lightGrey sm:dark:bg-whiteFade text-mainBlue dark:text-lightGrey rounded-md">
            <select
              name="subjects"
              id="subjects"
              defaultValue={selectedSubject}
              className="w-max capitalize font-semibold pr-3"
              onChange={handleSubjectChange}
            >
              {selectedCourse?.subjects.map((subject) => (
                <option key={subject.id}>{subject.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex items-center gap-6 dark:text-lightGrey text-mainBlack">
          <h3 className="text-[12px] font-semibold uppercase">time</h3>
          <div className="flex items-center gap-4 text-[12px] font-semibold">
            <span className="px-3 py-1 dark:text-lightGrey bg-lightGrey text-mainBlue dark:bg-whiteFade rounded-custom">
              --:--
            </span>
            <span>/ 50:00 mins</span>
          </div>
        </div>
        <div className="flex items-center gap-6 dark:text-lightGrey text-mainBlack">
          <h3 className="text-[12px] font-semibold uppercase">question</h3>
          <div className="flex items-center gap-4 text-[12px] font-semibold">
            <span className="px-3 py-1 dark:text-lightGrey bg-lightGrey text-mainBlue dark:bg-whiteFade rounded-custom">
              --
            </span>
            <span>/ 100</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => setActive(false)}
        className="uppercase text-xs py-2  w-full  text-center bg-mainBlue text-mainWhite dark:bg-darkMode dark:text-lightGrey rounded-md font-semibold"
      >
        start exam
      </button>
    </div>
  );
};
