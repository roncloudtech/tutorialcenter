import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../Assets/TC 1.png";
import student_image from "../Assets/childLearning.png";
import teacher from "../Assets/teacher.png";
import { Icon } from "@iconify/react/dist/iconify.js";
export default function Hero() {
  return (
    <>
      <div className="bg-primary py-2 text-center block max-sm:hidden">
        <p className="text-white ">
          Click here to join our students in archiving excellence...{" "}
          <span className="text-ascent font-bold">Apply Now</span>
        </p>
      </div>
      {/* Hero Section for extra large screen */}
      <div className="pt-12 max-[1279px]:p-0">
        <div className="Container">
          <div className="flex items-center justify-center max-xl:hidden">
            <div className="flex-1 -translate-y-8 ">
              <h1 className="font-bold text-[40px] mb-3 uppercase">
                <span className="text-ascent">Ace</span> Your{" "}
                <span className="text-ascent">Exams</span> , <br /> Secure Your
                Future!
              </h1>
              <p className="text-base font-medium leading-7 mb-9">
                Your Ultimate Guide to{" "}
                <span className="text-ascent">JAMB, WAEC,</span> <br />{" "}
                <span className="text-ascent">NECO</span> And{" "}
                <span className="text-ascent">GCE</span> Success.
              </p>
              <div className="[&_a]:px-10 [&_a]:py-2 [&_a]:rounded-2xl">
                <Link className="bg-gradient-to-r from-[#09314F] to-[#E83831] border-[2px]  border-solid border-x-[#E83831] border-y-[#09314F] mr-3 bg-clip-text text-transparent ">
                  View Training
                </Link>
                <Link className="bg-gradient-to-r from-[#09314F] to-[#E83831] text-white">
                  Apply Now{" "}
                </Link>
              </div>
            </div>
            <div className="h-[470px] flex-1">
              <div className="flex ">
                <div className="w-[430px] h-[430px] translate-x-36 -translate-y-16 flex-1">
                  <img
                    src={student_image}
                    alt=""
                    className="w-full h-full object-contain "
                  />
                </div>
                <div className="w-[280px] h-[270px] rounded-lg translate-y-32 -translate-x-9 relative">
                  <img
                    src={teacher}
                    alt=""
                    className="w-full h-full object-contain "
                  />
                  {/* chat with us icon */}
                  <div className="absolute top-11 -right-6 w-[110px] py-3 bg-[#EAEBEC] shadow-2xl rounded-3xl flex flex-col items-center justify-center">
                    <div className="mb-1 w-7 h-7 bg-primary rounded-full flex justify-center items-center">
                      <Icon
                        icon="tabler:message-chatbot"
                        width="18"
                        height="18"
                        className="text-ascent"
                      />
                    </div>
                    <span className="text-ascent text-[5px] font-semibold">
                      Chat with us{" "}
                    </span>
                  </div>
                  {/* Back To Top */}
                  <div className="fixed bottom-5 -right-8 w-[90px] py-3 bg-[#EAEBEC] shadow-2xl rounded-3xl flex flex-col items-center justify-center">
                    <div className="mb-2 w-7 h-7 bg-primary rounded-full flex justify-center items-center">
                      <Icon
                        icon="tabler:message-chatbot"
                        width="18"
                        height="18"
                        className="text-ascent"
                      />
                    </div>
                    <span className="text-ascent text-[5px] font-semibold">
                      Back to top{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section for smaller and large screen */}
      <div className="max-xl:block hidden w-full">
        <div className=" relative w-full h-[450px]">
          {/* background color cover */}
          <div className="bg-[rgba(0,0,0,0.288)] z-10 w-full h-full absolute top-0 left-0 bottom-0" />
          {/* background image */}
          <div
            className="w-full h-full bg-contain max-[602px]:bg-cover bg-no-repeat bg-center absolute top-0 left-0 bottom-0"
            style={{ backgroundImage: `url(${student_image})` }}
          />
          {/* background content */}
          <div className="flex-1 absolute top-8 left-0 z-50 px-7">
            <h1 className="font-bold sm:text-[32px] text-2xl text-white  mb-3 uppercase leading-[1.47]">
              <span className="text-ascent">Ace</span> Your <br />
              <span className="text-ascent">Exams</span> , Secure <br /> Your
              Future!
            </h1>
            <p className="text-sm font-medium leading-7 mb-9">
              Your Ultimate Guide to{" "}
              <span className="text-ascent">JAMB, WAEC,</span> <br />{" "}
              <span className="text-ascent">NECO</span> And{" "}
              <span className="text-ascent">GCE</span> Success.
            </p>
            <div className="[&_a]:px-10 [&_a]:max-sm:px-4 [&_a]:max-[349px]:px-2  [&_a]:py-2 [&_a]:rounded-2xl ">
              <Link className="bg-gradient-to-r from-[#09314F] to-[#E83831] border-[2px]  border-solid border-x-[#E83831] border-y-[#09314F] mr-3 bg-clip-text text-transparent ">
                View Training
              </Link>
              <Link className="bg-gradient-to-r from-[#09314F] to-[#E83831] text-white ">
                Apply Now{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* subsidiary */}
      <div className="bg-ascent py-4 px-3">
        <div className="flex items-center justify-center gap-3">
          <img
            className="max-w-[75px] max-md:max-w-[50px]"
            src={logo1}
            alt="logo"
          />
          <p className="text-white font-semibold max-md:text-[12px]">
            Tutorial Center is subsidiary of Roncloud Technologies
          </p>
        </div>
      </div>
    </>
  );
}
