import React, { useState } from "react";
import DashboardLayout from "../../DashboardLayout";
import { Icon } from "@iconify/react/dist/iconify.js";
import bookIcon from "../../../Assets/Vector.png";
import Chat from "../../Components/Chat";

export default function Group() {
  const [active, setActive] = useState(true);
  return (
    <DashboardLayout>
      <div className="grid grid-cols-[1fr_300px] h-full">
        <div className="px-5">
          {/* hearder */}
          <div className="flex justify-between items-center  py-2 rounded-md mb-4">
            <h3 className="uppercase text-mainBlue dark:text-lightGrey font-bold">
              groups
            </h3>
            <div className="w-9 h-9 flex justify-center items-center bg-mainBlue text-lightGrey dark:bg-lightGrey dark:text-mainBlue rounded-md">
              <Icon
                icon="iconoir:bell-notification-solid"
                width="24"
                height="24"
              />
            </div>
          </div>
          {active ? <GroupSubject /> : <GroupChat setActive={setActive} />}
        </div>
        {/* SIDE BAR */}
        <div className="bg-mainWhite dark:bg-darkMode shadow-custom-1 rounded-md p-2 space-y-3 my-0.5">
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
                    <span className="font-medium">Grace:</span> Hey there! 🌼
                    Did you catch the latest episode of this series, it...
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
            <div className="flex gap-2 p-2 rounded-lg cursor-pointer">
              <div className="flex-1">
                <div className="w-[55px] h-[53px] bg-lightGrey text-mainBlue shadow-custom-1 rounded-full flex justify-center items-center text-[6px] font-medium">
                  #WE24
                </div>
              </div>
              <div className="flex gap-1 dark:text-lightGrey">
                <div className="WAEC">
                  <p className="text-[13px]">WAEC ENGLISH</p>
                  <p className="text-[8px] font-thin ">
                    <span className="font-medium">Grace:</span> Hey there! 🌼
                    Did you catch the latest episode of this series, it...
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
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

// GROUP SUBJECT
const GroupSubject = () => {
  return (
    <div className="Group Subject">
      <div className="bg-mainBlue text-mainWhite dark:bg-lightGrey dark:text-darkMode py-3 px-4 mb-3">
        <p className="uppercase text-sm font-semibold">subject</p>
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
          <div className="dark:bg-darkMode bg-mainBlue text-mainWhite flex gap-2 items-center justify-center p-2 rounded-lg">
            <img src={bookIcon} alt="" width={"18"} height={"18"} />
            <span className="text-[10px]">student - Student</span>
          </div>
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
      <div className="p-4 w-[335px] h-[259px] bg-white dark:bg-darkMode dark:text-lightGrey shadow-custom-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 border-[0.5px] border-[#FBFAFA] border-solid rounded-xl">
        <p className="text-xs leading-6 mb-3">
          Challenge any student to a speed test examination
        </p>
        <div className="flex items-center justify-between text-[8px] font-semibold mb-3">
          <span className="flex-1">TIME</span>
          <div className="flex-1">
            <div className="w-[45px] h-[30px] rounded-sm bg-mainBlue text-mainWhite dark:bg-lightGrey dark:text-mainBlue text-[10px] flex justify-center items-center">
              --:--
            </div>
          </div>
          <span className="flex-1">/ 50:00 MINS</span>
        </div>
        <div className="flex items-center justify-between text-[8px] font-semibold">
          <span className="flex-1">QUESTIONS</span>
          <div className="flex-1">
            <div className="w-[45px] h-[30px] rounded-sm bg-mainBlue text-mainWhite dark:bg-lightGrey dark:text-mainBlue text-[10px] flex justify-center items-center">
              --:--
            </div>
          </div>
          <span className="flex-1 ">/ 100</span>
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
    </>
  );
};
