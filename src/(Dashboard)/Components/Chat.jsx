import { useState } from "react";
import bookIcon from "../../Assets/Vector.png";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Chat() {
  return (
    <>
      {/* CHAT SECTION */}
      <div className="mt-3 space-y-3">
        {/* TEXT SECTION */}
        <div className="flex items-end justify-end gap-2">
          <button>
            <Icon
              icon="mage:message-round"
              width="16"
              height="16"
              style={{ color: " #000" }}
            />
          </button>
          <div className=" bg-white shadow-lg px-1 py-3  rounded-xl border-r-[4px] border-solid border-[#8695A0]">
            <span className="text-[12px]  text-[#292929CC]">
              This AI chatbot has been developed to optimize communication and
              simplify work processes, ultimately leading to smoother
              operations.
            </span>
          </div>
          <div className="w-full">
            <div className="w-[40px] h-[40px] bg-[#FFA78D] rounded-xl">
              <img
                src="https://s3-alpha-sig.figma.com/img/31d8/9130/64ba7f73a7f6a650e5e8ea2f3aa616a4?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dv6tbl1kY5X0pRehVV0e6KIqvFX3f6lY~SjxtPZNKF62Gyo~MeDPDCtsGMGIa6gvn~PsdDqI9XMQHyk7GejAy8SfmKqOtwBqMJ60~27CvgYQgGUmsBd44q4Zx3-QK2rVrWoG1saUU-vZ1LdS~Soi4gMzCHFyiVt3E~zOfSGLycfUku1akj7~7eonxrxV203fRjrq9zEon0nbmfdYrRDPn-xxn-An-LReenl1J-6CWAaG-bW5r4UQfqc~YM7rsHyiFgXUPL64MOPgITFWLGwttsIIo2NBBv7mz~d9O6wan5TKmCqRGeCrznpH5kscEBZgXksTJp603MQKYV2SvJfzzg__"
                alt=""
                className="w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="flex items-end justify-items-start gap-2">
          <div className="UserImage">
            <div className="w-[40px] h-[40px] bg-[#FFA78D] rounded-xl">
              <img
                src="https://s3-alpha-sig.figma.com/img/31d8/9130/64ba7f73a7f6a650e5e8ea2f3aa616a4?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dv6tbl1kY5X0pRehVV0e6KIqvFX3f6lY~SjxtPZNKF62Gyo~MeDPDCtsGMGIa6gvn~PsdDqI9XMQHyk7GejAy8SfmKqOtwBqMJ60~27CvgYQgGUmsBd44q4Zx3-QK2rVrWoG1saUU-vZ1LdS~Soi4gMzCHFyiVt3E~zOfSGLycfUku1akj7~7eonxrxV203fRjrq9zEon0nbmfdYrRDPn-xxn-An-LReenl1J-6CWAaG-bW5r4UQfqc~YM7rsHyiFgXUPL64MOPgITFWLGwttsIIo2NBBv7mz~d9O6wan5TKmCqRGeCrznpH5kscEBZgXksTJp603MQKYV2SvJfzzg__"
                alt=""
                className="w-full h-full rounded-xl"
              />
            </div>
          </div>
          <div className=" bg-white shadow-lg px-1 py-3  rounded-xl border-r-[4px] border-solid border-[#8695A0]">
            <span className="text-xs  text-[#292929CC]">
              This AI chatbot has been developed to optimize communication and
              simplify work processes, ultimately leading to smoother
              operations.
            </span>
          </div>
          <button>
            <Icon
              icon="mage:message-round"
              width="16"
              height="16"
              style={{ color: " #000" }}
            />
          </button>
        </div>
        {/* MESSAGE BUTTON */}
        <div className="flex items-center justify-between bg-[#EAEBEC] p-3 rounded-md">
          <div className="flex gap-4 items-center flex-1">
            <Icon
              icon="solar:pin-outline"
              width="20"
              height="20"
              style={{ color: "#4A4A4A82" }}
            />
            <input
              type="text"
              placeholder="Type a message"
              className="w-full h-full placeholder:text-xs"
            />
          </div>
          <div className="flex gap-4 items-center">
            <Icon
              icon="mdi:smiley-outline"
              width="20"
              height="20"
              style={{ color: "#00000078" }}
            />
            <div className="w-[35px] h-[35px] bg-[#8695A0] rounded-full flex items-center justify-center">
              <Icon
                icon="hugeicons:telegram"
                width="24"
                height="24"
                style={{ color: " #fff" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
