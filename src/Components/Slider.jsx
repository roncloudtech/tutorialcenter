import React, { useEffect, useState } from "react";
import Layout from "./Layout";

const slide = [
  {
    title: "Join our growing community",
    semititle: "Attend classes with your pairs",
    desc: "We invite you to enroll in our online Master Class, where you can immerse yourself in advanced learning and gain valuable insights from our tutors.",
    Sdesc: "Be present for your future!",
    btnTitle: "Apply Now",
    btnPath: "/login",
    imgPath:
      "https://images.pexels.com/photos/8617960/pexels-photo-8617960.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Join our growing community",
    semititle: "Attend classes with your pairs",
    desc: "We invite you to enroll in our online Master Class, where you can immerse yourself in advanced learning and gain valuable insights from our tutors.",
    Sdesc: "Be present for your future!",
    btnTitle: "Apply Now",
    btnPath: "/login",
    imgPath:
      "https://images.pexels.com/photos/8617960/pexels-photo-8617960.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];
export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoSlideInterval = 4000;
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);
    return () => clearInterval(interval);
  }, [currentSlide]);
  // next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slide.length);
  };
  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex w-full transition-transform ease-custom duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slide.map((item, i) => (
          <Layout
            key={i}
            title={item.title}
            semititle={item.semititle}
            desc={item.desc}
            Sdesc={item.Sdesc}
            btnTitle={item.btnTitle}
            btnPath={item.btnPath}
            imgPath={item.imgPath}
          />
        ))}
      </div>
    </div>
  );
}
