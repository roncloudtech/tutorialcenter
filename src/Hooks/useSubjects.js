import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchAllSubjects = async () => {
  const res = await axios.get("http://localhost:8000/api/subjects/");
  return res.data;
};

export const useSubjects = () => {
  return useQuery({
    queryKey: ["subjects"],
    queryFn: fetchAllSubjects,
    // Store the fresh data for 10 minutes before refetch
    staleTime: 10 * 60 * 1000,
    retry: false,
  });
};
