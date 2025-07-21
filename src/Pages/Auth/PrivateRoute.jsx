import { Outlet, Navigate } from "react-router-dom";
import { useSchoolContext } from "../../Context/SchoolContext";
export default function PrivateRoute({ allowedRole }) {
  const { authenticatedUser } = useSchoolContext();
  // Check if the user is authenticated
  if (!authenticatedUser || Object.keys(authenticatedUser).length === 0) {
    return <Navigate to="/login" replace />;
  }
  // Check for the user role
  if (authenticatedUser.role !== allowedRole) {
    return <Navigate to="/unauthorized" />;
  }

  // If authenticated, render the child components
  return <Outlet />;
}
