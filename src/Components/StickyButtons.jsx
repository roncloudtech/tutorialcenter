import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import LiveChat from "../Pages/LiveChat";

export default function StickyButtons() {
  return (
    <>
      <div className="fixed top-[60%] right-8 z-[100] space-y-3">
        {/* CHAT WITH US */}
        <Link
          to={"/live-chat"}
          className="w-[115px] py-3 bg-[#EAEBEC] shadow-2xl rounded-3xl flex flex-col items-center justify-center"
        >
          <div className="mb-1 w-[29px] h-[29px] bg-primary rounded-full flex justify-center items-center">
            <Icon
              icon="tabler:message-chatbot"
              width="18"
              height="18"
              className="text-ascent"
            />
          </div>
          <span className="text-ascent text-[10px] font-semibold">
            Chat with us{" "}
          </span>
        </Link>
        {/* Back To Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-[95px] py-3 bg-[#EAEBEC] shadow-2xl rounded-3xl flex flex-col items-center justify-center"
        >
          <div className="mb-2 w-[29px] h-[29px] bg-primary rounded-full flex justify-center items-center">
            <Icon
              icon="tabler:message-chatbot"
              width="18"
              height="18"
              className="text-ascent"
            />
          </div>
          <span className="text-ascent text-[10px] font-semibold">
            Back to top{" "}
          </span>
        </button>
      </div>
      {/* <LiveChat /> */}
    </>
  );
}
