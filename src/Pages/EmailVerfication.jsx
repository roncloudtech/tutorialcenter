import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import logo1 from "../Assets/TC 1.png";

export default function EmailVerfication() {
  return (
    <>
      <Navbar />
      <section className="my-16">
        <div className="Container flex items-center justify-center">
          <div className="md:w-96 w-full md:p-10 bg-white md:shadow-md rounded-lg flex flex-col items-center justify-center">
            <div className="logo mb-4">
              <img
                className="max-w-[80px] max-md:max-w-[70px]"
                src={logo1}
                alt="logo"
              />
            </div>
            <div className="description-text">
              <h2 className="md:text-2xl text-xl font-semibold">
                Please check your email
              </h2>
              <p className="text-sm text-gray-400 mt-2">
                We've sent code to{" "}
                <span className="text-black font-semibold">
                  olarewaju@gmail.com
                </span>
              </p>
            </div>
            <div className="verfication code my-5 w-full flex items-center justify-evenly">
              <div className="ring-1 rounded-sm ring-gray-300 flex items-center justify-center text-sm text-gray-300 w-8 h-8">
                1
              </div>
              <div className="ring-1 rounded-sm ring-gray-300 flex items-center justify-center text-sm text-gray-300 w-8 h-8">
                2
              </div>
              <div className="ring-1 rounded-sm ring-gray-300 flex items-center justify-center text-sm text-gray-300 w-8 h-8">
                3
              </div>
              <div className="ring-1 rounded-sm ring-gray-300 flex items-center justify-center text-sm text-gray-300 w-8 h-8">
                4
              </div>
              <div className="ring-1 rounded-sm ring-gray-300 flex items-center justify-center text-sm text-gray-300 w-8 h-8">
                5
              </div>
              <div className="ring-1 rounded-sm ring-gray-300 flex items-center justify-center text-sm text-gray-300 w-8 h-8">
                6
              </div>
            </div>
            <button className="bg-gray-500 text-white py-2 w-full rounded-md text-sm">
              Verify
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
