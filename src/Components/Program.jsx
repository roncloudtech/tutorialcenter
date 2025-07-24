// import React, { useState } from "react";
import ProgramCard from "./Cards/ProgramCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icon } from "@iconify/react/dist/iconify.js";

const program = [
  {
    title: "JAMB",
    subject: "4 Subjects",
    month: "5,000",
    quarter: "14,000",
    year: "55,000",
    topic1: "Comprehensive tutorials",
    topic2: "Weekly masterclasses",
    topic3: "Mock tests and practice questions",
    topic4: "Live Q&A sessions with experts",
    path: "/learnMore",
  },
  {
    title: "NECO",
    subject: "4 Subjects",
    month: "5,000",
    quarter: "14,000",
    year: "55,000",
    topic1: "Comprehensive tutorials",
    topic2: "Weekly masterclasses",
    topic3: "Mock tests and practice questions",
    topic4: "Live Q&A sessions with experts",
    path: "/learnMore",
  },
  {
    title: "WAEC",
    subject: "8-9 Subjects",
    month: "8,000",
    quarter: "23,000",
    year: "88,000",
    topic1: "Complete syllabus coverage",
    topic2: "Weekly quizzes and assignments",
    topic3: "Interactive live sessions with subject tutors",
    topic4: "Past question reviews and analysis",
    path: "/learnMore",
  },
  {
    title: "WAEC",
    subject: "8-9 Subjects",
    month: "8,000",
    quarter: "23,000",
    year: "88,000",
    topic1: "Complete syllabus coverage",
    topic2: "Weekly quizzes and assignments",
    topic3: "Interactive live sessions with subject tutors",
    topic4: "Past question reviews and analysis",
    path: "/learnMore",
  },
];

export default function Program() {
  // custom arrow for the slider
  const NextArrow = ({ onClick, style, className }) => {
    return (
      <div style={{ ...style }} className={`text-mainBlue ${className}`}>
        <Icon icon="oui:arrow-right" width="30" height="30" onClick={onClick} />
      </div>
    );
  };
  const PrevArrow = ({ onClick, style, className }) => {
    return (
      <div style={{ ...style }} className={`text-mainBlue ${className}`}>
        <Icon
          icon="oui:arrow-left"
          className="#09314f "
          width="30"
          height="30"
          onClick={onClick}
        />
      </div>
    );
  };
  // slider settings from react-slick
  var settings = {
    infinite: true,
    fade: false,
    dots: true,
    lazyLoad: true,
    speed: 500,
    cssEase: "ease",
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative">
      <div className="programs Container scroll">
        <div className="py-10">
          <div className="mb-9">
            <h2 className="uppercase header-title mb-4">Our program</h2>
            <p className="text-sm leading-6">
              At Tutorial Center, we understand the challenges faced by Nigerian
              students preparing for critical exams like JAMB, WAEC, NECO, and
              GCE. That’s why we’ve built a platform that not only addresses
              these challenges but empowers you to achieve your academic goals
              with confidence and ease
            </p>
          </div>
          <div className="">
            <Slider {...settings}>
              {program.map((item, index) => (
                <ProgramCard
                  key={index}
                  subject={item.subject}
                  title={item.title}
                  month={item.month}
                  quarter={item.quarter}
                  year={item.year}
                  topic1={item.topic1}
                  topic2={item.topic2}
                  topic3={item.topic3}
                  topic4={item.topic4}
                  path={item.path}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
