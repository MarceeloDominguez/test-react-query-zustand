import { QueryProvider } from "@/lib/react-query/QueryProvider";
import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <QueryProvider>
      <Slot />
    </QueryProvider>
  );
}
