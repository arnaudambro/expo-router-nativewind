import { Slot } from "expo-router";
import { RecoilRoot } from "recoil";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useProtectedRoute } from "../recoil/auth";

export function ProtectedRoutesProvider({ children }) {
  useProtectedRoute();
  return children;
}

export default function Root() {
  return (
    <SafeAreaProvider>
      <RecoilRoot>
        <ProtectedRoutesProvider>
          <Slot />
        </ProtectedRoutesProvider>
      </RecoilRoot>
    </SafeAreaProvider>
  );
}
