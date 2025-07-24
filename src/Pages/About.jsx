import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import vector from "../Assets/Vector.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import Layout from "../Components/Layout";
import checkers from "../Assets/checkers.png";
import handCup from "../Assets/handCup.jpg";
import conversation from "../Assets/conversations.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const benefit = [
  {
    title: "Expert-Led Tutorials",
    desc: " Our lessons are crafted and delivered by experienced educators who understand the unique challenges of JAMB, WAEC, NECO, and                  GCE exams. With clear explanations and practical examples,                students gain the knowledge and confidence needed to succeed.",
  },
  {
    title: "Flexible Learning Options",
    desc: "Access our platform anytime, anywhere, and learn at your own pace. Whether you prefer on-demand tutorials or live sessions, we provide flexible solutions to fit your schedule and learning style.",
  },
  {
    title: "Personalized Support and Progress Tracking",
    desc: "Stay on top of your studies with tools designed to track your progress and highlight areas for improvement. Our system ensures every student receives the support and feedback they need to achieve their goals.",
  },
];
const program = [
  {
    title: "Comprehensive Subject Tutorials",
    desc: "At Tutorial Center, we offer in-depth tutorials for JAMB, WAEC, NECO, and GCE exams, covering all key subjects. Our lessons are carefully designed by experienced educators toensure clarity, understanding, and alignment with exam syllabi. Students can access interactive video lessons, downloadable resources, and practice questions anytime, anywhere.",
  },
  {
    title: "Live Weekly Masterclasses",
    desc: "Our weekly live masterclasses provide students with the opportunity to engage directly with subject experts. These sessions are designed to tackle challenging topics, answer pressing questions, and offer personalized guidance. Through real-time interaction, students gain deeper insights and confidence in their preparation journey.",
  },
  {
    title: "Advanced Learning Management System (LMS)",
    desc: "At Tutorial Center, we offer in-depth tutorials for JAMB, WAEC, NECO, and GCE exams, covering all key subjects. Our lessons are carefully designed by experienced educators toensure clarity, understanding, and alignment with exam syllabi. Students can access interactive video lessons, downloadable resources, and practice questions anytime, anywhere.",
  },
];

export default function About() {
  return (
    <>
      <Navbar />
      {/* Banner */}
      <div className="relative z-30 w-full h-[230px]">
        {/* background image */}
        <div
          className="bg-image absolute w-full h-full bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${conversation})`,
          }}
        />
        {/* overlay */}
        <div className="overlay absolute w-full h-full bg-black opacity-50"></div>
        {/* content */}
        <div className="w-full h-full flex items-center justify-center relative z-50">
          <h1 className="uppercase text-white text-3xl font-bold">About us</h1>
        </div>
      </div>
      <Introduction />
      {/* What we Provide */}
      <Provide />
      <Team />
      <Footer />
    </>
  );
}
const Introduction = () => {
  return (
    <div className="Container mt-11">
      <div className="area-wrapper text-sm">
        <div className="grid sm:grid-cols-12 gap-3">
          <div className="column col-span-5">
            <h2 className="font-bold text-2xl text-primary leading-8">
              INTRODUCTION TO THE BEST ONLINE WORKING EXAM EDUCATIONAL SYSTEMS
              FOR AFRICANS!
            </h2>
          </div>
          <div className="col-span-7 sm:flex gap-5">
            <div className="flex-1">
              <p className="leading-5">
                At Tutorial Center, we are redefining education for African
                students with our innovative and comprehensive online learning
                platform. Tailored to address the unique challenges faced by
                students preparing for JAMB, WAEC, NECO, and GCE exams, we
                combine advanced technology with expert-led instruction to
                deliver a seamless and
              </p>
            </div>
            <div className="flex-1">
              <p className="leading-5">
                effective learning experience. Our system is designed to empower
                students with the knowledge, skills, and confidence needed to
                excel in their academic pursuits and beyond. With features such
                as live interactive classes, on-demand tutorials, and progress
                tracking tools, we ensure every learner receives the support
                they deserve.
              </p>
            </div>
          </div>
        </div>
        <div className="my-10">
          <p className="leading-5 ">
            Whether you are looking for flexibility, quality, or convenience,
            Tutorial Center offers it all. We aim to bridge the gap in access to
            quality education by providing an inclusive platform that caters to
            diverse learning needs. By leveraging the expertise of seasoned
            educators and incorporating modern e-learning strategies, we are
            creating opportunities for African students to thrive academically
            and compete globally. At Tutorial Center, we believe education is
            the key to unlocking potential, and we are committed to helping
            students achieve their dreams.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {benefit.map((item, index) => (
            <div
              key={index}
              className="column1 flex px-3 py-4 gap-3 bg-[#E336290D] shadow-xl rounded-2xl"
            >
              <div className="">
                <div className="w-[40px] h-[40px] flex justify-center items-center bg-sencondary rounded-full">
                  <img src={vector} alt="" width={20} height={20} />
                </div>
              </div>
              <div className="">
                <h4 className="font-semibold mb-3">{item.title}</h4>
                <p className=" text-xs leading-5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="relative my-20">
          <div
            style={{ backgroundImage: `url(${handCup})` }}
            className="w-[650px] h-[400px] max-w-full rounded-2xl bg-center bg-cover bg-no-repeat"
          ></div>
          <div className="lg:absolute top-11 right-4">
            <video
              className="w-[500px] h-[300px] bg-no-repeat bg-cover bg-center rounded-2xl relative border-[3px] border-white border-solid "
              src="https://youtu.be/-O8t__3Vu9I"
              controls
              autoPlay
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};
const Provide = () => {
  return (
    <>
      <Layout
        title={"Join our growing community"}
        semititle={"Attend classes with your pairs"}
        desc={
          "We invite you to enroll in our online Master Class, where you can immerse yourself in advanced learning and gain valuable insights from our tutors."
        }
        Sdesc={"Be present for your future!"}
        btnTitle={"Apply Now"}
      />
      <div className="Container my-20">
        <div className="area-wrapper">
          <div className="text-center mb-8">
            <h2 className="font-bold uppercase text-xl mb-4">We provide</h2>
            <p>
              Empowering students with the tools, resources, and guidance they
              need to excel. At Tutorial Center, we provide comprehensive
              tutorials, interactive masterclasses, and advanced learning
              solutions tailored for success in JAMB, WAEC, NECO, and GCE exams.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {program.map((item, index) => (
              <div
                key={index}
                className="column1 flex flex-col justify-center items-center text-center px-3 py-4 gap-3 bg-[#E336290D] shadow-xl rounded-2xl"
              >
                <div className="">
                  <div className="w-[50px] h-[50px] flex justify-center items-center bg-sencondary rounded-full">
                    <img src={vector} alt="" width={24} height={24} />
                  </div>
                </div>
                <div className="">
                  <h4 className="font-semibold mb-3 text-sm">{item.title}</h4>
                  <p className=" text-xs leading-5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const Team = () => {
  const [listallTeams, setListAllTeams] = useState([
    {
      developers: "Development team",
      open: true,
    },
    {
      developers: "EDUCATION team",
      open: false,
    },
    {
      developers: "market / operations",
      open: false,
    },
    {
      developers: "Advisory team",
      open: false,
    },
  ]);
  const handleTeamState = (index) => {
    setListAllTeams((prev) =>
      prev.map((items, i) => {
        if (i === index) {
          items.open = true;
        } else {
          items.open = false;
        }
        return items;
      })
    );
  };
  const AllTeams = [
    {
      name: "JOHN DOE",
      role: "software engineer",
    },
    {
      name: "JOHN DOE",
      role: "ui/ux designer",
    },
    {
      name: "JOHN DOE",
      role: "course adviser",
    },
    {
      name: "JOHN DOE",
      role: "influencer",
    },
    {
      name: "JOHN DOE",
      role: "product desginer",
    },
  ];
  // slider settings from react-slick
  var settings = {
    infinite: true,
    fade: false,
    lazyLoad: true,
    speed: 500,
    cssEase: "ease",
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
  };
  return (
    <div className="Container my-20">
      <div className="area-wrapper">
        <h2 className="header-title uppercase text-center mb-8">
          Meet the team
        </h2>
        <div className="flex justify-between items-center flex-wrap max-sm:gap-3">
          {listallTeams.map((items, i) => {
            return (
              <button
                key={i}
                className={`${
                  items.open
                    ? "border-solid border-b-[1.5px]  border-b-ascent text-ascent"
                    : "text-mainGrey"
                } flex-1 w-full text-base max-sm:text-sm font-bold uppercase pb-0.5`}
                onClick={() => handleTeamState(i)}
              >
                {items.developers}
              </button>
            );
          })}
        </div>
        <div className="text-xs mt-4 text-center">
          <span>
            Good Teachers and teaching system Good Teachers and teaching system
            Good Teachers and teaching system Good Teachers and teaching system
            Good Teachers and teaching system Good Teachers and teaching system{" "}
          </span>
        </div>
        <div className="mt-20">
          <Slider {...settings}>
            {AllTeams.map((items, i) => (
              <TeamCard key={i} name={items.name} role={items.role} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const TeamCard = ({ name, role }) => {
  return (
    <div
      style={{ backgroundImage: `url(${checkers})` }}
      className="px-4 py-5 rounded-3xl bg-slate-500 mr-5"
    >
      <div className="h-56"></div>
      <div className="flex justify-between items-center px-4 py-2 bg-mainWhite rounded-2xl">
        <div className="bio">
          <p className="text-base font-semibold">{name}</p>
          <span className="text-xs uppercase">{role}</span>
        </div>
        <Icon icon="skill-icons:linkedin" width="24" height="24" />
      </div>
    </div>
  );
};
