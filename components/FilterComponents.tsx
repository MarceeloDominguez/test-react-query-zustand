import { TextInput } from "react-native";
import React from "react";
import { useCharactersStore } from "@/store/characterStore";

export default function FilterComponents() {
  const { setFilters, filters } = useCharactersStore();

  const handleInputChange = (text: string) => {
    setFilters({ name: text });
  };

  return (
    <TextInput
      placeholder="Buscar por nombre"
      style={{
        backgroundColor: "#ccc",
        height: 45,
        marginTop: 10,
        marginBottom: 20,
        paddingHorizontal: 14,
        borderRadius: 14,
      }}
      value={filters?.name || ""}
      onChangeText={handleInputChange}
    />
  );
}
