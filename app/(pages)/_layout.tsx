import { Stack } from "expo-router";

const PagesLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="activeChat" />
      <Stack.Screen name="event" />
      <Stack.Screen name="groupInfo" />
      <Stack.Screen name="msgScreen" />
      <Stack.Screen name="post" />
      <Stack.Screen
        options={{ animation: "slide_from_right" }}
        name="profile"
      />
    </Stack>
  );
};

export default PagesLayout;
