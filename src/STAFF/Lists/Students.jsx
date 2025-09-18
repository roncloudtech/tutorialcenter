import DashboardLayout from "../../(Dashboard)/DashboardLayout";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import Title from "../../(Dashboard)/Components/Title";
import TableSearch from "../../(Dashboard)/Components/TableSearch";
import Table from "../../(Dashboard)/Components/Table";
import Pagination from "../../(Dashboard)/Components/Pagination";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import axios from "axios";
import avatar from "../../(Dashboard)/assets/Avatar1.jpg";

const Thead = [
  {
    headers: "Name",
    className: "text-start py-3.5 pl-3",
  },
  {
    headers: "Email",
    className: "text-start",
  },
  {
    headers: "Address",
    className: "text-start",
  },
  {
    headers: "Phone Number",
    className: "text-start",
  },
  {
    headers: "DOB",
    className: "text-start",
  },
  {
    headers: "Activity",
    className: "text-start",
  },
  {
    headers: "Action",
    className: "text-end pr-3",
  },
];

// const data = [
//   {
//     name: "Kola John Olamide",
//     img: "https://www.figma.com/file/C2fHCiSoElx3NBQgrtVrXE/image/9fa492644538aeb8fa7ffd83195864e66d955fde",
//     class: "#001",
//     address: "Lagos, Nigerian",
//     phoneNumber: "081XXXXXXXX",
//     dob: "17/04/99",
//     activity: "Online",
//     action: "carbon:view",
//   },
// ];

export default function AllStudents() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showSinglePage, setShowSinglePage] = useState(false);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchStudents() {
      try {
        const response = await axios.get("http://localhost:8000/api/students/");
        console.log(response.data);
        setStudents(response.data);
      } catch (error) {
        console.error("Failed to fetch students:", error);
      }
    }
    fetchStudents();
  }, []);
  // Function to render table body rows
  const Tbody = (items, i) => {
    return (
      <tr key={i} className="dark:text-lightGrey dark:bg-whiteFade rounded-lg">
        <td className="text-start py-3.5 pl-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 relative rounded-full overflow-hidden">
              <img
                src={items.img || avatar}
                className="absolute top-0 right-0 w-full h-full"
                alt=""
              />
            </div>
            <span className="text-[12px]">{items.firstname + " " + items.lastname || "John Doe"}</span>
          </div>
        </td>
        <td>{items.email || "No Email Address"}</td>
        <td>{items.home_address || "No Address"}</td>
        <td>{items.phone || "No Phone Number"}</td>
        <td>{items.date_of_birth || "No Date Of Birth"}</td>
        <td>{items.status}</td>
        <td className="text-end pr-3">
          <Link
            className="flex justify-end"
            onClick={() => setShowSinglePage(true)}
            to={`#`}
          >
            <button className="w-9 h-9 flex items-center justify-center rounded-lg dark:bg-darkMode bg-yellow-600">
              <Icon icon="carbon:view" width="20" height="20" className="text-white" />
            </button>
          </Link>
        </td>
      </tr>
    );
  };
  return (
    <>
      <DashboardLayout>
        <PerfectScrollbar>
          <div className="xl:px-4">
            <Title title={"Students"} />
            <div className={`${showSinglePage && "hidden"}`}>
              <div className="flex justify-end mt-6">
                <TableSearch />
              </div>
              <div className="Table mt-5">
                {/* <Table Thead={Thead} data={data} Tbody={Tbody} /> */}
                <Table Thead={Thead} data={students} Tbody={Tbody} />
              </div>
              <div className="flex items-center justify-center mt-4">
                <Pagination
                  totalPages={20}
                  perPage={10}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            </div>
            <SingleStudentPage
              setShowSinglePage={setShowSinglePage}
              showSinglePage={showSinglePage}
            />
          </div>
        </PerfectScrollbar>
      </DashboardLayout>
    </>
  );
}

// SingleStudentPage component to display individual student details
// This component is displayed when a user clicks on a student's action button
const SingleStudentPage = ({ showSinglePage, setShowSinglePage }) => {
  return (
    <div className={`${!showSinglePage && "hidden"} mt-5`}>
      <div className="flex items-center gap-6 text-lightGrey">
        <button
          onClick={() => setShowSinglePage(false)}
          className="text-3xl -ml-1.5"
        >
          <Icon icon="iconamoon:arrow-left-2-light" />
        </button>
        <p className="text-sm">
          <span className="text-[#828B92]">Students /</span> John Doe
        </p>
      </div>
      <div className="grid grid-cols-[20fr_80fr] gap-7 dark:bg-darkMode p-5 rounded-2xl">
        <div className="w-full h-full relative rounded-lg overflow-hidden">
          <img
            src="https://www.figma.com/file/C2fHCiSoElx3NBQgrtVrXE/image/9fa492644538aeb8fa7ffd83195864e66d955fde"
            className="absolute top-0 left-0 w-full h-full"
            alt=""
          />
        </div>
        <div className="grid grid-cols-2">
          <div className="personal-details space-y-2.5 pr-3 border-r-[#FFFFFF33] border-r-[1px] border-solid dark:text-lightGrey">
            <div className="flex items-center justify-between">
              <h4 className="text-[18px] font-bold">Name</h4>
              <p className="text-sm">John Doe</p>
            </div>
            <div className="flex items-center justify-between">
              <h4 className="text-[18px] font-bold">Email</h4>
              <p className="text-sm">JohnDoe10@gmail.com</p>
            </div>
            <div className="flex items-center justify-between">
              <h4 className="text-[18px] font-bold">Class</h4>
              <p className="text-sm">#001</p>
            </div>
            <div className="flex items-center justify-between">
              <h4 className="text-[18px] font-bold">Address</h4>
              <p className="text-sm">Lagos, Nigerian</p>
            </div>
            <div className="flex items-center justify-between">
              <h4 className="text-[18px] font-bold">DOB</h4>
              <p className="text-sm">27/07/2003</p>
            </div>
          </div>
          <div className="personal-details pl-3 dark:text-lightGrey">
            <div className="flex flex-col justify-between h-full">
              <div className="department space-y-2.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-[18px] font-bold">Department</h4>
                  <p className="text-sm">Science</p>
                </div>
                <div className="flex items-center justify-between">
                  <h4 className="text-[18px] font-bold">Training</h4>
                  <p className="text-sm">JAMB & WAEC</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="py-2 w-full rounded-lg bg-[#D0A725] shadow-xl text-sm font-medium">
                  Pend Student
                </button>
                <button className="py-2 w-full rounded-lg bg-mainRed shadow-xl text-sm font-medium">
                  Ban Student
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
