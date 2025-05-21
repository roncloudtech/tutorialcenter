import { Icon } from "@iconify/react/dist/iconify.js";

export default function FaqBtn({ faq, toggleVisible, index }) {
  return (
    <button
      className={`p-2 mb-2 ${
        faq.open ? "dark:bg-lightGrey bg-mainBlue rounded-xl" : ""
      } `}
      onClick={() => toggleVisible(index)}
      key={index}
    >
      <div className="w-full h-full flex items-center">
        <Icon
          icon="hugeicons:arrow-up-01"
          width="25"
          height="25"
          className={`${
            faq.open ? "rotate-180 text-ascent" : "rotate-90"
          } transition-drop-down `}
        />
        <span
          className={`${
            faq?.open ? "text-ascent" : "dark:text-lightGrey"
          } text-[14px] font-semibold `}
        >
          {faq.questions}
        </span>
      </div>
      <div
        className={`transition-drop-down ${
          faq.open ? "mt-2  max-h-full" : "max-h-0 overflow-y-hidden"
        }  `}
      >
        <p className="text-[12px] pl-2 dark:text-mainBlack text-mainWhite">
          {faq.answers}
        </p>
      </div>
    </button>
  );
}
