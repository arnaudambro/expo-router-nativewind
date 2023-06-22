import { Text } from "react-native";
import * as Font from "expo-font";

// MyText is required to
// - have a default font
// - fix globally some issues with android chinese phones sometimes
export default function MyText({ className = "", children, ...props }) {
  return (
    <Text className={["font-[Poppins_400Regular]", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </Text>
  );
}
