import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export default function Pagination({
  totalPages,
  perPage,
  currentPage,
  setCurrentPage,
}) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPages / perPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center gap-2 text-lightGrey">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="flex items-center gap-2 dark:bg-whiteFade rounded-lg px-3 py-2 text-xs"
        >
          <Icon
            icon="teenyicons:arrow-solid"
            width="14"
            height="14"
            className="-rotate-45"
          />
          Prev
        </button>
        <div className=" flex items-center gap-2">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-2 rounded-lg text-xs ${
                currentPage === page
                  ? "bg-mainBlue text-mainWhite dark:bg-ascent dark:text-black"
                  : "bg-whiteFade dark:bg-whiteFade text-lightGrey"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          disabled={currentPage === pages.length}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="flex items-center gap-2 dark:bg-whiteFade rounded-lg px-3 py-2 text-xs"
        >
          Next
          <Icon
            icon="teenyicons:arrow-solid"
            width="14"
            height="14"
            className="rotate-[135deg]"
          />
        </button>
      </div>
      <div className="flex items-center gap-2 dark:bg-whiteFade dark:text-lightGrey rounded-lg px-3 py-2 text-xs">
        {perPage} / page
      </div>
    </div>
  );
}
