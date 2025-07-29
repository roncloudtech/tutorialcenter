import React, { useState } from "react";
import DashboardLayout from "../../(Dashboard)/DashboardLayout";
import Title from "../../(Dashboard)/Components/Title";
import { Icon } from "@iconify/react/dist/iconify.js";
import TwoColumnLayout from "../../Components/TwoColumnLayout";

export default function Assesment() {
  const [modal, setModal] = useState(false);
  return (
    <DashboardLayout>
      <TwoColumnLayout
        leftContent={
          <div className="item1 xl:px-4 p-2.5">
            <Title title={"CHALLENGE"} />
            <div className="space-y-4">
              <div className="TOPICS mt-3 space-y-2">
                <div className="flex items-center justify-between text-sm font-semibold text-black uppercase">
                  <h2>Topic</h2>
                  <h3>total Questions: 4</h3>
                </div>
                <select
                  className="flex justify-between w-full bg-[#D1D5DB] text-xs font-medium p-2 rounded-custom"
                  name="topics"
                  id=""
                >
                  <option value="noun">Noun</option>
                </select>
              </div>
              <div className="addImage w-full">
                <h4 className="text-xs font-medium mb-2">Add Image</h4>
                <input
                  type="file"
                  src=""
                  alt=""
                  className="file:w-full file:text-[14px] file:rounded-custom file:border-0 file:p-2 file:text-[#8695A0]file:bg-[#D1D5DB]"
                />
              </div>
              <div className="setQuestion">
                <div className="flex items-center justify-between text-xs font-medium mb-2">
                  <h4>Add question</h4>
                  <h4>Answer</h4>
                </div>
                <div className="grid grid-cols-[60fr_40fr] items-center justify-between gap-4">
                  <input
                    type="text"
                    placeholder="Type your question"
                    className="py-2 px-3 rounded-custom bg-[#EAEBEC] placeholder:text-black placeholder:text-[12px]"
                  />
                  <select
                    name=""
                    id=""
                    className="py-2 px-3 rounded-custom bg-[#EAEBEC] placeholder:text-black text-[12px]"
                  >
                    <option value="">Select option</option>
                  </select>
                </div>
              </div>
              <div className="set-theory">
                <p className="text-[12px] text-mainGrey">Select as theory</p>
              </div>
              <div className="choose-option grid grid-cols-2 gap-4">
                <div className="option-a">
                  <p className="text-xs font-medium mb-2">Option A</p>
                  <input
                    type="text"
                    placeholder="Type your question"
                    className="w-full py-2 px-3 rounded-custom bg-[#EAEBEC] placeholder:text-black placeholder:text-[12px]"
                  />
                </div>
                <div className="option-a">
                  <p className="text-xs font-medium mb-2">Option A</p>
                  <input
                    type="text"
                    placeholder="Type your question"
                    className="w-full py-2 px-3 rounded-custom bg-[#EAEBEC] placeholder:text-black placeholder:text-[12px]"
                  />
                </div>
                <div className="option-a">
                  <p className="text-xs font-medium mb-2">Option B</p>
                  <input
                    type="text"
                    placeholder="Type your question"
                    className="w-full py-2 px-3 rounded-custom bg-[#EAEBEC] placeholder:text-black placeholder:text-[12px]"
                  />
                </div>
                <div className="option-a">
                  <p className="text-xs font-medium mb-2">Option C</p>
                  <input
                    type="text"
                    placeholder="Type your question"
                    className="w-full py-2 px-3 rounded-custom bg-[#EAEBEC] placeholder:text-black placeholder:text-[12px]"
                  />
                </div>
              </div>
            </div>
            <div className="set-question my-5">
              <button className="w-full py-1.5 rounded-custom bg-[#D1D5DB] text-xs font-semibold">
                SET
              </button>
            </div>
            <div className="toggle-obj-theory flex items-center gap-3">
              <button className="w-full bg-mainGrey py-2 text-xs font-semibold uppercase">
                objective
              </button>
              <button className="w-full bg-[#D1D5DB] py-2 text-xs font-semibold uppercase">
                theory
              </button>
            </div>
            <div className="questions mt-5 pt-5 pb-2 px-2.5 bg-[#EAEBEC] rounded-t-custom">
              <div className="border-b-[0.5px] border-black py-1 flex justify-between items-center uppercase text-xs text-mainBlack font-medium">
                <h4>question 4</h4>
                <div className="flex gap-3">
                  <h4>Answer: A</h4>
                  <Icon
                    icon="streamline:recycle-bin-2"
                    width="14"
                    height="14"
                    className="text-[#E41D1D] cursor-pointer"
                    onClick={() => setModal(true)}
                  />
                </div>
              </div>
              <div className="text-xs mt-3 leading-relaxed">
                <p>
                  Students taking the exam can pre-select the duration for
                  practice, but not beyond the default exam time. They can also
                  pre-select and increase the number of questions beyond the
                  default limit. For example, a student may choose to practice
                  for 5 minutes with 5 questions or attempt more questions
                  within a shorter time frame, encouraging quick thinking and
                  reading skills. The pass mark is set at 70, while a score of
                  85 and above is considered excellent.
                </p>
              </div>
            </div>
          </div>
        }
        rightContent={
          <div className="dark:bg-darkMode bg-mainWhite  scroll sm:shadow-custom-1 dark:text-lightGrey rounded-lg sm:p-3 sm:m-0.5 max-sm:mt-4">
            <div className="select-department mt-4">
              <h3 className="text-xs text-mainBlack uppercase font-medium mb-3">
                Select a department
              </h3>
              <select
                name=""
                id=""
                className="w-full bg-mainWhite py-2 px-1.5 rounded-custom placeholder:text-black text-xs"
              >
                <option value="">Science</option>
                <option value="">Commercial</option>
                <option value="">Arts</option>
              </select>
            </div>
            <div className="subjects-topic mt-6">
              <div className="flex justify-between font-medium text-[14px] uppercase">
                <p>Subjects</p>
                <p>topics</p>
              </div>
              <div className="mt-2 space-y-1">
                <div className="capitalize py-2 px-1.5 rounded-custom bg-mainWhite flex items-center justify-between text-[10px]">
                  <p>English</p>
                  <p>73</p>
                </div>
                <div className="capitalize py-2 px-1.5 rounded-custom flex items-center justify-between text-[10px]">
                  <p>mathematics</p>
                  <p>64</p>
                </div>
                <div className="capitalize py-2 px-1.5 rounded-custom flex items-center justify-between text-[10px]">
                  <p>physics</p>
                  <p>70</p>
                </div>
                <div className="capitalize py-2 px-1.5 rounded-custom flex items-center justify-between text-[10px]">
                  <p>chemistry</p>
                  <p>64</p>
                </div>
                <div className="capitalize py-2 px-1.5 rounded-custom flex items-center justify-between text-[10px]">
                  <p>biology</p>
                  <p>64</p>
                </div>
                <div className="capitalize py-2 px-1.5 rounded-custom flex items-center justify-between text-[10px]">
                  <p>agriculture</p>
                  <p>64</p>
                </div>
                <div className="capitalize py-2 px-1.5 rounded-custom flex items-center justify-between text-[10px]">
                  <p>geography</p>
                  <p>64</p>
                </div>
                <div className="capitalize py-2 px-1.5 rounded-custom flex items-center justify-between text-[10px]">
                  <p>further mathematics</p>
                  <p>64</p>
                </div>
              </div>
            </div>
          </div>
        }
      />

      {modal && <Modal setToggleModal={setModal} />}
    </DashboardLayout>
  );
}

const Modal = ({ setToggleModal }) => {
  return (
    <>
      <div
        className="w-full h-full bg-[#121D244D] absolute top-0 left-0 z-40 cursor-pointer flex items-center justify-center"
        onClick={() => setToggleModal(false)}
      ></div>
      <div className="p-4 w-[335px] py-7 bg-white dark:bg-darkMode dark:text-lightGrey shadow-custom-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 border-[0.5px] border-[#FBFAFA] border-solid rounded-xl">
        <p className="text-xs leading-6 mb-3">
          Do you want to delete question 4?
        </p>
        <div className="flex items-center gap-3">
          <button className="w-full rounded-md py-1 bg-[#EAEBEC] text-[12px] font-medium">
            Yes
          </button>
          <button className="w-full rounded-md py-1 bg-[#EAEBEC] text-[12px] font-medium">
            No
          </button>
        </div>
      </div>
    </>
  );
};
