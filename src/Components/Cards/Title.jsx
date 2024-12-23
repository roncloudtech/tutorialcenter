import React from "react";
import icon from "../../Assets/Group 1000001500.png";
export default function Title({title,left}) {
  return (
    <>
      <div className="bg-primary py-3 relative">
        <h1 className="text-center text-white font-bold text-lg uppercase">
          {title}
        </h1>
        <div className={`absolute -bottom-[75px] ${left ? 'left-14' : 'right-14'}`}>
          <img src={icon} alt="" className="max-w-14 relative z-10 bottom-2" />
          <div className="w-[78px] h-5 rounded-3xl bg-primary absolute -top-4 -left-1"/>
        </div>
      </div>
    </>
  );
}
