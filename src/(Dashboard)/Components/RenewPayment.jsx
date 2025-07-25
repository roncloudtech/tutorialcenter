import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

export default function RenewPayment({ setPayment, handleGoBack }) {
  const [cardPayment, setCardPayment] = useState(true);
  const [transferPayment, setTransferPayment] = useState(false);
  const [cryptoPayment, setCryptoPayment] = useState(false);
  const handleCardState = () => {
    setCardPayment(true);
    setCryptoPayment(false);
    setTransferPayment(false);
  };
  const handleTransferState = () => {
    setTransferPayment(true);
    setCardPayment(false);
    setCryptoPayment(false);
  };
  const handleCrptoState = () => {
    setCryptoPayment(true);
    setCardPayment(false);
    setTransferPayment(false);
  };
  return (
    <>
      <div className="max-sm:my-3 flex items-center mb-5 text-mainBlack dark:text-lightGrey">
        <button onClick={handleGoBack}>
          <Icon
            icon="iconamoon:arrow-left-2-light"
            width="35"
            height="35"
            className="cursor-pointer -ml-[8px]"
          />
        </button>
        <h3 className="text-xs font-semibold">RENEW PAYMENT</h3>
      </div>
      <div className="my-7 dark:text-lightGrey">
        <p className="text-sm font-medium my-2.5">Pay With:</p>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <TogglePaymentState
              paymentState={cardPayment}
              onClick={handleCardState}
            />
            <span className="text-xs font-medium">Card</span>
          </div>
          <div className="flex items-center gap-2">
            <TogglePaymentState
              paymentState={transferPayment}
              onClick={handleTransferState}
            />
            <span className="text-xs ">Transfer</span>
          </div>
          <div className="flex items-center gap-2">
            <TogglePaymentState
              paymentState={cryptoPayment}
              onClick={handleCrptoState}
            />
            <span className="text-xs ">Crypto</span>
          </div>
        </div>
      </div>
      <CardDetails cardPayment={cardPayment} />
      <TransferDetails transferPayment={transferPayment} />
      <CryptoDetails cryptoPayment={cryptoPayment} />
    </>
  );
}

const TogglePaymentState = ({ paymentState, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer  w-[12px] h-[12px] ${
        paymentState
          ? "ring-mainBlack dark:ring-lightGrey cursor-text"
          : "ring-mainGrey"
      } group ring-[2px] rounded-full flex items-center justify-center`}
    >
      <div
        className={`w-[8px] h-[8px] ${
          paymentState ? "bg-mainBlack dark:bg-lightGrey" : ""
        } rounded-full`}
      />
    </button>
  );
};

const CardDetails = ({ cardPayment }) => {
  return (
    cardPayment && (
      <div
        className={`CARD DETAILS text-mainBlack dark:text-lightGrey w-full scroll`}
      >
        <p className="text-sm font-medium mb-2 dark:text-lightGrey text-mainBlack">
          Select Card
        </p>
        <div className="flex gap-4">
          <div className="sm:w-[31%] bg-lightGrey p-3.5 rounded-xl flex justify-between items-center">
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
            className="ring-[1.5px] ring-[#ACACAC] text-mainLightBlue rounded-md w-full p-2.5 my-2"
          />
        </label>
        <div className="flex items-center gap-3 mt-5 mb-3">
          <label htmlFor="card number" className="text-xs font-medium w-full">
            Expiration Date
            <input
              type="date"
              className="ring-[1.5px] ring-[#ACACAC] text-mainLightBlue rounded-md w-full p-2.5 my-2"
            />
          </label>
          <label htmlFor="card number" className="text-xs font-medium w-full">
            CVV
            <input
              type="number"
              placeholder="123"
              className="ring-[1.5px] ring-[#ACACAC] text-mainLightBlue rounded-md w-full p-2.5 my-2"
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
    )
  );
};
const TransferDetails = ({ transferPayment }) => {
  return (
    transferPayment && (
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
            <span className="dark:text-mainRed text-mainBlack mx-0.5">
              10:00
            </span>{" "}
            minutes
          </p>
        </div>
        <button className="w-full py-2.5 mb-3 bg-mainBlue text-mainWhite dark:text-lightGrey dark:bg-darkMode shadow-custom-1 rounded-md text-xs font-semibold">
          CONFIRM PAYMENT
        </button>
        <span className="text-xs dark:text-lightGrey text-mainGrey">
          Your personal data will be used to process your order, support your
          experience throughout this application, and for other purposes
          described in our privacy policy.
        </span>
      </>
    )
  );
};
const CryptoDetails = ({ cryptoPayment }) => {
  return (
    cryptoPayment && (
      <>
        {/* CRYPTO DETAILS */}
        <div className="flex flex-col justify-center items-center mb-6">
          <p className="text-xs dark:text-mainGrey">
            Transfer{" "}
            <span className="font-semibold dark:text-lightGrey text-mainGrey">
              {" "}
              ₦13,500
            </span>{" "}
            to:
          </p>
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://developers.google.com/static/ml-kit/vision/barcode-scanning/images/qrcode.png"
              className="max-w-36"
              alt=""
            />
            <div className="dark:text-lightGrey text-center mt-4">
              <p className="text-sm font-semibold">
                Binance Smart Chain [BEP20]
              </p>
              <h2 className="text-lg font-bold">ASDFCEU3R83RDQHWN2920E</h2>
            </div>
          </div>
        </div>
        <button className="w-full py-2.5 mb-3 bg-mainBlue text-mainWhite dark:text-lightGrey dark:bg-darkMode shadow-custom-1 rounded-md text-xs font-semibold">
          CONFIRM PAYMENT
        </button>
        <span className="text-xs dark:text-lightGrey text-mainGrey">
          Your personal data will be used to process your order, support your
          experience throughout this application, and for other purposes
          described in our privacy policy.
        </span>
      </>
    )
  );
};
