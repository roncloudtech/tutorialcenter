import React from "react";
import Title from "./Cards/Title";

export default function Contact() {
  return (
    <>
      <div className="relative w-full h-full top-7 z-50 rounded-b-[40px] bg-white">
        <Title title={"contact us"} />
        <div className="h-7" />
        <div className="Container">
          <div className="area-wrapper ">
            <div className="flex">
              <div className="flex-1 py-4 pr-7">
                <div className="content mb-8">
                  <h2 className="text-primary text-lg font-bold mb-2">
                    Get in touch
                  </h2>
                  <p className="text-sm leading-[28px]">
                    Use our contact form for all information request or contact
                    us directly using the contact information below. All
                    information is treated with complete confidentiality and In
                    accordance with our data protection statement.
                  </p>
                </div>
                <div className="contact-details">
                  <p className="text-sm font-semibold">
                    feel free to reach out to us via email or on phone
                  </p>
                  <div className="flex gap-6 mt-3">
                    <a
                      href=""
                      className="text-sencondary font-semibold text-sm"
                    >
                      tutorialcenter@gmail.com
                    </a>
                    <a
                      href=""
                      className="text-sencondary font-semibold text-sm"
                    >
                      +234XXXXXXXXXX
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex-1 py-4 pl-7 [&_input]:w-full [&_input]:shadow [&_input]:border [&_input]:border-[#94A3B8] [&_input]:rounded-lg [&_input]:p-2 ">
                {/* form input */}
                <form action="" method="post">
                  <div className="flex gap-4 mb-4">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                  </div>
                  <input type="text" placeholder="Email" />
                  <div className="mt-4">
                    <textarea placeholder="Message" rows={3} className="shadow w-full rounded-lg p-2 border border-[#94A3B8]" />
                  </div>
                  <div className="flex justify-end mt-3">
                    <button className="bg-gradient-to-r from-[#09314F] to-[#E83831] text-white text-sm px-5 py-1 rounded-full font-medium">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
