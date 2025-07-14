import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export default function TableSearch() {
  return (
    <form className="w-[300px] min-h-[40px] p-3 rounded-2xl bg-whiteFade text-lightGrey flex items-center justify-between">
      <input
        type="text"
        name="search"
        className="text-xs placeholder:text-xs w-full pr-4"
        placeholder="Search by name or class"
      />
      <Icon icon="tabler:search" width="24" height="24" fill="#e6e9ec" />
    </form>
  );
}
