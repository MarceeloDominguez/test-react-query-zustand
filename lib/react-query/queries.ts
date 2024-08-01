import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../api";
import { GetCharactersFilters } from "@/types";

export const useCharacters = (filters?: GetCharactersFilters) => {
  return useQuery({
    queryKey: ["characters", filters],
    queryFn: () => getCharacters(filters),
    enabled: !!filters,
  });
};
