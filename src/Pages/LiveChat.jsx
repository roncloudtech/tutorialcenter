import React from "react";
import Chat from "../(Dashboard)/Components/Chat";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function LiveChat() {
  return (
    <>
      <div className="w-full h-full bg-[#121D244D] absolute top-0 left-0 z-40 cursor-pointer flex items-center justify-center"></div>

      <div className="">
        <div className="flex gap-4">
          <Icon
            icon="iconamoon:arrow-left-2-light"
            width="35"
            height="35"
            className="cursor-pointer"
          />
          <h2 className="text-base font-extrabold">Customer Care</h2>
        </div>
        <Chat />
      </div>
    </>
  );
}
