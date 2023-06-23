import { Text } from "react-native";

export default function MyText({ children, ...props }) {
  return (
    <Text className="text-5xl font-[Poppins_700Bold]" {...props}>
      {children}
    </Text>
  );
}
