import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Benefit from "../Components/Benefit";
import Program from "../Components/Program";
import Testimonial from "../Components/Testimonial";
import Faq from "../Components/Faq";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import StickyButtons from "../Components/StickyButtons";
import Slider from "../Components/Slider";
export default function Home() {
  return (
    <>
      <Navbar />
      <StickyButtons />
      <Hero />
      <Benefit />
      <Slider />
      <Program />
      <Testimonial />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}
