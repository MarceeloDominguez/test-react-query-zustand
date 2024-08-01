import { GetCharactersFilters } from "@/types";
import { create } from "zustand";

type CharacterStore = {
  filters: GetCharactersFilters;
  setFilters: (filters: GetCharactersFilters) => void;
};

export const useCharactersStore = create<CharacterStore>((set) => ({
  filters: { name: "" },
  setFilters: (filters) => set({ filters }),
}));
