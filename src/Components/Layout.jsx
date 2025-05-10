import React from "react";
import { Link } from "react-router-dom";

export default function Layout({
  title,
  semititle,
  desc,
  Sdesc,
  btnTitle,
  btnPath,
  imgPath,
}) {
  return (
    <>
      <div className="bg-[#09314F] grid grid-cols-2 items-center justify-center min-w-full">
        <div className="pl-[75px]">
          <div className="blockContent mb-14">
            <h2 className=" text-white header-title uppercase mb-5">{title}</h2>
            <h4 className="text-ascent text-sm font-semibold mb-3">
              {semititle}
            </h4>
            <p className="text-white text-sm leading-6 mb-4">{desc}</p>
            <p className="text-xs text-ascent">{Sdesc}</p>
          </div>
          <Link
            className="text-white text-xs bg-sencondary px-8 py-3 rounded-3xl "
            to={btnPath}
          >
            {btnTitle}
          </Link>
        </div>
        <div className="w-full h-full">
          <img src={imgPath} className="flex-1 w-full h-[500px] " alt="" />
        </div>
      </div>
    </>
  );
}
