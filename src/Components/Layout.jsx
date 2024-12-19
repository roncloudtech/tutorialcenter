import React from "react";
import { Link } from "react-router-dom";

export default function Layout({ title, semititle, desc, Sdesc, btnTitle, btnPath }) {
  return (
    <>
      <div className="bg-gradient-to-r from-[#09314F] to-[#E83831]">
        <div className="Container">
          <div className="area-wrapper">
            <div className="py-6">
              <div className="blockContent mb-14">
                <h2 className="font-bold text-white uppercase lg:text-xl text-base mb-5">{title}</h2>
                <h4 className="text-ascent text-sm font-semibold mb-3">{semititle}</h4>
                <p className="text-white text-sm leading-6 mb-4 max-w-[500px]">{desc}</p>
                <p className="text-xs text-ascent">{Sdesc}</p>
              </div>
              <div className="">
                <Link className="text-white text-xs bg-sencondary px-10 py-3 rounded-md " to={btnPath}>{btnTitle}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
