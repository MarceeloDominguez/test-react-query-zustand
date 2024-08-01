import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCharacters } from "@/lib/react-query/queries";
import FilterComponents from "@/components/FilterComponents";
import { useCharactersStore } from "@/store/characterStore";

const { width } = Dimensions.get("window");

export default function Home() {
  const { filters } = useCharactersStore();
  const { data: characters } = useCharacters(filters);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={characters}
        keyExtractor={(_, index) => index.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ padding: 10 }}
        renderItem={({ item }) => (
          <View style={styles.contentCard}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
          </View>
        )}
        ListHeaderComponent={<FilterComponents />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ece2e2",
    flex: 1,
  },
  contentCard: {
    width: width * 0.45,
    alignItems: "center",
    marginBottom: 18,
    padding: 5,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#3f3d3d",
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 5,
    resizeMode: "contain",
    borderRadius: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1b1a1a",
    padding: 5,
  },
});
