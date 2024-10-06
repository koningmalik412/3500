import { Tabs } from "expo-router";
import {
  House,
  Compass,
  Users,
  ChatText,
} from "phosphor-react-native";

export default () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#51247A",
        tabBarInactiveTintColor: "#51247A",
        tabBarStyle: {
          paddingTop: 8,
          height: 100,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <House size={32} weight={focused ? "fill" : "regular"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="nearby"
        options={{
          title: "Nearby",
          tabBarIcon: ({ color, focused }) => (
            <Compass size={32} weight={focused ? "fill" : "regular"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="social"
        options={{
          title: "Social",
          tabBarIcon: ({ color, focused }) => (
            <Users size={32} weight={focused ? "fill" : "regular"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarIcon: ({ color, focused }) => (
            <ChatText size={32} weight={focused ? "fill" : "regular"} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};
