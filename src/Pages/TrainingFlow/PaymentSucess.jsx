// The payment section component

import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

// This component displays the payment success message and options
const SuccessPaymentSection = ({ selectedCourses }) => {
  console.log("Selected Courses:", selectedCourses);
  return (
    <>
      <div className="flex flex-col items-center justify-center m-4">
        <div className="max-w-[510px] w-full px-8 py-5 rounded-lg shadow-lg bg-[#FBFAFA] flex flex-col items-center justify-center">
          <div className="w-[120px] h-[120px] bg-[#E336290D] rounded-full flex items-center justify-center">
            <div className="w-[80px] h-[80px] bg-mainBlue text-white rounded-full flex items-center justify-center">
              <Icon icon="mingcute:check-fill" width="45" height="45" />
            </div>
          </div>
          <h2 className="text-2xl text-mainBlue font-semibold mt-4">
            Payment Successful!
          </h2>
          <div className="mt-9 font-medium space-y-1">
            <p className="text-base text-mainBlue">You now have access to</p>
            {selectedCourses.map((items, i) => (
              <span
                key={i}
                className="text-sm text-ascent block text-center capitalize"
              >
                {items.courseName} - {items.duration}
              </span>
            ))}
          </div>
          <Link
            to={"/dashboard"}
            className="bg-gradient-to-r from-[#09314F] to-[#E83831] text-white w-full text-center p-3 rounded-lg mt-9"
          >
            Go To Dashboard
          </Link>
        </div>
      </div>
    </>
  );
};
export default SuccessPaymentSection;
