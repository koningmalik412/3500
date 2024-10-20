import { Stack } from "expo-router";

const LoginLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false, animation: "none" }}>
      <Stack.Screen name="info" />
      <Stack.Screen name="addName" />
      <Stack.Screen name="addGender" />
      <Stack.Screen name="addCountry" />
      <Stack.Screen name="addMBTI" />
      <Stack.Screen name="interest" />
      <Stack.Screen name="ready" />
      <Stack.Screen name="start" />
    </Stack>
  );
};

export default LoginLayout;
