import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import vector from "../Assets/Vector.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import Layout from "../Components/Layout";

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
      <div className="relative z-30 w-full h-[230px] bg-[#0000005b]">
        {/* background image */}
        <div
          className="bg-image absolute w-full h-full bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage:
              "url('https://s3-alpha-sig.figma.com/img/71dd/49db/3b5abdb6abd320a3b16cf153488145ec?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h~xZRKs1eRGdQh4yW-ri8PYVIyazxXhc-7v2qI3mmaCtxav1aKJgYIeUMaHRk8h4HLPnzBBmiZufkjeqLczlVuFTUL1VmXUaZFimvSMrf7pYh85iyfDKNLZZkVrvrazo5ILT0K5Bb0IxP8fK52zIBEMogDG-1XqvimKCoXPa8dZ5uR74wCXT9H7LCTmO7mwuTi7sNVNHENl-jT4D4TB5T7wcdRjOwSWPKhTGDefCRuviRCQ4vAupFvdBh13pguKC0m3if3fZ2zTbOYVQBKesMTgLQX8oy~wk~ph374nf8KF7RKWDU2lqsv-~iy68z3bW0naEZAReJbr4rIeQmgEfMw__')",
          }}
        />
        <div className="content absolute top-1/3 right-1/2 z-30">
          <h1 className="uppercase text-white text-3xl font-bold">About us</h1>
        </div>
      </div>
      <div className="Container">
        <div className="area-wrapper">
          <div className="grid grid-cols-12 gap-3">
            <div className="column col-span-5">
              <h2 className="font-bold text-2xl text-primary leading-8">
                INTRODUCTION TO THE BEST ONLINE WORKING EXAM EDUCATIONAL SYSTEMS
                FOR AFRICANS!
              </h2>
            </div>
            <div className="col-span-7 flex gap-5">
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
                  effective learning experience. Our system is designed to
                  empower students with the knowledge, skills, and confidence
                  needed to excel in their academic pursuits and beyond. With
                  features such as live interactive classes, on-demand
                  tutorials, and progress tracking tools, we ensure every
                  learner receives the support they deserve.
                </p>
              </div>
            </div>
          </div>
          <div className="my-7">
            <p className="leading-5 ">
              Whether you are looking for flexibility, quality, or convenience,
              Tutorial Center offers it all. We aim to bridge the gap in access
              to quality education by providing an inclusive platform that
              caters to diverse learning needs. By leveraging the expertise of
              seasoned educators and incorporating modern e-learning strategies,
              we are creating opportunities for African students to thrive
              academically and compete globally. At Tutorial Center, we believe
              education is the key to unlocking potential, and we are committed
              to helping students achieve their dreams.
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
                  <p className=" text-[14px]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative mb-12 mt-20">
            <div className="w-[650px] h-[400px] ">
              <img
                src="https://s3-alpha-sig.figma.com/img/3ac7/0750/0b450a0f42045fb4fb43ec8c51193838?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kMQm6uBG-CEQ7C0jqr5DKjNsmHxxVF66CVr9W44kCRqw6d5-NCS1T-PLjwvsxN3apJrpBhxQm7r9ZTfUoFe9ai9As54OSE3jRW8Ner85ysSFaojoB1dLhphJoVNPoWXMdRD6OQGZWMy6fcrWDaC097TQ~-s4ruzqcX7U6fktUhCioDDI7Dm6cIx~fHFy3Pwta8P5jcmjLPv8qrYsyH4FfW97BTm9YDVh1~0VTlYWJSS6xIzXz2O~cKA6OonrR2z~FFNV6f2x6Pu2ONINe1TRwGUy8xZCmaK9iMvrKjVUQJ2Rb3i0kKYLhZGaUMII~CulI0O9FozdLh7E3wP2sDNKYg__"
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="absolute top-11 right-4">
              <button
                className="w-[500px] h-[300px] bg-no-repeat bg-cover bg-center rounded-2xl relative border-[3px] border-white border-solid "
                style={{
                  backgroundImage:
                    "url('https://s3-alpha-sig.figma.com/img/baaf/4b7a/71cb0b023ebd3c03b267e9f51c6a4889?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZYFzDJ9NwMWGlLNgwXXtsAZJ2cVb-pWm-2r2PMwOQA~ysNrbR8Db96XqOhTJ3B25pRhRVLLK9ocbDbBAT~W9hym4u849BQPIbKrPcmti3zoKPyAxh~rJkOYlNlm~9Kvm29Dm90zHHy3Py3KqAmPh3BshPfyd9YTJRuVFII52RhtHMuSr-Oyvqqp4h674mua6sdiDi2utmqJGuXB0V9HHhRytwCiox0ZDT~V27Pa3XqOz3CXljLB0NRqZm6gPX~efemO~zi1Eqoxuk3SyCCwnfxQObCtQZ1X0F~Dn8Ms6IeYWV-oiqbDZI0I1RTzzcKJRaD1K8wSY9fhw9V3ogqSyCw__')",
                }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-[#0000002f] rounded-2xl"></div>
                <Icon
                  icon="logos:youtube-icon"
                  width="50"
                  height="50"
                  className="absolute top-1/3 right-1/2"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Layout
        title={"Join our growing community"}
        semititle={"Attend classes with your pairs"}
        desc={
          "We invite you to enroll in our online Master Class, where you can immerse yourself in advanced learning and gain valuable insights from our tutors."
        }
        Sdesc={"Be present for your future!"}
        btnTitle={"Apply Now"}
      />
      <div className="Container">
        <div className="area-wrapper">
          <div className="text-center my-6">
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
                  <p className=" text-[12px]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
