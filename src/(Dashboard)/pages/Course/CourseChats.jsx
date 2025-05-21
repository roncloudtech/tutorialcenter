import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import Chat from "../../Components/Chat";

export default function CourseChats() {
  return (
    <div className="pt-5 px-3 pb-2">
      <Link to="/courses" className="flex gap-2">
        <Icon icon="iconamoon:arrow-left-2-light" width="35" height="35" />
        <span>Back</span>
      </Link>
      <video
        src={null}
        className="relative w-full h-[260px] bg-[#EDF7ED] rounded-md my-3"
      >
        <div className="w-16 h-16 rounded-full bg-white absolute top-1/4 right-1/2 flex justify-center items-center">
          <Icon
            icon="solar:play-bold-duotone"
            width="24"
            height="24"
            style={{ color: "#47C05D" }}
          />
        </div>
      </video>
      <div className="chat-section my-3">
        <div className="py-2 pl-4 rounded-t-lg bg-mainBlue dark:bg-ascent text-xs text-mainWhite">
          <p>Topic Conversation</p>
        </div>
        <div className="py-2 px-1.5  ring-[0.5px] ring-mainBlue rounded-b-lg">
          <Chat />
        </div>
      </div>
    </div>
  );
}
