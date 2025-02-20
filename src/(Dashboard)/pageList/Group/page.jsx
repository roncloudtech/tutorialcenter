import React, { useState } from "react";
import DashboardLayout from "../../DashboardLayout";
import { Icon } from "@iconify/react/dist/iconify.js";
import bookIcon from "../../../Assets/Vector.png";
import Chat from "../../Components/Chat";

export default function Group() {
  const [active, setActive] = useState(true);
  return (
    <DashboardLayout>
      <div className="grid grid-cols-[1fr_290px] h-full">
        <div className="px-5">
          {/* hearder */}
          <div className="flex justify-between items-center  py-2 rounded-md mb-5">
            <h3 className="uppercase  font-semibold ">groups</h3>
            <div className="w-9 h-9 flex justify-center items-center bg-slate-300 rounded-md">
              <Icon
                icon="iconoir:bell-notification-solid"
                width="24"
                height="24"
                style={{ color: "#000" }}
              />
            </div>
          </div>
          {active ? <GroupSubject /> : <GroupChat setActive={setActive} />}
        </div>
        {/* SIDE BAR */}
        <div className="bg-[#EAEBEC] rounded-md p-2 space-y-3">
          <div className="bg-[#D1D5DB] py-4 flex items-center justify-center rounded-sm">
            <h3 className="text-sm font-semibold">GROUPS</h3>
          </div>
          <div className="flex items-center gap-4 bg-[#FFFDFD] py-2.5 pl-4 rounded-2xl">
            <Icon
              icon="ri:search-line"
              width="24"
              height="24"
              style={{ color: "#000" }}
            />
            <input
              type="text"
              placeholder="Search group"
              className="w-full h-full placeholder:text-[10px] rounded-r-2xl"
            />
          </div>
          <div className="space-y-3">
            <div
              onClick={() => setActive(false)}
              className="flex gap-2 bg-[#FFFFFF] p-2 rounded-lg cursor-pointer"
            >
              <div className="flex-1">
                <div className="w-[55px] h-[53px] bg-[#D9D9D9] rounded-full flex justify-center items-center text-[6px] font-medium">
                  #WE24
                </div>
              </div>
              <div className="flex gap-1">
                <div className="WAEC">
                  <p className="text-xs">WAEC ENGLISH</p>
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
            <div className="flex gap-2 p-2 rounded-lg">
              <div className="flex-1">
                <div className="w-[55px] h-[53px] bg-[#D9D9D9] rounded-full flex justify-center items-center text-[6px] font-medium">
                  #WE24
                </div>
              </div>
              <div className="flex gap-1">
                <div className="WAEC">
                  <p className="text-xs">WAEC ENGLISH</p>
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
            <div className="flex gap-2  p-2 rounded-lg">
              <div className="flex-1">
                <div className="w-[55px] h-[53px] bg-[#D9D9D9] rounded-full flex justify-center items-center text-[6px] font-medium">
                  #WE24
                </div>
              </div>
              <div className="flex gap-1">
                <div className="WAEC">
                  <p className="text-xs">WAEC ENGLISH</p>
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
            <div className="flex gap-2  p-2 rounded-lg">
              <div className="flex-1">
                <div className="w-[55px] h-[53px] bg-[#D9D9D9] rounded-full flex justify-center items-center text-[6px] font-medium">
                  #WE24
                </div>
              </div>
              <div className="flex gap-1">
                <div className="WAEC">
                  <p className="text-xs">WAEC ENGLISH</p>
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
            <div className="flex gap-2  p-2 rounded-lg">
              <div className="flex-1">
                <div className="w-[55px] h-[53px] bg-[#D9D9D9] rounded-full flex justify-center items-center text-[6px] font-medium">
                  #WE24
                </div>
              </div>
              <div className="flex gap-1">
                <div className="WAEC">
                  <p className="text-xs">WAEC ENGLISH</p>
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
      <div className="bg-[#8695A0] py-3 px-4 mb-5">
        <p className="uppercase text-sm font-semibold">subject</p>
      </div>
      <div className="flex items-center justify-between bg-[#D1D5DB] px-3 py-1.5 rounded-lg">
        <div className="flex items-center gap-5">
          <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center  font-semibold">
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
      <div className="mx-5">
        <div className="flex justify-between items-center border-b border-black px-6 py-1">
          <div className="flex gap-3 items-center ">
            <div className="bg-[#EAEBEC] w-[50px] h-[50px] text-[9px] rounded-full flex items-center justify-center">
              #JE
            </div>
            <p className="text-[13px] uppercase font-medium">JAMB English</p>
          </div>
          <div className="w-[10px] h-[10px] rounded-full bg-black" />
        </div>
        <div className="flex justify-between items-center border-b border-black px-6 py-1">
          <div className="flex gap-3 items-center ">
            <div className="bg-[#EAEBEC] w-[50px] h-[50px] text-[9px] rounded-full flex items-center justify-center">
              #JE
            </div>
            <p className="text-[13px] uppercase font-medium">WAEC English</p>
          </div>
          <div className="w-[10px] h-[10px] rounded-full bg-[#EAEBEC]" />
        </div>
        <div className="flex justify-between items-center px-6 py-1">
          <div className="flex gap-3 items-center ">
            <div className="bg-[#EAEBEC] w-[50px] h-[50px] text-[9px] rounded-full flex items-center justify-center">
              #JE
            </div>
            <p className="text-[13px] uppercase font-medium">GENERAL English</p>
          </div>
          <div className="w-[10px] h-[10px] rounded-full bg-[#EAEBEC]" />
        </div>
      </div>
      <div className="flex items-center justify-between bg-[#EAEBEC] px-3 py-1.5 rounded-lg">
        <div className="flex items-center gap-5">
          <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center text-[8px] font-semibold">
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
      <div className="flex items-center justify-between bg-[#EAEBEC] px-3 py-1.5 rounded-lg my-2">
        <div className="flex items-center gap-5">
          <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center text-[8px] font-semibold">
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
      <div className="flex justify-between items-center">
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
            className="bg-black flex gap-2 items-center justify-center p-2 rounded-lg"
          >
            <img src={bookIcon} alt="" width={"18"} height={"18"} />
            <span className="text-[10px] text-white">Teacher - Student</span>
          </button>
          <div className="bg-black flex gap-2 items-center justify-center p-2 rounded-lg">
            <img src={bookIcon} alt="" width={"18"} height={"18"} />
            <span className="text-[10px] text-white">student - Student</span>
          </div>
        </div>
      </div>
      {/* CHAT SECTION */}
      <Chat />
      {/* Modal */}
      {toggleModal && (
        <>
          <div
            className="w-full h-full bg-[#121D244D] absolute top-0 left-0 z-40 cursor-pointer flex items-center justify-center"
            onClick={() => setToggleModal(false)}
          ></div>
          <div className="p-4 w-[335px] h-[259px] bg-white shadow-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 border-[0.5px] border-[#D1D5DB] border-solid rounded-xl">
            <p className="text-xs leading-6 mb-3">
              Challenge any student to a speed test examination
            </p>
            <div className="flex items-center justify-between text-[8px] font-semibold mb-3">
              <span className="flex-1">TIME</span>
              <div className="flex-1">
                <div className="w-[45px] h-[30px] rounded-sm bg-[#D1D5DB] text-[10px] flex justify-center items-center">
                  --:--
                </div>
              </div>
              <span className="flex-1">/ 50:00 MINS</span>
            </div>
            <div className="flex items-center justify-between text-[8px] font-semibold">
              <span className="flex-1">QUESTIONS</span>
              <div className="flex-1">
                <div className="w-[45px] h-[30px] rounded-sm bg-[#D1D5DB] text-[10px] flex justify-center items-center">
                  --:--
                </div>
              </div>
              <span className="flex-1 ">/ 100</span>
            </div>
            <div className="flex gap-4 mt-4">
              <button className="w-full py-2 bg-[#EAEBEC] text-xs font-semibold rounded-md">
                Yes
              </button>
              <button className="w-full py-2 bg-[#EAEBEC] text-xs font-semibold rounded-md">
                No
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};
