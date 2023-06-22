import { View } from "react-native";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginLayout() {
  return (
    <SafeAreaView className="border-8 border-red-500 flex-1">
      <Slot />
    </SafeAreaView>
  );
}
