import React, { useState } from "react";
import StudentCard from "./StudentCard";

const studentInfo = [
  {
    name: "John Doe",
    department: "science",
    training: "Waec & Jamb",
  },
  {
    name: "John Doe",
    department: "science",
    training: "Waec & Jamb",
  },
  {
    name: "John Doe",
    department: "science",
    training: "Waec & Jamb",
  },
  {
    name: "John Doe",
    department: "science",
    training: "Waec & Jamb",
  },
];
export default function StudentProfileList() {
  const [active, setActive] = useState(null);
  const handleSetActive = (index) => {
    setActive(index);
  };
  return (
    <>
      <div className="flex justify-between items-center text-sm font-semibold dark:text-lightGrey text-mainBlack">
        <p>STUDENTS</p>
        <p>5</p>
      </div>
      {/* STUDENT CARDS DISPLAY */}
      <div className="mt-3 space-y-3">
        {studentInfo.map((item, i) => (
          <StudentCard
            name={item.name}
            department={item.department}
            training={item.training}
            active={active === i}
            key={i}
            onClick={() => handleSetActive(i)}
          />
        ))}
      </div>
    </>
  );
}
