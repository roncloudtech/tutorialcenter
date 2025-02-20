import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Coursepage from "./(Dashboard)/pageList/Course/page";
import Calender from "./(Dashboard)/pageList/Calender/page";
import Dashboard from "./(Dashboard)/pageList/Dashboard/page";
import Exampage from "./(Dashboard)/pageList/Exam/page";
import Group from "./(Dashboard)/pageList/Group/page";
import PaymentPage from "./(Dashboard)/pageList/Payment/page";
import Settings from "./(Dashboard)/pageList/Settings/page";
import Help from "./(Dashboard)/pageList/Help/page";
import TrainingSelection from "./Pages/Training";

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
          <Route path="/dashboard" element={<Dashboard />} />
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
