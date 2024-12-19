import React from "react";
import PenIcon from "../Assets/Vector.png";
import BookIcon from "../Assets/emojione_books.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Card({
  subject,
  title,
  month,
  quarter,
  year,
  topic1,
  topic2,
  topic3,
  topic4,
  path,
}) {
  return (
    <>
      <div className="w-[440px] ">
        <div className="w-full h-[170px] relative bg-[#A9C1D3] rounded-t-xl">
          <div className="absolute -bottom-6 right-4 bg-sencondary w-12 h-12 rounded-full flex items-center justify-center">
            <img className="max-w-6" src={PenIcon} alt="" />
          </div>
        </div>
        <div className="shadow p-5 pt-10 rounded-b-xl">
          <div className="flex gap-2 mb-5">
            <img className="max-w-5 object-contain" src={BookIcon} alt="" />
            <span className="text-sm text-ascent">{subject}</span>
          </div>
          <h2 className="text-xl font-semibold mb-5 text-primary">{title}</h2>
          <div className="flex gap-3 [&_li]:text-[14px] [&_li]:pb-3  mb-8">
            <div className="">
              <p className=" text-ascent font-semibold mb-4">Duration:</p>
              <ul className="[&_li]:text-nowrap [&_span]:text-ascent [&_span]:font-semibold [&_span]:pl-3 flex flex-col items-center">
                <li>
                  Monthly: <span>₦{month}</span>
                </li>
                <li>
                  Quarterly: <span>₦{quarter}</span>
                </li>
                <li>
                  Annualy: <span>₦{year}</span>
                </li>
              </ul>
            </div>
            <div className="">
              <p className=" text-ascent font-semibold mb-4">Includes:</p>
              <ul className="border-l-2 border-sencondary pl-2">
                <li>{topic1}</li>
                <li>{topic2}</li>
                <li>{topic3}</li>
                <li className="!pb-0">{topic4}</li>
              </ul>
            </div>
          </div>
          <Link to={path} className="flex justify-end gap-2 text-sencondary font-semibold text-sm">
            <span>Learn More</span>{" "}
            <Icon
              icon="lets-icons:arrow-right-light"
              width="24"
              height="24"
              className=""
            />
          </Link>
        </div>
      </div>
    </>
  );
}
