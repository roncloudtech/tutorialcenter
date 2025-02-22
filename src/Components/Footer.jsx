import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer bg-gradient-to-r from-[#09314F] to-[#E83831] text-white">
        <div className="h-12 spacer" />
        <div className="Container">
          <div className="area-wrapper flex flex-col items-center justify-center text-center">
            <div className="footer-content mb-9">
              <div className="sign up mb-6">
                <h2 className="mb-2 font-semibold lg:text-xl sm:text-xl text-xs">
                  Want product news and updates?{" "}
                </h2>
                <p className="font-medium text-sm">
                  Sign up for our newsletter to stay up to date{" "}
                </p>
              </div>
              <div className="form">
                <form action="" method="post">
                  <div className="flex justify-center gap-5 ">
                    <input
                      type="text"
                      placeholder="Your email address"
                      className="shadow bg-white border border-[#94A3B8] rounded-full py-2.5 pl-2 w-[320px]"
                    />
                    <button
                      type="submit"
                      className="text-sm text-white px-5 py-2.5 bg-primary rounded-full"
                    >
                      Notify me
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="socials">
              <p className="mb-5 text-xs">
                We care about the protection of your data. Read our{" "}
                <Link className="underline">Privacy Policy</Link> .{" "}
              </p>
              <div className="Social_links flex justify-center items-center gap-3 mb-6">
                <a
                  href=""
                  className="w-9 h-9 flex justify-center items-center rounded-xl bg-white "
                >
                  <Icon
                    icon="mage:facebook"
                    width="24"
                    height="24"
                    className="text-ascent"
                  />
                </a>
                <a
                  href=""
                  className="w-9 h-9 flex justify-center items-center rounded-xl bg-white "
                >
                  <Icon
                    icon="ri:twitter-fill"
                    width="24"
                    height="24"
                    className="text-ascent"
                  />
                </a>
                <a
                  href=""
                  className="w-9 h-9 flex justify-center items-center rounded-xl bg-white "
                >
                  <Icon
                    icon="mingcute:instagram-fill"
                    width="24"
                    height="24"
                    className="text-ascent"
                  />
                </a>
                <a
                  href=""
                  className="w-9 h-9 flex justify-center items-center rounded-xl bg-white "
                >
                  <Icon
                    icon="ri:linkedin-fill"
                    width="24"
                    height="24"
                    className="text-ascent"
                  />
                </a>
                <a
                  href=""
                  className="w-9 h-9 flex justify-center items-center rounded-xl bg-white "
                >
                  <Icon
                    icon="line-md:youtube-filled"
                    width="24"
                    height="24"
                    className="text-ascent"
                  />
                </a>
              </div>
              <div className="download_app">
                <p className="mb-3 text-xs">
                  Click to download our app. Download Now!
                </p>
                <div className="flex sm:flex-row flex-col items-center justify-center gap-4">
                  <a
                    href=""
                    className="flex justify-center items-center gap-2 w-40 bg-sencondary py-[6px] rounded-lg"
                  >
                    <Icon
                      icon="ic:twotone-apple"
                      width="28"
                      height="28"
                      style={{ color: "white" }}
                      className=""
                    />
                    <span className="text-white">Apple Store</span>
                  </a>
                  <a
                    href=""
                    className="flex justify-center items-center gap-2 w-40 bg-primary py-[6px] rounded-lg"
                  >
                    <Icon
                      icon="mage:playstore"
                      width="26"
                      height="26"
                      style={{ color: "white" }}
                    />
                    <span className="text-white">Play Store</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright py-5">
            <div className="border border-" />
            <p className="mt-4 text-center text-sm">
              Copyright © 2025 Tutorial Center | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
