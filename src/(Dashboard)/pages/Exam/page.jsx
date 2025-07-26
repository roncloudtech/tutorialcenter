import { useState } from "react";
import DashboardLayout from "../../DashboardLayout";
import { Icon } from "@iconify/react/dist/iconify.js";
import Title from "../../Components/Title";
import Calculator from "../../Components/Calculator";
import TwoColumnLayout from "../../../Components/TwoColumnLayout";

export default function Exampage() {
  const [active, setActive] = useState(true);
  return (
    <DashboardLayout>
      <TwoColumnLayout
        leftContent={
          <div className="item1 xl:px-4 p-2.5">
            {/* header */}
            <Title title={"exam practice"} />
            {active ? (
              // Exam Instructions
              <ExamInstruction setActive={setActive} />
            ) : (
              // ExamPractice
              <ExamPractice setActive={setActive} />
            )}
          </div>
        }
        rightContent={
          <div className="h-full bg-mainWhite dark:bg-whiteFade scroll sm:overflow-y-auto shadow-custom-1 rounded-md p-2">
            <Calculator />
          </div>
        }
      />
    </DashboardLayout>
  );
}

const ExamPractice = ({ setActive }) => {
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
            <h3 className="text-sm uppercase">Jamb</h3>
          </div>
          <h1 className="text-lg sm:block hidden">50 QUESTIONS</h1>
          <div className="flex flex-col justify-center">
            <p className="text-[8px] uppercase font-light">Subject</p>
            <h3 className="text-sm ">English</h3>
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

const ExamInstruction = ({ setActive }) => {
  const courses = ["Jamb", "waec", "neco", "gce"];
  const subjects = [
    "mathematics",
    "english",
    "chemistry",
    "physics",
    "geography",
    "agriculture",
  ];
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
          <div className="p-1 w-max bg-lightGrey dark:bg-whiteFade text-mainBlue dark:text-lightGrey rounded-md">
            <UseButtonEffects
              items={courses}
              classNames={
                "uppercase font-semibold text-[12px] sm:px-6 px-2.5 py-[6px] rounded-md"
              }
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center sm:justify-normal sm:gap-6 justify-between text-mainBlack dark:text-lightGrey">
          <h3 className="text-xs font-semibold uppercase">subject</h3>
          <div className="p-1 w-max flex-1 sm:block flex justify-end flex-wrap sm:bg-lightGrey sm:dark:bg-whiteFade text-mainBlue dark:text-lightGrey rounded-md">
            <UseButtonEffects
              items={subjects}
              classNames={
                "capitalize font-semibold text-[10px] sm:px-3 px-2 py-[6px] rounded-md"
              }
            />
          </div>
        </div>
        <div className="flex items-center gap-6 dark:text-lightGrey text-mainBlack">
          <h3 className="text-[12px] font-semibold uppercase">time</h3>
          <div className="flex items-center gap-4 text-[12px] font-semibold">
            <span className="px-3 py-1 bg-lightGrey text-mainBlue dark:bg-whiteFade rounded-custom">
              --:--
            </span>
            <span>/ 50:00 mins</span>
          </div>
        </div>
        <div className="flex items-center gap-6 dark:text-lightGrey text-mainBlack">
          <h3 className="text-[12px] font-semibold uppercase">question</h3>
          <div className="flex items-center gap-4 text-[12px] font-semibold">
            <span className="px-3 py-1 bg-lightGrey text-mainBlue dark:bg-whiteFade rounded-custom">
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

const UseButtonEffects = ({ items, classNames }) => {
  const [active, setActive] = useState(null);
  const handleClick = (index) => {
    setActive(index);
  };
  return items.map((item, i) => (
    <button
      key={i}
      onClick={() => handleClick(i)}
      className={`${
        active === i ? "text-mainWhite bg-mainBlue dark:bg-darkMode" : ""
      } ${classNames} `}
    >
      {item}
    </button>
  ));
};
