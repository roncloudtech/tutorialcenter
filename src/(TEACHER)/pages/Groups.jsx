import { useState } from "react";
import DashboardLayout from "../../(Dashboard)/DashboardLayout";
import Title from "../../(Dashboard)/Components/Title";
import { Icon } from "@iconify/react/dist/iconify.js";
import bookIcon from "../../Assets/Vector.png";
import Chat from "../../(Dashboard)/Components/Chat";
import TwoColumnLayout from "../../Components/TwoColumnLayout";

export default function TeacherGroups() {
  const [active, setActive] = useState(true);
  const [viewStudents, setViewStudents] = useState(false);
  return (
    <DashboardLayout>
      <TwoColumnLayout
        leftContent={
          <div className="item1 xl:px-4 p-2.5">
            <div className="mb-6">
              <Title title={"GROUPS"} />
            </div>
            {viewStudents ? (
              <ViewAllStudents
                viewStudents={viewStudents}
                setViewStudents={setViewStudents}
              />
            ) : active ? (
              <GroupSubject
                viewStudents={viewStudents}
                setViewStudents={setViewStudents}
              />
            ) : (
              <GroupChat setActive={setActive} />
            )}
          </div>
        }
        rightContent={
          <div className="bg-mainWhite dark:bg-darkMode shadow-custom-1 rounded-md p-2 space-y-3 my-0.5">
            <div className="text-[12px] text-white bg-black flex items-center justify-center gap-3 py-4 pl-3 rounded-custom">
              <img src={bookIcon} width={20} height={20} alt="" />
              <span>Auto Quiz</span>
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
            </div>
          </div>
        }
      />
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
          <p className="text-[8px] font-thin ">
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
const GroupSubject = ({ viewStudents, setViewStudents }) => {
  return (
    <div className="Group Subject">
      <div className="grid grid-cols-2">
        <button
          onClick={() => setViewStudents(false)}
          className={`${
            viewStudents
              ? "border-none text-mainGrey"
              : "border-solid text-ascent"
          } uppercase text-xs font-semibold text-ascent text-center py-2 border-b-[2.5px] border-ascent border-solid`}
        >
          subject
        </button>
        <button
          onClick={() => setViewStudents(true)}
          className={`${
            viewStudents
              ? "border-solid text-ascent"
              : "border-none text-mainGrey"
          } uppercase text-xs font-semibold text-ascent text-center py-2 border-b-[2.5px] border-ascent border-solid`}
        >
          students
        </button>
      </div>
      <div className="flex items-center justify-between shadow-custom-1 bg-mainLightBlue dark:bg-whiteFade dark:text-lightGrey px-3 py-1.5 my-1 rounded-lg text-mainBlack">
        <div className="flex items-center gap-5">
          <div className="w-[50px] h-[50px] bg-mainWhite dark:bg-whiteFade rounded-full flex justify-center items-center  font-semibold">
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
            <div className="bg-lightGrey dark:bg-whiteFade w-[50px] h-[50px] text-[9px] rounded-full flex items-center justify-center">
              #JE
            </div>
            <p className="text-[13px] uppercase font-medium">JAMB English</p>
          </div>
          <div className="w-[10px] h-[10px] rounded-full bg-mainBlue dark:bg-lightGrey" />
        </div>
      </div>
      <div className="flex items-center justify-between bg-lightGrey dark:bg-whiteFade dark:text-lightGrey shadow-custom-1 px-3 py-1.5 my-1 rounded-lg text-mainBlack">
        <div className="flex items-center gap-5">
          <div className="w-[50px] h-[50px] bg-mainWhite dark:bg-whiteFade rounded-full flex justify-center items-center text-[10px] font-semibold">
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
          <div className="w-[50px] h-[50px] bg-mainWhite dark:bg-whiteFade rounded-full flex justify-center items-center text-[10px] font-semibold">
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

// GROUP CHAT
const GroupChat = ({ setActive }) => {
  const [toggleModal, setToggleModal] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center text-mainBlack dark:text-lightGrey">
        <div className="flex items-center ">
          <button onClick={() => setActive(true)}>
            <Icon
              icon="iconamoon:arrow-left-2-light"
              width="35"
              height="35"
              className="cursor-pointer"
            />
          </button>
          <h3 className="text-sm font-semibold">JAMB ENGLISH 5</h3>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setToggleModal(true)}
            className="dark:bg-darkMode bg-mainBlue text-mainWhite  flex gap-2 items-center justify-center p-2 rounded-lg"
          >
            <img src={bookIcon} alt="" width={"18"} height={"18"} />
            <span className="text-[10px]">Teacher - Student</span>
          </button>
        </div>
      </div>
      {/* CHAT SECTION */}
      <Chat />
      {/* Modal */}
      {toggleModal && <Modal setToggleModal={setToggleModal} />}
    </>
  );
};

const Modal = ({ setToggleModal }) => {
  return (
    <>
      <div
        className="w-full h-full bg-[#121D244D] absolute top-0 left-0 z-40 cursor-pointer flex items-center justify-center"
        onClick={() => setToggleModal(false)}
      ></div>
      <div className="p-4 w-[335px] py-3 bg-white dark:bg-darkMode dark:text-lightGrey shadow-custom-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 border-[0.5px] border-[#FBFAFA] border-solid rounded-xl">
        <p className="text-xs mb-1.5 font-medium">
          Do you want to send out quiz to all subject groups?
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
    </>
  );
};
const ViewAllStudentsModal = ({ setStudentsModal }) => {
  return (
    <>
      <div
        className="w-full h-full bg-[#121D244D] absolute top-0 left-0 z-40 cursor-pointer flex items-center justify-center"
        onClick={() => setStudentsModal(false)}
      ></div>
      <div className="space-y-5 px-4 w-[500px] h-[calc(100vh-100px)] overflow-y-hidden py-3 bg-darkMode dark:text-lightGrey shadow-custom-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 border-[0.5px] border-[#FBFAFA] border-solid rounded-xl">
        <div className="flex justify-between items-center text-lightGrey text-xs font-semibold uppercase">
          <p>50 students</p>
          <Icon
            onClick={() => setStudentsModal(false)}
            icon="heroicons:x-mark-20-solid"
            width="24"
            height="24"
            cursor={"pointer"}
          />
        </div>
        <div className="flex items-center gap-4 bg-lightGrey dark:bg-whiteFade dark:text-lightGrey py-2.5 pl-4 rounded-2xl">
          <Icon icon="ri:search-line" width="24" height="24" />
          <input
            type="text"
            placeholder="Search group"
            className="w-full h-full placeholder:text-[10px] rounded-r-2xl bg-transparent"
          />
        </div>
        <div className="all-students overflow-scroll h-full  space-y-2">
          <div className="flex cursor-pointer items-center gap-4 text-xs text-lightGrey">
            <div className="rounded-full bg-lightGrey h-[50px] w-[50px]"></div>
            <span>Chibuike Matthew</span>
          </div>
          <div className="flex cursor-pointer items-center gap-4 text-xs text-lightGrey">
            <div className="rounded-full bg-lightGrey h-[50px] w-[50px]"></div>
            <span>Chibuike Matthew</span>
          </div>
          <div className="flex cursor-pointer items-center gap-4 text-xs text-lightGrey">
            <div className="rounded-full bg-lightGrey h-[50px] w-[50px]"></div>
            <span>Chibuike Matthew</span>
          </div>
          <div className="flex cursor-pointer items-center gap-4 text-xs text-lightGrey">
            <div className="rounded-full bg-lightGrey h-[50px] w-[50px]"></div>
            <span>Chibuike Matthew</span>
          </div>
          <div className="flex cursor-pointer items-center gap-4 text-xs text-lightGrey">
            <div className="rounded-full bg-lightGrey h-[50px] w-[50px]"></div>
            <span>Chibuike Matthew</span>
          </div>
          <div className="flex cursor-pointer items-center gap-4 text-xs text-lightGrey">
            <div className="rounded-full bg-lightGrey h-[50px] w-[50px]"></div>
            <span>Chibuike Matthew</span>
          </div>
          <div className="flex cursor-pointer items-center gap-4 text-xs text-lightGrey">
            <div className="rounded-full bg-lightGrey h-[50px] w-[50px]"></div>
            <span>Chibuike Matthew</span>
          </div>
          <div className="flex cursor-pointer items-center gap-4 text-xs text-lightGrey">
            <div className="rounded-full bg-lightGrey h-[50px] w-[50px]"></div>
            <span>Chibuike Matthew</span>
          </div>
          <div className="flex cursor-pointer items-center gap-4 text-xs text-lightGrey">
            <div className="rounded-full bg-lightGrey h-[50px] w-[50px]"></div>
            <span>Chibuike Matthew</span>
          </div>
          <div className="flex cursor-pointer items-center gap-4 text-xs text-lightGrey">
            <div className="rounded-full bg-lightGrey h-[50px] w-[50px]"></div>
            <span>Chibuike Matthew</span>
          </div>
          <div className="flex cursor-pointer items-center gap-4 text-xs text-lightGrey">
            <div className="rounded-full bg-lightGrey h-[50px] w-[50px]"></div>
            <span>Chibuike Matthew</span>
          </div>
          <div className="flex cursor-pointer items-center gap-4 text-xs text-lightGrey">
            <div className="rounded-full bg-lightGrey h-[50px] w-[50px]"></div>
            <span>Chibuike Matthew</span>
          </div>
        </div>
      </div>
    </>
  );
};

// view all students page
const ViewAllStudents = ({ setViewStudents, viewStudents }) => {
  const [allStudentsModal, setAllStudentsModal] = useState(false);
  return (
    <>
      <div className="grid grid-cols-2">
        <button
          onClick={() => setViewStudents(false)}
          className={`${
            viewStudents
              ? "border-none text-mainGrey"
              : "border-solid text-ascent"
          } uppercase text-xs font-semibold text-ascent text-center py-2 border-b-[2.5px] border-ascent border-solid`}
        >
          subject
        </button>
        <button
          onClick={() => setViewStudents(true)}
          className={`${
            viewStudents
              ? "border-solid text-ascent"
              : "border-none text-mainGrey"
          } uppercase text-xs font-semibold text-ascent text-center py-2 border-b-[2.5px] border-ascent border-solid`}
        >
          students
        </button>
      </div>
      <div className="mt-2 space-y-1">
        <div
          onClick={() => setAllStudentsModal(true)}
          className="flex cursor-pointer items-center gap-4 px-5 py-2 text-xs rounded-lg bg-[#FFFFFF1A] shadow-custom-1"
        >
          <div className="rounded-full bg-ascent h-[50px] w-[50px]"></div>
          <span>Chibuike Matthew</span>
        </div>
        <div className="flex items-center gap-4 px-5 py-2 text-xs rounded-lg bg-[#FFFFFF1A] shadow-custom-1">
          <div className="rounded-full bg-ascent h-[50px] w-[50px]"></div>
          <span>John Okan</span>
        </div>
        <div className="flex items-center gap-4 px-5 py-2 text-xs rounded-lg bg-[#FFFFFF1A] shadow-custom-1">
          <div className="rounded-full bg-ascent h-[50px] w-[50px]"></div>
          <span>Esther Uwa</span>
        </div>
      </div>
      {allStudentsModal && (
        <ViewAllStudentsModal setStudentsModal={setAllStudentsModal} />
      )}
    </>
  );
};
