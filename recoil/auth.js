import { useRouter, useSegments } from "expo-router";
import React from "react";
import { atom, useRecoilValue } from "recoil";

// refacto the https://expo.github.io/router/docs/guides/auth example with recoil

export const userState = atom({
  key: "userState",
  default: null,
});

// This hook will protect the route access based on user authentication.
export function useProtectedRoute() {
  const segments = useSegments();
  const router = useRouter();
  const user = useRecoilValue(userState);

  React.useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.replace("/login");
    } else if (user && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace("/");
    }
  }, [user, segments]);
}
