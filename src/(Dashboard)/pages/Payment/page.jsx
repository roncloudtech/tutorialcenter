import React, { useState } from "react";
import DashboardLayout from "../../DashboardLayout";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function PaymentPage() {
  const [payment, setPayment] = useState(true);
  const [training, setTraining] = useState(true);

  return (
    <>
      <DashboardLayout>
        <div className="px-5">
          {/* hearder */}
          <div className="flex justify-between items-center py-2 rounded-md mb-5">
            <h3 className="uppercase text-mainBlue dark:text-lightGrey font-semibold">
              payment
            </h3>
            <div className="w-9 h-9 flex justify-center items-center bg-mainBlue text-lightGrey dark:bg-lightGrey dark:text-mainBlue rounded-md">
              <Icon
                icon="iconoir:bell-notification-solid"
                width="24"
                height="24"
              />
            </div>
          </div>
          {payment ? (
            <div className={`space-y-2 ${training ? "" : "hidden"}`}>
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
                <p className="text-xs font-semibold">ADD / REMOVE TRAINING </p>
              </button>
            </div>
          ) : (
            <RenewPayment setPayment={setPayment} />
          )}
          {training ? "" : <Training setTraining={setTraining} />}
        </div>
      </DashboardLayout>
    </>
  );
}

const RenewPayment = ({ setPayment }) => {
  const [isTransfer, setIsTransfer] = useState(false);
  return (
    <>
      <div className="flex items-center mb-5 text-mainBlack dark:text-lightGrey">
        <button onClick={() => setPayment(true)}>
          <Icon
            icon="iconamoon:arrow-left-2-light"
            width="35"
            height="35"
            className="cursor-pointer -ml-[8px]"
          />
        </button>
        <h3 className="text-xs font-semibold">RENEW PAYMENT</h3>
      </div>
      <div className="mb-5 dark:text-lightGrey">
        <p className="text-sm font-medium mb-1.5">Pay With:</p>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div
              onClick={() => setIsTransfer(false)}
              className={`cursor-pointer  w-[12px] h-[12px] ${
                isTransfer
                  ? "ring-mainGrey"
                  : "ring-mainBlack dark:ring-lightGrey"
              } group ring-[2px] rounded-full flex items-center justify-center`}
            >
              <div
                className={`w-[8px] h-[8px] ${
                  isTransfer ? "" : "bg-mainBlack dark:bg-lightGrey"
                } rounded-full`}
              />
            </div>
            <span className="text-xs font-medium">Card</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              onClick={() => setIsTransfer(true)}
              className={`cursor-pointer w-[12px] h-[12px]  ${
                isTransfer
                  ? "ring-mainBlack dark:ring-lightGrey"
                  : "ring-mainGrey"
              }  group ring-[2px] rounded-full flex items-center justify-center`}
            >
              <div
                className={`w-[8px] h-[8px] ${
                  isTransfer ? "bg-mainBlack dark:bg-lightGrey" : ""
                } rounded-full`}
              />
            </div>
            <span className="text-xs ">Transfer</span>
          </div>
        </div>
      </div>
      {!isTransfer ? <CardDetails /> : <TransferDetails />}
    </>
  );
};

const Training = ({ setTraining }) => {
  const [toggleModal, setToggleModal] = useState(false);
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

      {/* Modal */}
      {toggleModal && <Modal setToggleModal={setToggleModal} />}
    </>
  );
};
const CardDetails = () => {
  return (
    <div className="CARD DETAILS text-mainBlack dark:text-lightGrey">
      <p className="text-sm font-medium mb-2 dark:text-lightGrey text-mainBlack">
        Select Card
      </p>
      <div className="flex gap-4">
        <div className="w-[31%] bg-lightGrey p-3.5 rounded-xl flex justify-between items-center">
          <div className="flex gap-2">
            <div className="flex items-center justify-center">
              <div className="w-[18px] h-[18px] bg-[#ED0006] rounded-full translate-x-2.5" />
              <div className="w-[18px] h-[18px] bg-[#F9A000] rounded-full ml-1 " />
            </div>
            <div className="visa text-[#09314F80]">
              <p className="text-xs text-darkMode">Visa ending in 1234</p>
              <span className="text-[13px]">Expiry 06/2026</span>
              <Icon
                icon="nrk:more"
                width="20"
                height="20"
                className="rotate-90"
              />
            </div>
          </div>
          <Icon
            icon="iconamoon:arrow-left-2-light"
            width="25"
            height="25"
            className="text-[#09314F80] rotate-180"
          />
        </div>
      </div>
      <p className="text-sm my-2.5">Add Card</p>
      <label htmlFor="card number" className="text-xs font-medium w-full">
        Card Number
        <input
          type="number"
          placeholder="1234  5678  9101  1121"
          className="ring-[1.5px] ring-[#ACACAC] text-mainLightBlue rounded-md w-full p-1.5 mt-1"
        />
      </label>
      <div className="flex items-center gap-3 mt-5 mb-3">
        <label htmlFor="card number" className="text-xs font-medium w-full">
          Expiration Date
          <input
            type="date"
            className="ring-[1.5px] ring-[#ACACAC] text-mainLightBlue rounded-md w-full p-1.5 mt-1"
          />
        </label>
        <label htmlFor="card number" className="text-xs font-medium w-full">
          CVV
          <input
            type="number"
            placeholder="123"
            className="ring-[1.5px] ring-[#ACACAC] text-mainLightBlue rounded-md w-full p-1.5 mt-1"
          />
        </label>
      </div>
      <label className="text-sm text-mainGrey w-full flex gap-2">
        <input type="checkbox" />
        Save card details
      </label>
      <div className="mt-5">
        <button className="dark:bg-darkMode bg-mainBlue dark:text-lightGrey text-mainWhite shadow-custom-1 w-full p-2.5 text-xs font-semibold rounded-md">
          MAKE A PAYMENT
        </button>
        <p className="text-[14px] dark:text-lightGrey text-mainGrey mt-2">
          Your personal data will be used to process your order, support your
          experience throughout this application, and for other purposes
          described in our privacy policy.
        </p>
      </div>
    </div>
  );
};
const TransferDetails = () => {
  return (
    <>
      {/* TRANSFER DETAILS */}
      <div className="flex flex-col justify-center items-center mb-6">
        <p className="text-xs dark:text-mainGrey">
          Transfer{" "}
          <span className="font-semibold dark:text-lightGrey text-mainGrey">
            {" "}
            ₦13,500
          </span>{" "}
          to:
        </p>
        <div className="font-semibold mb-3 mt-2 text-mainBlack dark:text-lightGrey">
          <h4 className="text-sm">Polaris Bank</h4>
          <h2 className="text-base">0123456781</h2>
        </div>
        <p className="text-[13px] text-mainGrey">
          Expire in{" "}
          <span className="dark:text-mainRed text-mainBlack mx-0.5">10:00</span>{" "}
          minutes
        </p>
      </div>
      <button className="w-full py-2.5 mb-3 bg-mainBlue text-mainWhite dark:text-lightGrey dark:bg-darkMode shadow-custom-1 rounded-md text-xs font-semibold">
        CONFIRM PAYMENT
      </button>
      <span className="text-xs dark:text-lightGrey text-mainGrey">
        Your personal data will be used to process your order, support your
        experience throughout this application, and for other purposes described
        in our privacy policy.
      </span>
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
