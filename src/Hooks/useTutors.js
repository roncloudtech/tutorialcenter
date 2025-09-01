import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchAllTutors = async () => {
  const res = await axios.get("http://localhost:8000/api/staffs/");
  return res.data;
};
export const useTutors = () => {
  // Pass the fetcher function directly to useQuery
  return useQuery({
    queryKey: ["tutors"],
    queryFn: fetchAllTutors,
    // Store the fresh data for 10 minutes before refetch
    staleTime: 10 * 60 * 1000,
    retry: false,
    onError: (error) => {
      console.error("Error fetching Tutors", error);
    },
  });
};
