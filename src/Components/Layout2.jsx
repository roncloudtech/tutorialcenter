import React from "react";
import { Link } from "react-router-dom";

export default function Layout2({
  children,
  btnTitle,
  btnPath,
  reverse,
  bgImage,
}) {
  return (
    <div
      className={`${
        reverse ? "flex-row-reverse" : ""
      } w-screen lg:flex overflow-y-hidden scroll`}
    >
      <div className="lg:w-[57%] w-full h-screen bg-white overflow-y-auto">
        {children}
      </div>
      <div
        className="hidden lg:block w-[43%] bg-primary relative bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {btnTitle && (
          <div
            className={`absolute ${
              reverse ? " -right-1 rounded-l-3xl" : " -left-1 rounded-r-3xl"
            } bottom-16 w-20 h-8 bg-white  `}
          >
            <Link
              to={btnPath}
              className="text-xs text-primary font-semibold w-full h-full flex justify-center items-center"
            >
              {btnTitle}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
