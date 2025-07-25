import React, { useState } from "react";
import DashboardLayout from "../../(Dashboard)/DashboardLayout";
import Title from "../../(Dashboard)/Components/Title";
import StudentProfileList from "../../(Dashboard)/Components/StudentProfileList";
import { Icon } from "@iconify/react/dist/iconify.js";
import TwoColumnLayout from "../../Components/TwoColumnLayout";
import RenewPayment from "../../(Dashboard)/Components/RenewPayment";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

export default function ParentPayment() {
  const [payment, setPayment] = useState(false);
  const [training, setTraining] = useState(false);
  const [addStudent, setAddStudent] = useState(false);
  const paymentCategories = [
    {
      title: "ADD STUDENT",
      onClick: () => {
        setAddStudent(true);
        setTraining(false);
        setPayment(false);
      },
    },
    {
      title: "RENEW PAYMENT",
      onClick: () => {
        setPayment(true);
        setAddStudent(false);
        setTraining(false);
      },
    },
    {
      title: "ADD / REMOVE TRAINING",
      onClick: () => {
        setTraining(true);
        setAddStudent(false);
        setPayment(false);
      },
    },
  ];
  const handleGoBack = () => {
    setAddStudent(false);
    setTraining(false);
    setPayment(false);
  };

  return (
    <DashboardLayout>
      {payment ? (
        <CheckIsRewnewPayment
          handleGoBack={handleGoBack}
          payment={payment}
          setPayment={setPayment}
        />
      ) : training ? (
        <CheckIsTraining
          handleGoBack={handleGoBack}
          setTraining={setTraining}
          training={training}
        />
      ) : addStudent ? (
        <CheckAddStudent handleGoBack={handleGoBack} addStudent={addStudent} />
      ) : (
        // This is the default TwoColumnLayout when none of the above are true
        <TwoColumnLayout
          leftContent={
            <div className="xl:px-4 p-2.5 h-full space-y-7">
              <Title title={"PAYMENT"} />
              <div className={`space-y-2 `}>
                {paymentCategories.map((items, i) => (
                  <button
                    key={i}
                    onClick={items.onClick}
                    className="flex items-center justify-between bg-mainWhite text-mainBlack dark:bg-whiteFade dark:text-lightGrey shadow-custom-1 p-3.5 rounded-lg w-full"
                  >
                    <p className="text-xs font-semibold">{items.title}</p>
                  </button>
                ))}
              </div>
            </div>
          }
          rightContent={<StudentProfileList />}
        />
      )}
    </DashboardLayout>
  );
}

const CheckIsRewnewPayment = ({ payment, setPayment, handleGoBack }) => {
  return (
    payment && (
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <div className="xl:px-4 p-2.5 h-full space-y-7">
          <Title title={"PAYMENT"} />

          <RenewPayment handleGoBack={handleGoBack} setPayment={setPayment} />
        </div>
      </PerfectScrollbar>
    )
  );
};
const CheckIsTraining = ({ handleGoBack, training }) => {
  return (
    training && (
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <div className="xl:px-4 p-2.5 h-full space-y-7">
          <Title title={"PAYMENT"} />
          <Training handleGoBack={handleGoBack} />
        </div>
      </PerfectScrollbar>
    )
  );
};
const CheckAddStudent = ({ addStudent, handleGoBack }) => {
  return (
    addStudent && (
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <div className="xl:px-4 p-2.5 h-full space-y-7">
          <Title title={"PAYMENT"} />
          <AddNewStudent handleGoBack={handleGoBack} />;
        </div>
      </PerfectScrollbar>
    )
  );
};
const AddNewStudent = ({ handleGoBack }) => {
  return (
    <div className="flex items-center mb-5 text-mainBlack dark:text-lightGrey">
      <button onClick={handleGoBack}>
        <Icon
          icon="iconamoon:arrow-left-2-light"
          width="35"
          height="35"
          className="cursor-pointer -ml-[8px]"
        />
      </button>
      <h3 className="text-xs font-semibold">Add Students</h3>
    </div>
  );
};
const Training = ({ handleGoBack }) => {
  const [toggleModal, setToggleModal] = useState(false);
  return (
    <>
      <div className="flex items-center mb-5 text-mainBlack dark:text-lightGrey">
        <button onClick={handleGoBack}>
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

const Modal = ({ setToggleModal }) => {
  return (
    <>
      <div
        className="overflow-hidden w-full h-[-webkit-fill-available]  bg-[#121D244D] absolute top-0 left-0 z-40 cursor-pointer flex items-center justify-center"
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
