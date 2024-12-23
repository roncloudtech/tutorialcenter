import React from "react";
import { Link } from "react-router-dom";
import TestimonialCard from "./Cards/Tcard";
import Title from "./Cards/Title";

//Testimonial data
const data = [
  {
    name: "Chizoba Tina",
    title: "Guardian/Parent",
    image:
      "https://brightstarschools.org/files/_cache/07c4dc8799aea6795eba751059b484db.jpeg",
    desc: '"The online platform was a game-changer for my children. The personalized support and flexible schedule helped them succeed in their exams beyond expectations."',
  },
  {
    name: "Chizoba Tina",
    title: "Student",
    image:
      "https://brightstarschools.org/files/_cache/07c4dc8799aea6795eba751059b484db.jpeg",
    desc: '"Thanks to the online learning platform, I passed my exams with flying colors. The well-structured lessons and interactive sessions made learning enjoyable and effective."',
  },
];

export default function Testimonial() {
  return (
    <>
      <Title title={"testimonial"} />
      <div className="Container">
        <div className="area-wrapper !py-16">
          <div className="flex gap-4 items-center justify-center">
            <div className="blockContent flex-1">
              <h4 className="font-bold text-lg leading-6 text-[#020D14] mb-6">
                Check out what our clients are <br /> saying about us
              </h4>
              <p className="text-[#020D14] text-sm font-medium mb-6">
                So what are you waiting for join us now
              </p>
              <Link className="px-10 py-2 rounded-lg bg-gradient-to-r from-[#09314F] to-[#E83831] text-white ">
                Get Started{" "}
              </Link>
            </div>
            <div className="flex gap-2 flex-1">
              {data.map((item, index) => (
                <TestimonialCard
                  key={index}
                  name={item.name}
                  title={item.title}
                  image={item.image}
                  desc={item.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
