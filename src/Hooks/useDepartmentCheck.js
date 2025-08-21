import { useEffect, useState } from "react";
import { useSchoolContext } from "../Context/SchoolContext";
import { useNavigate } from "react-router-dom";

export default function useDepartmentCheck() {
  const [hasDepartment, setHasDepartment] = useState(false);
  const { authenticatedUser } = useSchoolContext();
  const navigate = useNavigate();
  // Check if the user has a department and the training selection process has been complete
  useEffect(() => {
    if (authenticatedUser && authenticatedUser.department) {
      setHasDepartment(true);
    } else {
      setHasDepartment(false);
      navigate("/training-selection");
    }
  }, [navigate, authenticatedUser]);
  return hasDepartment;
}
