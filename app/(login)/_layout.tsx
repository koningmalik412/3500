import { Stack } from "expo-router";

const LoginLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="info" />
      <Stack.Screen name="interest" />
      <Stack.Screen name="ready" />
      <Stack.Screen name="start" />
    </Stack>
  );
};

export default LoginLayout;
