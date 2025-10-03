import { useQuery } from "@tanstack/react-query";
import { useSchoolContext } from "../Context/SchoolContext";
import axios from "axios";

// Fetch all courses and the subjects the student enrolled in
const fectchAllCourses = async (student) => {
  const res = await axios.get(
    `http://localhost:8000/api/students/${student.id}/courses-subjects`
  );
  return res.data;
};
export const useSelectedCourses = () => {
  // Get Student from Context
  const { authenticatedUser } = useSchoolContext();
  // Query fectchAllCourses with react query
  return useQuery({
    queryKey: ["coursesSelected"],
    queryFn: () => fectchAllCourses(authenticatedUser),
    // Store the fresh data for 10 minutes before refetch
    staleTime: 10 * 60 * 1000,
    retry: false,
  });
};
