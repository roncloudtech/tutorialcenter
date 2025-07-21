import { Link } from "react-router-dom";
import { useSchoolContext } from "../../Context/SchoolContext";

export default function Unauthorized() {
  const { authenticatedUser } = useSchoolContext();
  // If the user is authenticated, redirect them to their dashboard
  const checkUserRole = () => {
    if (authenticatedUser && authenticatedUser.role) {
      switch (authenticatedUser.role) {
        case "student":
          return "/dashboard";
        case "guardian":
          return "/parent-dashboard";
        case "teacher":
          return "/teacher-dashboard";
        case "admin":
          return "/admin-dashboard";
        default:
          return "/login"; // Fallback to login if role is unknown
      }
    } else {
      return "/login"; // If not authenticated, redirect to login
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-96">
        <img
          src="https://img.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_114360-7912.jpg?ga=GA1.1.1531329791.1725372495&semt=ais_hybrid&w=740"
          alt=""
        />
      </div>
      <div className="mt-5 text-center">
        <h1 className="text-4xl font-bold text-gray-700">We are Sorry...</h1>
        <p className="text-xl mb-5 mt-3">
          The page you are trying to access has restricted access.
        </p>
        <Link
          to={checkUserRole()}
          className="capitalize text-base items-center justify-center px-8 py-2 rounded-full bg-[#32ccd1] shadow-xl hover:text-black text-white"
        >
          go back
        </Link>
      </div>
    </div>
  );
}
