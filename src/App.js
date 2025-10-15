import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import StaffLogin from "./Pages/StaffLogin";
import Coursepage from "./(Dashboard)/pages/Course/page";
import Calender from "./(Dashboard)/pages/Calender/page";
import Exampage from "./(Dashboard)/pages/Exam/page";
import Group from "./(Dashboard)/pages/Group/page";
import PaymentPage from "./(Dashboard)/pages/Payment/page";
import Settings from "./(Dashboard)/pages/Settings/page";
import Help from "./(Dashboard)/pages/Help/page";
import StudentDashboard from "./(Dashboard)/pages/Dashboard/StudentDashboard";
import ParentDashboard from "./(PARENT)/pages/Dashboard";
import ParentCalender from "./(PARENT)/pages/Calender";
import ParentExamPractice from "./(PARENT)/pages/ExamPractice";
import ParentPayment from "./(PARENT)/pages/Payment";
import ParentSettings from "./(PARENT)/pages/Settings";
import ParentHelp from "./(PARENT)/pages/Help";
import ParentOverview from "./(PARENT)/pages/Overview";
import TeacherDashboard from "./(TEACHER)/pages/Dashboard";
import Assesment from "./(TEACHER)/pages/Assesment";
import TeacherGroups from "./(TEACHER)/pages/Groups";
import TeacherSettings from "./(TEACHER)/pages/Settings";
import TeacherResult from "./(TEACHER)/pages/Result";
import EmailVerfication from "./Pages/EmailVerfication";
import AllStudents from "./STAFF/Lists/Students";
import PrivateRoute from "./Pages/Auth/PrivateRoute";
import Unauthorized from "./Pages/Auth/Unauthorized";
import TrainingSelection from "./Pages/TrainingSelection";
import StaffDashboard from "./STAFF/Pages/Dashboard";
import StaffSettings from "./STAFF/Pages/Settings";
import StaffAssesment from "./STAFF/Pages/Assesment";
import StaffCourses from "./STAFF/Pages/Course";
import StaffRegistration from "./STAFF/Pages/Registration";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/email-verification" element={<EmailVerfication />} />
          <Route path="/login" element={<Login />} />
          <Route path="/staff/login" element={<StaffLogin />} />
          {/*ALL DASHBBOARD ROUTES */}
          {/* STUDENT ROUTES */}
          <Route element={<PrivateRoute allowedRole="student" />}>
            <Route path="/dashboard" element={<StudentDashboard />} />
            <Route path="/courses" element={<Coursepage />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/exam" element={<Exampage />} />
            <Route path="/groups" element={<Group />} />
            <Route path="/training-selection" element={<TrainingSelection />} />
          </Route>
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />

          {/* PARENT ROUTES */}
          <Route element={<PrivateRoute allowedRole="guardian" />}>
            <Route path="/parent-dashboard" element={<ParentDashboard />} />
            <Route path="/parent-calender" element={<ParentCalender />} />
            <Route
              path="/parent-exam-practice"
              element={<ParentExamPractice />}
            />
            <Route path="/parent-payment" element={<ParentPayment />} />
            <Route path="/parent-settings" element={<ParentSettings />} />
            <Route path="/parent-help" element={<ParentHelp />} />
            <Route path="/parent-overview" element={<ParentOverview />} />
          </Route>

          {/* TEACHER ROUTES */}
          <Route element={<PrivateRoute allowedRole="teacher" />}>
            <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
            <Route path="/teacher-assessment" element={<Assesment />} />
            <Route path="/teacher-group" element={<TeacherGroups />} />
            <Route path="/teacher-settings" element={<TeacherSettings />} />
            <Route path="/teacher-result" element={<TeacherResult />} />
          </Route>

          {/* ADMIN ROUTES */}
          {/* <Route element={<PrivateRoute allowedRole="admin" />}>
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/student-list" element={<AllStudents />} />
          </Route> */}

          {/* STAFF ROUTES */}
          <Route element={<PrivateRoute allowedRole="staff" />}>
            <Route path="/staff/dashboard" element={<StaffDashboard />} />
            <Route path="/student-list" element={<AllStudents />} />
            <Route path="/staff/settings" element={<StaffSettings />} />
            <Route path="/staff/assessment" element={<StaffAssesment />} />
            <Route path="/staff/courses" element={<StaffCourses />} />
            <Route path="/staff/register" element={<StaffRegistration />} />
          </Route>

          {/* Unauthorized Route */}
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
