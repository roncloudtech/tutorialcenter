// The select department section component

import { useState } from "react";
import GoBack from "./GoBackBtn";

// This component allows the user to select a department for their examination
const SelectDepartment = ({
  setState,
  handleBackBtn,
  setSelectedDepartment,
}) => {
  const [department, setDepartment] = useState([
    {
      name: "Science",
      selected: false,
    },
    {
      name: "Arts",
      selected: false,
    },
    {
      name: "Commercial",
      selected: false,
    },
  ]);

  const [nextPageErr, setNextPageErr] = useState(false);
  // Handle the selection of a department
  // This function toggles the selected state of the clicked department and deselects others
  const handleSelectedDepartment = (index) => {
    setDepartment((prev) =>
      prev.map((item, i) => {
        if (index === i) {
          // Toggle the selected state of the clicked department
          return { ...item, selected: !item.selected };
        } else {
          return { ...item, selected: false }; // Deselect other departments
        }
      })
    );
  };
  // Get the selected department name
  const selectedDepartment = department.find((item) => item.selected);
  const handleNextPage = () => {
    if (!selectedDepartment) return setNextPageErr(true);
    setNextPageErr(false);
    setSelectedDepartment(selectedDepartment.name);
    setState((prev) => ({
      ...prev,
      isDepartment: false,
      isSubject: true,
    }));
  };
  return (
    <>
      <GoBack onClick={handleBackBtn} />
      <div className="flex flex-col items-center justify-center mt-4">
        <div className="text-center font-medium">
          <h2 className="text-2xl font-bold mb-8">Select Department</h2>
          <div className="w-[448px] max-w-full bg-[#FBFAFA] shadow-lg p-8 rounded-lg mb-2">
            <p className="text-sm mb-7">
              Select a department to progress with your registration
            </p>
            <div className="w-full bg-primary p-2.5 text-white text-sm font-semibold flex justify-between items-center rounded-t-lg">
              <span>Examination</span>
              <span>Department</span>
            </div>
            <div className="mt-7 flex flex-col items-center gap-3">
              {department.map((items, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectedDepartment(i)}
                  className={`${
                    items.selected
                      ? "text-white bg-green-600 uppercase font-semibold"
                      : "bg-[#E336290D]"
                  } flex items-center text-sm text-center justify-center py-3 px-5  rounded-lg w-full uppercase`}
                >
                  {items.name}
                </button>
              ))}
            </div>
            <button
              onClick={handleNextPage}
              className="mt-6 w-full py-3 px-5 rounded-lg text-sm text-white bg-gradient-to-r from-[#09314F] to-[#E83831]"
            >
              Continue
            </button>
            {nextPageErr && (
              <span className="text-red-500 text-[10px] mt-4 block">
                Please select at least one
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectDepartment;
