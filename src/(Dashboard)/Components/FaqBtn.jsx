import { Icon } from "@iconify/react/dist/iconify.js";

export default function FaqBtn({ faq, toggleVisible, index }) {
  return (
    <div
      className={`${
        faq.open ? "dark:bg-lightGrey bg-mainBlue rounded-xl pb-2" : ""
      } `}
      key={index}
    >
      <button
        onClick={() => toggleVisible(index)}
        className="w-full h-full flex justify-between items-center p-3 relative"
      >
        <div className="absolute top-1/2 -translate-y-1/2 right-[9.6px]">
          <Icon
            icon="hugeicons:arrow-up-01"
            width="25"
            height="25"
            className={`${
              faq.open ? "rotate-180 text-ascent" : "rotate-90"
            } transition-drop-down `}
          />
        </div>
        <span
          className={`${
            faq?.open ? "text-ascent" : "dark:text-lightGrey"
          } text-[14px] font-semibold pr-6`}
        >
          {faq.questions}
        </span>
      </button>
      <div
        className={`transition-drop-down ${
          faq.open ? "max-h-full px-1.5" : "max-h-0 opacity-0 invisible"
        } overflow-y-hidden`}
      >
        <p className="text-[12px] pl-2 dark:text-mainBlack text-mainWhite">
          {faq.answers}
        </p>
      </div>
    </div>
  );
}
