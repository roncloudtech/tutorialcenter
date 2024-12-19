import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Benefit from "../Components/Benefit";
import Layout from "../Components/Layout";
import Program from "../Components/Program";
import Testimonial from "../Components/Testimonial";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefit />
      <Layout
        title={"online master class"}
        semititle={"Attend classes with your pairs"}
        desc={
          "We invite you to enroll in our online Master Class, where you can immerse yourself in advanced learning and gain valuable insights from our tutors."
        }
        Sdesc={'Be present for your future!'}
        btnTitle={'Join Our Master Class Online'}
        btnPath={'/masterclass'}
      />
      <Program/>
      <Testimonial/>
    </>
  );
}
