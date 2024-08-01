import { Character, GetCharactersFilters } from "@/types";
import axios from "axios";

export async function getCharacters(
  filters?: GetCharactersFilters
): Promise<Character[]> {
  let url = "https://dragonball-api.com/api/characters";

  const params = new URLSearchParams();

  if (filters?.name) {
    params.append("name", filters.name);
  }

  if (params.toString()) {
    url += `?${params.toString()}`;
  }

  try {
    const { data } = await axios.get<{ items: Character[] }>(url);

    if (Array.isArray(data)) {
      return data;
    }

    return data.items ?? [];
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];
  }
}
