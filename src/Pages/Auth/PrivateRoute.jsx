import { Outlet, Navigate } from "react-router-dom";
import { useSchoolContext } from "../../Context/SchoolContext";
export default function PrivateRoute({ allowedRole }) {
  const { role } = useSchoolContext();
  // Check if the user is authenticated
  if (!role || role === "") {
    return <Navigate to="/login" replace />;
  }
  // Check for the user role
  if (role !== allowedRole) {
    return <Navigate to="/unauthorized" />;
  }

  // If authenticated, render the child components
  return <Outlet />;
}
