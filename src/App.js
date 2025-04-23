import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Coursepage from "./(Dashboard)/pages/Course/page";
import Calender from "./(Dashboard)/pages/Calender/page";
import Exampage from "./(Dashboard)/pages/Exam/page";
import Group from "./(Dashboard)/pages/Group/page";
import PaymentPage from "./(Dashboard)/pages/Payment/page";
import Settings from "./(Dashboard)/pages/Settings/page";
import Help from "./(Dashboard)/pages/Help/page";
import TrainingSelection from "./Pages/Training";
import StudentDashboard from "./(Dashboard)/pages/Dashboard/StudentDashboard";
import ParentDashboard from "./(Dashboard)/pages/Dashboard/ParentDashboard";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/training-selection" element={<TrainingSelection />} />
          {/* DASHBBOARD ROUTES */}
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/parent-dashboard" element={<ParentDashboard />} />
          <Route path="/courses" element={<Coursepage />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/exam" element={<Exampage />} />
          <Route path="/groups" element={<Group />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
