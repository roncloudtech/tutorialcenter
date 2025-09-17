import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchAllCourses = async () => {
  const res = await axios.get("http://localhost:8000/api/courses/");
  return res.data;
};
export const useCourses = () => {
  // Pass the fetcher function directly to useQuery
  return useQuery({
    queryKey: ["courses"],
    queryFn: fetchAllCourses,
    // Store the fresh data for 10 minutes before refetch
    staleTime: 10 * 60 * 1000,
    retry: false,
  });
};
