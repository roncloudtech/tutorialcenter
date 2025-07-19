import DashboardLayout from "../../(Dashboard)/DashboardLayout";
import Title from "../../(Dashboard)/Components/Title";
import { Icon } from "@iconify/react/dist/iconify.js";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  RadialBarChart,
  RadialBar,
} from "recharts";
import maleFemale from "../../Assets/maleFemale.png";

export default function AdminDashboard() {
  return (
    <DashboardLayout>
      <PerfectScrollbar>
        <div className="xl:px-4 p-2.5">
          <Title title={"Dashboard"} />
          <div className="grid-5 gap-3 items-center mt-5">
            <UserCard percent="73" total="123,456" user="students" />
            <UserCard percent="30" total="46,045" user="teachers" />
            <UserCard percent="46" total="67,650" user="guardian" />
            <UserCard percent="7" total="4,556" user="course advisers" />
            <UserCard percent="6" total="10,780" user="Applicant" />
          </div>
          {/* EARNINGS CHART */}
          <EarningsChart />
          <div className="grid md:grid-cols-[57fr_43fr] gap-3">
            <AttendanceChart />
            <CountChart />
          </div>
        </div>
      </PerfectScrollbar>
    </DashboardLayout>
  );
}

const UserCard = ({ percent, total, user }) => {
  return (
    <div className="md:p-6 p-3 dark:bg-darkMode rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="dark:bg-lightGrey flex gap-2 items-center rounded-lg p-1">
          <Icon
            icon="bxs:up-arrow"
            width="17"
            height="17"
            className="text-[#50AF68]"
          />
          <span className="text-[12px] dark:text-darkMode">{percent}%</span>
        </div>
        <div className="dark:text-lightGrey">
          <Icon icon="uiw:more" width="17" height="17" />
        </div>
      </div>
      <div className="total-user dark:text-lightGrey">
        <h2 className="text-lg font-bold">{total}</h2>
        <p className="text-xs capitalize">{user}</p>
      </div>
    </div>
  );
};

const EarningsChart = () => {
  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "July",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="dark:bg-[#1E1E1E] md:p-6 p-3 rounded-lg my-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold dark:text-lightGrey">Earnings</h2>
        <div className="flex max-sm:flex-col max-sm:items-end items-center gap-4">
          <div className="flex gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#50AF68]" />
              <span className="capitalize text-[14px] dark:text-lightGrey">
                income
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-mainRed" />
              <span className="capitalize text-[14px] dark:text-lightGrey">
                Expense
              </span>
            </div>
          </div>
          <select
            className="p-2 rounded-md dark:text-lightGrey dark:bg-darkMode"
            name="dateTimeime"
            id="dateTime"
          >
            <option value="">2024</option>
          </select>
        </div>
      </div>
      <div className="h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={100}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#50AF68"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#E83831" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
const AttendanceChart = () => {
  const data = [
    {
      name: "Mon",
      present: 70,
      absent: 30,
    },
    {
      name: "Tue",
      present: 51,
      absent: 49,
    },
    {
      name: "Wed",
      present: 70,
      absent: 30,
    },
    {
      name: "Thu",
      present: 45,
      absent: 55,
    },
    {
      name: "Fri",
      present: 73,
      absent: 37,
    },
  ];
  return (
    <div className="dark:bg-[#1E1E1E] md:p-6 p-3 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold dark:text-lightGrey">Attendance</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#3980B5]" />
            <span className="capitalize text-[14px] dark:text-lightGrey">
              Girls
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-ascent" />
            <span className="capitalize text-[14px] dark:text-lightGrey">
              Boys
            </span>
          </div>
        </div>
      </div>
      <div className="h-[320px] w-full">
        <ResponsiveContainer width="100%" height="90%">
          <BarChart width={500} height={300} data={data} barSize={20}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#ddd"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tick={{ fill: "#d1d5db" }}
              tickLine={false}
            />
            <YAxis
              axisLine={false}
              tick={{ fill: "#d1d5db" }}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
            />
            <Legend
              align="left"
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
            />
            <Bar
              dataKey="present"
              fill="#3980B5"
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="absent"
              fill="#BB9E7F"
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
const CountChart = () => {
  const data = [
    {
      name: "Girls",
      count: 90,
      fill: "#BB9E7F",
    },
    {
      name: "Boys",
      count: 50,
      fill: "#3980B5",
    },
  ];
  return (
    <div className="dark:bg-[#1E1E1E] md:p-6 p-3 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold dark:text-lightGrey">Students</h2>
        <div className="dark:text-lightGrey">
          <Icon icon="uiw:more" width="17" height="17" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="h-[320px] w-full relative">
          <ResponsiveContainer>
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="40%"
              outerRadius="90%"
              barSize={25}
              data={data}
            >
              <RadialBar background dataKey="count" />
            </RadialBarChart>
          </ResponsiveContainer>
          <img
            src={maleFemale}
            width={50}
            height={50}
            alt=""
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="space-y-2 total-counts">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-full bg-[#BB9E7F]" />
            <div className="mr-2 dark:text-white">
              <h2 className="mb-1 text-lg font-bold ">90</h2>
              <p className="text-xs">Girls</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-full bg-[#3980B5]" />
            <div className="mr-2 dark:text-white">
              <h2 className="mb-1 text-lg font-bold ">90</h2>
              <p className="text-xs">Boys</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
