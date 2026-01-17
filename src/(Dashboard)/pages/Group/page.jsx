import React, { useState } from "react";
import DashboardLayout from "../../DashboardLayout";
import { Icon } from "@iconify/react/dist/iconify.js";
import bookIcon from "../../../Assets/Vector.png";
import Chat from "../../Components/Chat";
import Title from "../../Components/Title";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

export default function Group() {
  const [active, setActive] = useState(true);
  const [section, setSection] = useState(false);
  return (
    <DashboardLayout>
      <div className="xl:grid grid-cols-[1fr_0.38fr] h-full scroll sm:overflow-y-auto">
        {section ? (
          <TeacherGroupChatSection
            active={active}
            setActive={setActive}
            role={section}
            setRole={setSection}
          />
        ) : (
          <SubjectGroupChatSection
            active={active}
            setActive={setActive}
            role={section}
            setRole={setSection}
          />
        )}
      </div>
    </DashboardLayout>
  );
}

const GroupInfo = ({ setActive }) => {
  return (
    <div
      onClick={() => setActive(false)}
      className="flex gap-2 p-2 rounded-lg cursor-pointer"
    >
      <div className="flex-1">
        <div className="w-[55px] h-[53px] bg-lightGrey text-mainBlue shadow-custom-1 rounded-full flex justify-center items-center text-[6px] font-medium">
          #WE24
        </div>
      </div>
      <div className="flex gap-1 dark:text-lightGrey">
        <div className="WAEC">
          <p className="text-[13px]">WAEC ENGLISH</p>
          <p className="text-[8px] font-thin">
            <span className="font-medium">Grace:</span> Hey there! 🌼 Did you
            catch the latest episode of this series, it...
          </p>
        </div>
        <div className="flex flex-col items-center justify-between">
          <span className="text-[10px] font-light">5s</span>
          <div className="w-[17px] h-[17px] bg-[#FF3636B0] text-white text-[8px] font-medium rounded-full flex items-center justify-center">
            12
          </div>
        </div>
      </div>
    </div>
  );
};

// GROUP SUBJECT
const SubjectGroup = ({ role, setRole }) => {
  return (
    <div className="Group Subject">
      <div className="grid grid-cols-2 max-sm:gap-2.5 max-sm:my-3 relative text-xs mb-2">
        <button
          onClick={() => setRole(false)}
          className={`border-solid ${
            role
              ? "text-mainGrey cursor-pointer max-sm:bg-lightGrey max-sm:rounded-custom max-sm:text-black max-sm:py-2.5"
              : "border-b-[3px] text-ascent pointer-events-none  max-sm:bg-ascent max-sm:rounded-custom max-sm:text-white max-sm:py-2.5"
          }  pb-1.5 text-center text-[16px] border-ascent font-bold uppercase `}
        >
          subject
        </button>
        <button
          onClick={() => setRole(true)}
          className={`border-solid ${
            role
              ? "border-b-[3px] text-ascent pointer-events-none  max-sm:bg-ascent max-sm:rounded-custom max-sm:text-white max-sm:py-2.5"
              : "text-mainGrey cursor-pointer max-sm:bg-lightGrey max-sm:rounded-custom max-sm:text-black max-sm:py-2.5"
          }  pb-1.5 text-center text-[16px] border-ascent font-bold uppercase`}
        >
          Teachers
        </button>
      </div>
      <div className="flex items-center justify-between shadow-custom-1 bg-mainLightBlue dark:bg-whiteFade dark:text-lightGrey px-3 py-1.5 my-1 rounded-lg text-mainBlack">
        <div className="flex items-center gap-5">
          <div className="w-[45px] h-[45px] bg-mainWhite dark:bg-whiteFade rounded-full flex justify-center items-center  font-semibold">
            <span className="text-[7px]">#E</span>
          </div>
          <p className="text-xs font-semibold">ENGLISH</p>
        </div>
        <Icon
          icon="iconamoon:arrow-left-2-light"
          width="30"
          height="30"
          className="rotate-90"
        />
      </div>
      <div className="mx-2">
        <div className="flex justify-between shadow-custom-1 dark:bg-[#FFFFFF03] items-center p-1.5">
          <div className="flex gap-3 items-center text-mainBlack dark:text-lightGrey">
            <div className="bg-lightGrey dark:bg-whiteFade w-[45px] h-[45px] text-[9px] rounded-full flex items-center justify-center">
              #JE
            </div>
            <p className="text-[13px] uppercase font-medium">JAMB English</p>
          </div>
          <div className="w-[10px] h-[10px] rounded-full bg-mainBlue dark:bg-lightGrey" />
        </div>
      </div>
      <div className="flex items-center justify-between bg-lightGrey dark:bg-whiteFade dark:text-lightGrey shadow-custom-1 px-3 py-1.5 my-1 rounded-lg text-mainBlack">
        <div className="flex items-center gap-5">
          <div className="w-[45px] h-[45px] bg-mainWhite dark:bg-whiteFade rounded-full flex justify-center items-center text-[10px] font-semibold">
            <span>#M</span>
          </div>
          <p className="text-xs font-semibold">MATHEMATICS</p>
        </div>
        <Icon
          icon="iconamoon:arrow-left-2-light"
          width="30"
          height="30"
          className="rotate-90"
        />
      </div>
      <div className="flex items-center justify-between bg-lightGrey dark:bg-whiteFade dark:text-lightGrey shadow-custom-1 px-3 py-1.5 my-1 rounded-lg text-mainBlack">
        <div className="flex items-center gap-5">
          <div className="w-[45px] h-[45px] bg-mainWhite dark:bg-whiteFade rounded-full flex justify-center items-center text-[10px] font-semibold">
            <span>#P</span>
          </div>
          <p className="text-xs font-semibold">PHYSICS</p>
        </div>
        <Icon
          icon="iconamoon:arrow-left-2-light"
          width="30"
          height="30"
          className="rotate-90"
        />
      </div>
    </div>
  );
};
// TEACHER GROUP
const TeacherGroup = ({ role, setRole }) => {
  return (
    <div className="Group Subject">
      <div className="grid grid-cols-2 max-sm:gap-2.5 max-sm:my-3 relative text-xs mb-2">
        <button
          onClick={() => setRole(false)}
          className={`border-solid ${
            role
              ? "text-mainGrey cursor-pointer max-sm:bg-lightGrey max-sm:rounded-custom max-sm:text-black max-sm:py-2.5"
              : "border-b-[3px] text-ascent pointer-events-none  max-sm:bg-ascent max-sm:rounded-custom max-sm:text-white max-sm:py-2.5"
          }  pb-1.5 text-center text-[16px] border-ascent font-bold uppercase `}
        >
          subject
        </button>
        <button
          onClick={() => setRole(true)}
          className={`border-solid ${
            role
              ? "border-b-[3px] text-ascent pointer-events-none  max-sm:bg-ascent max-sm:rounded-custom max-sm:text-white max-sm:py-2.5"
              : "text-mainGrey cursor-pointer max-sm:bg-lightGrey max-sm:rounded-custom max-sm:text-black max-sm:py-2.5"
          }  pb-1.5 text-center text-[16px] border-ascent font-bold uppercase`}
        >
          Teachers
        </button>
      </div>
      <div className="flex items-center justify-between shadow-custom-1 bg-mainLightBlue dark:bg-whiteFade dark:text-lightGrey px-3 py-1.5 my-1 rounded-lg text-mainBlack">
        <div className="flex items-center gap-5">
          <div className="w-[45px] h-[45px] bg-mainWhite dark:bg-whiteFade rounded-full flex justify-center items-center  font-semibold"></div>
          <p className="text-xs font-semibold capitalize">english teacher</p>
        </div>
        <Icon
          icon="iconamoon:arrow-left-2-light"
          width="30"
          height="30"
          className="rotate-90"
        />
      </div>
      <div className="mx-2">
        <div className="flex justify-between shadow-custom-1 dark:bg-[#FFFFFF03] items-center p-1.5">
          <div className="flex gap-3 items-center text-mainBlack dark:text-lightGrey">
            <div className="bg-lightGrey dark:bg-whiteFade w-[45px] h-[45px] text-[9px] rounded-full flex items-center justify-center"></div>
            <p className="text-[13px] capitalize font-medium">JAMB Teacher</p>
          </div>
          <div className="w-[10px] h-[10px] rounded-full bg-mainBlue dark:bg-lightGrey" />
        </div>
      </div>
      <div className="mx-2">
        <div className="flex justify-between shadow-custom-1 dark:bg-[#FFFFFF03] items-center p-1.5">
          <div className="flex gap-3 items-center text-mainBlack dark:text-lightGrey">
            <div className="bg-lightGrey dark:bg-whiteFade w-[45px] h-[45px] text-[9px] rounded-full flex items-center justify-center"></div>
            <p className="text-[13px] capitalize font-medium">WAEC Teacher</p>
          </div>
          <div className="w-[10px] h-[10px] rounded-full bg-mainBlue dark:bg-lightGrey" />
        </div>
      </div>
      <div className="flex items-center justify-between bg-lightGrey dark:bg-whiteFade dark:text-lightGrey shadow-custom-1 px-3 py-1.5 my-1 rounded-lg text-mainBlack">
        <div className="flex items-center gap-5">
          <div className="w-[45px] h-[45px] bg-mainWhite dark:bg-whiteFade rounded-full flex justify-center items-center text-[10px] font-semibold"></div>
          <p className="text-xs font-semibold capitalize">
            Mathematics Teacher
          </p>
        </div>
        <Icon
          icon="iconamoon:arrow-left-2-light"
          width="30"
          height="30"
          className="rotate-90"
        />
      </div>
      <div className="flex items-center justify-between bg-lightGrey dark:bg-whiteFade dark:text-lightGrey shadow-custom-1 px-3 py-1.5 my-1 rounded-lg text-mainBlack">
        <div className="flex items-center gap-5">
          <div className="w-[45px] h-[45px] bg-mainWhite dark:bg-whiteFade rounded-full flex justify-center items-center text-[10px] font-semibold"></div>
          <p className="text-xs font-semibold capitalize">Physics Teacher</p>
        </div>
        <Icon
          icon="iconamoon:arrow-left-2-light"
          width="30"
          height="30"
          className="rotate-90"
        />
      </div>
    </div>
  );
};

// SUBJECT GROUP CHAT
const SubjectGroupChat = ({ setActive }) => {
  const [studentModal, setStudentModal] = useState(false);
  const [teacherModal, setTeacherModal] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center text-mainBlack dark:text-lightGrey">
        <div className="flex items-center ">
          <button onClick={() => setActive(true)}>
            <Icon
              icon="iconamoon:arrow-left-2-light"
              width="35"
              height="35"
              className="cursor-pointer -ml-1.5"
            />
          </button>
          <h3 className="text-sm font-semibold">JAMB ENGLISH 5</h3>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setTeacherModal(true)}
            className="dark:bg-darkMode bg-mainBlue text-mainWhite  flex gap-2 items-center justify-center p-2 rounded-lg"
          >
            <img src={bookIcon} alt="" width={"18"} height={"18"} />
            <span className="text-[10px]">Teacher - Student</span>
          </button>
          <button
            onClick={() => setStudentModal(true)}
            className="dark:bg-darkMode bg-mainBlue text-mainWhite flex gap-2 items-center justify-center p-2 rounded-lg"
          >
            <img src={bookIcon} alt="" width={"18"} height={"18"} />
            <span className="text-[10px]">student - Student</span>
          </button>
        </div>
      </div>
      {/* CHAT SECTION */}
      <Chat />
      {/* TEACHER CHALLENGE MODAL */}
      {teacherModal && (
        <ModalLayout setToggleModal={setTeacherModal}>
          <div className="p-4 max-w-[335px] max-h-[259px] bg-white dark:bg-darkMode dark:text-lightGrey shadow-custom-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 border-[0.5px] border-[#FBFAFA] border-solid rounded-xl">
            <p className="text-xs leading-6 mb-3">
              Do you want to accept a challenge from a teacher?
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-[8px] font-semibold ">
                <span>TIME -</span>
                <span> 50:00 MINS</span>
              </div>
              <div className="flex items-center gap-2 text-[8px] font-semibold">
                <span>QUESTIONS -</span>
                <span>100</span>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <button className="w-full py-2 bg-lightGrey dark:bg-whiteFade text-xs font-semibold rounded-md">
                Yes
              </button>
              <button className="w-full py-2 bg-lightGrey dark:bg-whiteFade text-xs font-semibold rounded-md">
                No
              </button>
            </div>
          </div>
        </ModalLayout>
      )}
      {/* STUDENT CHALLENGE MODAL */}
      {studentModal && (
        <ModalLayout setToggleModal={setStudentModal}>
          <div className="p-4 max-w-[335px] max-h-[259px] bg-white dark:bg-darkMode dark:text-lightGrey shadow-custom-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 border-[0.5px] border-[#FBFAFA] border-solid rounded-xl">
            <p className="text-xs leading-6 mb-3">
              Do you want to accept a challenge from a student?
            </p>
            <div className="flex gap-4 mt-4">
              <button className="w-full py-2 bg-lightGrey dark:bg-whiteFade text-xs font-semibold rounded-md">
                Yes
              </button>
              <button className="w-full py-2 bg-lightGrey dark:bg-whiteFade text-xs font-semibold rounded-md">
                No
              </button>
            </div>
          </div>
        </ModalLayout>
      )}
    </>
  );
};

// TEACHER GROUP CHAT
const TeacherGroupChat = ({ setActive }) => {
  return (
    <>
      <div className="flex justify-between items-center text-mainBlack dark:text-lightGrey">
        <div className="flex items-center ">
          <button onClick={() => setActive(true)}>
            <Icon
              icon="iconamoon:arrow-left-2-light"
              width="35"
              height="35"
              className="cursor-pointer -ml-1.5"
            />
          </button>
          <h3 className="text-sm font-semibold uppercase">JAMB Teacher</h3>
        </div>
      </div>
      {/* CHAT SECTION */}
      <Chat />
    </>
  );
};

// Subject GroupChat Section
const SubjectGroupChatSection = ({ active, setActive, role, setRole }) => {
  return (
    <>
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <div className="item1 xl:px-4 p-2.5 overflow-y-auto">
          {/* header */}
          <Title title={"groups"} />

          {active ? (
            <SubjectGroup role={role} setRole={setRole} />
          ) : (
            <SubjectGroupChat setActive={setActive} />
          )}
        </div>
      </PerfectScrollbar>
      {/* SIDE BAR */}
      <PerfectScrollbar className="hidden xl:block">
        <div className="bg-mainWhite dark:bg-darkMode shadow-custom-1 rounded-md p-2 space-y-3 my-0.5 scroll overflow-y-auto">
          <div className="bg-ascent py-4 pl-3 rounded-custom">
            <h3 className="text-xs font-semibold capitalize text-mainWhite">
              Groups Chats
            </h3>
          </div>
          <div className="flex items-center gap-4 bg-lightGrey dark:bg-whiteFade dark:text-lightGrey py-2.5 pl-4 rounded-2xl">
            <Icon icon="ri:search-line" width="24" height="24" />
            <input
              type="text"
              placeholder="Search group"
              className="w-full h-full placeholder:text-[10px] rounded-r-2xl bg-transparent"
            />
          </div>
          <div className="space-y-3">
            <GroupInfo setActive={setActive} />
            <GroupInfo setActive={setActive} />
            <GroupInfo setActive={setActive} />
            <GroupInfo setActive={setActive} />
            <GroupInfo setActive={setActive} />
            <GroupInfo setActive={setActive} />
          </div>
        </div>
      </PerfectScrollbar>
    </>
  );
};
const TeacherGroupChatSection = ({ active, setActive, role, setRole }) => {
  return (
    <>
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <div className="item1 xl:px-4 p-2.5">
          {/* header */}
          <Title title={"groups"} />
          {active ? (
            <TeacherGroup role={role} setRole={setRole} />
          ) : (
            <TeacherGroupChat setActive={setActive} />
          )}
        </div>
      </PerfectScrollbar>
      {/* SIDE BAR */}
      <PerfectScrollbar className="hidden xl:block">
        <div className="bg-mainWhite dark:bg-darkMode shadow-custom-1 rounded-md p-2 space-y-3 my-0.5 scroll overflow-y-auto">
          <div className="bg-ascent py-4 pl-3 rounded-custom">
            <h3 className="text-xs font-semibold capitalize text-mainWhite">
              Groups Chats
            </h3>
          </div>
          <div className="flex items-center gap-4 bg-lightGrey dark:bg-whiteFade dark:text-lightGrey py-2.5 pl-4 rounded-2xl">
            <Icon icon="ri:search-line" width="24" height="24" />
            <input
              type="text"
              placeholder="Search group"
              className="w-full h-full placeholder:text-[10px] rounded-r-2xl bg-transparent"
            />
          </div>
          <div className="space-y-3">
            <GroupInfo setActive={setActive} />
            <GroupInfo setActive={setActive} />
            <GroupInfo setActive={setActive} />
            <GroupInfo setActive={setActive} />
            <GroupInfo setActive={setActive} />
            <GroupInfo setActive={setActive} />
          </div>
        </div>
      </PerfectScrollbar>
    </>
  );
};

const ModalLayout = ({ setToggleModal, children }) => {
  return (
    <>
      <div
        className="w-full h-full bg-[#121D244D] absolute top-0 left-0 z-40 cursor-pointer flex items-center justify-center"
        onClick={() => setToggleModal(false)}
      ></div>
      {children}
    </>
  );
};
