import React, { useState } from "react";
import DashboardLayout from "../../DashboardLayout";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Exampage() {
  const [active, setActive] = useState(true);
  return (
    <DashboardLayout>
      <div className="grid grid-cols-[1fr_290px] h-full">
        {/* LEFT SIDE  */}
        <div className="px-4">
          {/* hearder */}
          <div className="flex justify-between items-center  py-2 rounded-md mb-4">
            <h3 className="uppercase  font-semibold ">exam practice</h3>
            <div className="w-9 h-9 flex justify-center items-center bg-slate-300 rounded-md">
              <Icon
                icon="iconoir:bell-notification-solid"
                width="24"
                height="24"
                style={{ color: "#000" }}
              />
            </div>
          </div>
          {active ? (
            // Exam Instructions
            <ExamInstruction setActive={setActive} />
          ) : (
            // ExamPractice
            <ExamPractice setActive={setActive} />
          )}
        </div>
        <div className="bg-[#EAEBEC] rounded-md"></div>
      </div>
    </DashboardLayout>
  );
}

const ExamPractice = ({ setActive }) => {
  return (
    <div className="Exam Practice">
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => setActive(true)}>
          <Icon icon="iconamoon:arrow-left-2-light" width="35" height="35" />
        </button>
        <p className="text-sm font-semibold">14:59</p>
        <div className="flex gap-3">
          <Icon icon="material-symbols:alarm-rounded" width="25" height="25" />
          <span className="text-sm font-semibold">15mins</span>
        </div>
      </div>
      <div className="font-semibold flex justify-between items-center mb-5">
        <div className="flex flex-col justify-center">
          <p className="text-[8px]">course</p>
          <h3 className="text-sm uppercase">Jamb</h3>
        </div>
        <h1 className="text-lg">50 QUESTIONS</h1>
        <div className="flex flex-col justify-center">
          <p className="text-[8px] uppercase">Subject</p>
          <h3 className="text-sm ">English</h3>
        </div>
      </div>
      <div className="px-6 py-5 rounded-md bg-[#EAEBEC] mb-5">
        <div className="flex justify-between items-center mb-3  border-b-[1.1px]  border-solid border-black text-[16px] font-semibold uppercase">
          <p>Question 5</p>
          <div className="text-[16px] font-semibold flex gap-4 capitalize">
            <p>Answered: 5/30</p>
            <p>unanswered: 25/30</p>
          </div>
        </div>
        <p className="text-xs text-[#121D24]">
          Students taking the exam can pre-select the duration for practice, but
          not beyond the default exam time. They can also pre-select and
          increase the number of questions beyond the default limit. For
          example, a student may choose to practice for 5 minutes with 5
          questions or attempt more questions within a shorter time frame,
          encouraging quick thinking and reading skills. The pass mark is set at
          70, while a score of 85 and above is considered excellent.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-5">
        <div className="px-5 py-3 bg-[#EAEBEC] text-xs rounded-md">
          <p>A. Thgsbfyhjfnajfnsaj</p>
        </div>
        <div className="px-5 py-3 bg-[#EAEBEC] text-xs rounded-md">
          <p>A. Thgsbfyhjfnajfnsaj</p>
        </div>
        <div className="px-5 py-3 bg-[#EAEBEC] text-xs rounded-md">
          <p>A. Thgsbfyhjfnajfnsaj</p>
        </div>
        <div className="px-5 py-3 bg-[#EAEBEC] text-xs rounded-md">
          <p>A. Thgsbfyhjfnajfnsaj</p>
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
            <button>13</button>
            <button>13</button>
            <button>13</button>
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
          <button className="w-full bg-[#D1D5DB] font-semibold text-center text-xs py-1.5 rounded-md uppercase">
            previous
          </button>
          <button className="w-full bg-[#D1D5DB] font-semibold text-center text-xs py-1.5 rounded-md uppercase">
            next
          </button>
        </div>
      </div>
      <button className="w-full rounded-md bg-[#D1D5DB] py-2 uppercase text-xs font-semibold mb-3">
        submit
      </button>
    </div>
  );
};

const ExamInstruction = ({ setActive }) => {
  return (
    <div className="Exam Instruction space-y-6">
      <div className="px-6 py-5 rounded-md bg-[#EAEBEC]">
        <div className="flex justify-between items-center mb-3  border-b-[1.1px]  border-solid border-black text-sm font-semibold uppercase">
          <p>instruction </p>
          <p>Default Time: 50 mins</p>
        </div>
        <p className="text-xs text-[#121D24]">
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
        <div className="flex items-center gap-6">
          <h3 className="text-xs font-semibold uppercase">course</h3>
          <div className="p-1 w-max bg-[#EAEBEC] rounded-md ">
            <button className="uppercase font-semibold text-[12px] px-6 py-[6px] rounded-md focus:text-white focus:bg-black">
              jamb
            </button>
            <button className="uppercase font-semibold text-[12px] px-6 py-[6px] rounded-md focus:text-white focus:bg-black">
              waec
            </button>
            <button className="uppercase font-semibold text-[12px] px-6 py-[6px] rounded-md focus:text-white focus:bg-black">
              neco
            </button>
            <button className="uppercase font-semibold text-[12px] px-6 py-[6px] rounded-md focus:text-white focus:bg-black">
              gce
            </button>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <h3 className="text-xs font-semibold uppercase">subject</h3>
          <div className="p-1 w-max bg-[#EAEBEC] rounded-md">
            <button className="capitalize font-semibold text-[10px] px-3 py-[6px] rounded-md focus:text-white focus:bg-black">
              mathematics
            </button>
            <button className="capitalize font-semibold text-[12px] px-3 py-[6px] rounded-md focus:text-white focus:bg-black">
              english
            </button>
            <button className="capitalize font-semibold text-[12px] px-3 py-[6px] rounded-md focus:text-white focus:bg-black">
              chemistry
            </button>
            <button className="capitalize font-semibold text-[12px] px-3 py-[6px] rounded-md focus:text-white focus:bg-black">
              physics
            </button>
            <button className="capitalize font-semibold text-[12px] px-3 py-[6px] rounded-md focus:text-white focus:bg-black">
              geography
            </button>
            <button className="capitalize font-semibold text-[12px] px-3 py-[6px] rounded-md focus:text-white focus:bg-black">
              agriculture
            </button>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <h3 className="text-xs font-semibold uppercase">time</h3>
          <div className="flex items-center gap-4 text-[12px] font-semibold">
            <span className="px-3 py-1 bg-[#D1D5DB]">00:00</span>
            <span>/ 50:00 mins</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <h3 className="text-xs font-semibold uppercase">question</h3>
          <div className="flex items-center gap-4 text-[12px] font-semibold">
            <span className="px-3 py-1 bg-[#D1D5DB]">00:00</span>
            <span>/ 100</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => setActive(false)}
        className="uppercase text-xs py-2  w-full  text-center bg-[#D1D5DB] rounded-md font-semibold"
      >
        start exam
      </button>
    </div>
  );
};
