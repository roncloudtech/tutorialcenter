import DashboardLayout from "../../(Dashboard)/DashboardLayout";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import Title from "../../(Dashboard)/Components/Title";
import TableSearch from "../../(Dashboard)/Components/TableSearch";
import Table from "../../(Dashboard)/Components/Table";
import Pagination from "../../(Dashboard)/Components/Pagination";
import { useState } from "react";

const columns = [
  {
    headers: "Name",
    className: "text-start py-3.5 pl-3",
  },
  {
    headers: "Class",
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
export default function AllStudents() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <DashboardLayout>
        <PerfectScrollbar>
          <div className="xl:px-4">
            <Title title={"Students"} />
            <div className="flex justify-end mt-6">
              <TableSearch />
            </div>
            <div className="Table mt-5">
              <Table columns={columns} />
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
        </PerfectScrollbar>
      </DashboardLayout>
    </>
  );
}
