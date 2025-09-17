import React, { useState } from "react";
import DashboardLayout from "../../DashboardLayout";
import { Icon } from "@iconify/react/dist/iconify.js";
import Title from "../../Components/Title";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import RenewPayment from "../../Components/RenewPayment";

export default function PaymentPage() {
  const [payment, setPayment] = useState(true);
  const [training, setTraining] = useState(true);
  const handleGoback = () => {
    setPayment(true);
    setTraining(true);
  };
  const [toggleModal, setToggleModal] = useState(false);
  return (
    <>
      <DashboardLayout>
        <PerfectScrollbar options={{ suppressScrollX: true }}>
          <div className="xl:px-4 p-2.5 h-full scroll">
            <Title title={"PAYMENT"} />
            {payment ? (
              <div
                className={`space-y-2 max-sm:my-3 ${training ? "" : "hidden"}`}
              >
                <button
                  onClick={() => setPayment(false)}
                  className="flex items-center justify-between bg-mainWhite text-mainBlack dark:bg-whiteFade dark:text-lightGrey shadow-custom-1 p-3.5 rounded-lg w-full"
                >
                  <p className="text-xs font-semibold">RENEW PAYMENT</p>
                </button>
                <button
                  onClick={() => setTraining(false)}
                  className="w-full flex items-center justify-between bg-mainWhite text-mainBlack dark:bg-whiteFade dark:text-lightGrey shadow-custom-1 p-3.5 rounded-lg"
                >
                  <p className="text-xs font-semibold">
                    ADD / REMOVE TRAINING{" "}
                  </p>
                </button>
              </div>
            ) : (
              <RenewPayment
                handleGoBack={handleGoback}
                setPayment={setPayment}
              />
            )}
            {training ? (
              ""
            ) : (
              <Training
                setTraining={setTraining}
                setToggleModal={setToggleModal}
              />
            )}
          </div>
        </PerfectScrollbar>
      </DashboardLayout>
      {/* Modal */}
      {toggleModal && <Modal setToggleModal={setToggleModal} />}
    </>
  );
}

const Training = ({ setTraining, setToggleModal }) => {
  return (
    <>
      <div className="flex items-center mb-5 text-mainBlack dark:text-lightGrey">
        <button onClick={() => setTraining(true)}>
          <Icon
            icon="iconamoon:arrow-left-2-light"
            width="35"
            height="35"
            className="cursor-pointer -ml-[8px]"
          />
        </button>
        <h3 className="text-xs font-semibold">ADD / REMOVE TRAINING </h3>
      </div>
      <h4 className="text-xs font-medium text-mainBlack dark:text-lightGrey">
        On-going Training{" "}
      </h4>
      <div className="mt-5 space-y-2 text-mainBlack dark:text-lightGrey text-xs font-semibold">
        <div className="bg-mainWhite dark:bg-whiteFade shadow-custom-1 p-3 rounded-md flex justify-between">
          <p>JAMB</p>
          <p>Weekly</p>
        </div>
        <div className="bg-mainWhite dark:bg-whiteFade shadow-custom-1 p-3 rounded-md flex justify-between">
          <p>WAEC</p>
          <p>Monthly</p>
        </div>
      </div>
      <button
        onClick={() => setToggleModal(true)}
        className="mt-7 text-sm font-medium text-mainWhite bg-mainBlue dark:bg-darkMode dark:text-lightGrey shadow-custom-1 py-2 w-full rounded-md"
      >
        Remove
      </button>
    </>
  );
};

const Modal = ({ setToggleModal }) => {
  return (
    <>
      <div
        className="w-full h-[-webkit-fill-available] bg-[#121D244D] absolute top-0 left-0 z-40 cursor-pointer flex items-center justify-center"
        onClick={() => setToggleModal(false)}
      ></div>
      <div className="p-4 w-[335px] h-[171px] bg-white shadow-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 border-[0.5px] border-[#D1D5DB] border-solid rounded-xl">
        <p className="text-xs leading-5 mb-3 font-medium">
          Do you want to remove JAMB from your on going training?
        </p>
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
  );
};
