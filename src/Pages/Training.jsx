import React from "react";
import Layout2 from "../Components/Layout2";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function TrainingSelection() {
  return (
    <>
      <Layout2
        bgImage={
          "https://s3-alpha-sig.figma.com/img/7d38/19bf/89f69f01fb13533d24809a0b59801113?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ym692ngM5DbVrpDBFBkuCGza0Q0Z2MYCXbEibV9sGqegnWMr5~E7BYtx8X7UkjlwjUW5k1dQjjXMugDmdvW~LtXLA-l3YOgYGM1FyWpVscPaIG6Qt0EhJmWGlWjH7uXKGpuTHGfVdzMfHJWDMP54ywkxHdGCjByUhKZ9kIbXSlzkHwEwE~sFKO-48eZ870~8LzgvaBVyd4WhlpaxfJ6CmIixHo6ERHY5F6BcrLLUuwvRaJRcNmECz03KL5DJyYgZkd1u02UrsBWpgSXnRspPSe0O6kXEzl9v0d1jflUJ1GNspUocAgv-ogBajpMpiU9v4KXq1EWGCIo9v9DT2BjaZA__"
        }
      >
        <div className="absolute top-[7%] left-[9%]">
          <Icon
            icon="iconamoon:arrow-left-2-light"
            width="30"
            height="30"
            className=""
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="text-center font-medium">
            <h2 className="text-2xl font-bold mb-4">Select Training</h2>
            <div className="w-[448px] bg-[#FBFAFA] shadow-lg p-6 rounded-lg">
              <p className="text-sm mb-6">
                Select the examinations you’re about to write, you have the
                option of selection more than 1 examination.
              </p>
              <div className="flex justify-between py-3 px-5 bg-[#E336290D] rounded-lg mb-3.5">
                <p className="text-sm">JAMB</p>
                <Icon
                  icon="iconamoon:arrow-left-2-light"
                  width="24"
                  height="24"
                  className="-rotate-90"
                />
              </div>
              <div className="flex justify-between py-3 px-5 border-[1.5px] border-[#09314F] rounded-lg">
                <p className="text-sm">Add another</p>
                <Icon
                  icon="prime:plus"
                  width="24"
                  height="24"
                  style={{ color: "#000" }}
                />
              </div>
              <button className="mt-12 w-full py-3 px-5 rounded-lg text-sm text-white bg-gradient-to-r from-[#09314F] to-[#E83831]">
                Continue
              </button>
            </div>
          </div>
        </div>
      </Layout2>
    </>
  );
}
