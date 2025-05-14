import React from "react";
import PenIcon from "../../Assets/Vector.png";
import BookIcon from "../../Assets/emojione_books.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function ProgramCard({
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
      <div className="sm:w-[450px] w-full ">
        <div className="w-full h-[150px] relative bg-[#A9C1D3] rounded-t-xl">
          <div className="absolute -bottom-6 right-4 bg-sencondary w-10 h-10 rounded-full flex items-center justify-center">
            <img className="max-w-4" src={PenIcon} alt="" />
          </div>
        </div>
        <div className="shadow-lg p-5 pt-6 rounded-b-xl">
          <div className="flex gap-2 mb-5">
            <img className="max-w-3 object-contain" src={BookIcon} alt="" />
            <span className="text-xs text-ascent">{subject}</span>
          </div>
          <h2 className="text-base font-semibold mb-4 text-primary">{title}</h2>
          <div className="flex gap-3 [&_li]:text-[5px] [&_li]:pb-3  mb-6">
            <div className="duration">
              <p className=" text-ascent text-sm font-semibold mb-4">
                Duration:
              </p>
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
            <div className="includes">
              <p className="text-sm text-ascent font-semibold mb-3">
                Includes:
              </p>
              <ul className="border-l-2 border-sencondary pl-2">
                <li>{topic1}</li>
                <li>{topic2}</li>
                <li>{topic3}</li>
                <li className="!pb-0">{topic4}</li>
              </ul>
            </div>
          </div>
          <Link
            to={path}
            className="flex justify-end gap-1 text-sencondary font-semibold text-xs"
          >
            <span>Learn More</span>{" "}
            <Icon
              icon="lets-icons:arrow-right-light"
              width="20"
              height="20"
              className=""
            />
          </Link>
        </div>
      </div>
    </>
  );
}
