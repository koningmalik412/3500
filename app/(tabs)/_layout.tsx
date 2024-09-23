import { Tabs } from "expo-router";
import {
  House,
  BuildingApartment,
  Ticket,
  Users,
  ChatText,
} from "phosphor-react-native";
import { Text } from "react-native";

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
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <>
                <House size={32} weight="fill" color={color} />
                <Text className="font-mssbold text-purple text-xs">Home</Text>
              </>
            ) : (
              <>
                <House size={32} color={color} />
                <Text className="font-msregular text-purple text-xs">Home</Text>
              </>
            ),
        }}
      />
      <Tabs.Screen
        name="communities"
        options={{
          title: "Communities",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <>
                <BuildingApartment size={32} weight="fill" color={color} />
                <Text className="font-mssbold text-purple text-xs">
                  Community
                </Text>
              </>
            ) : (
              <>
                <BuildingApartment size={32} color={color} />
                <Text className="font-mssbold text-purple text-xs">
                  Community
                </Text>
              </>
            ),
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: "Events",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <>
                <Ticket size={32} weight="fill" color={color} />
                <Text className="font-mssbold text-purple text-xs">Events</Text>
              </>
            ) : (
              <>
                <Ticket size={32} color={color} />
                <Text className="font-mssbold text-purple text-xs">Events</Text>
              </>
            ),
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          title: "Friends",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <>
                <Users size={32} weight="fill" color={color} />
                <Text className="font-mssbold text-purple text-xs">
                  Friends
                </Text>
              </>
            ) : (
              <>
                <Users size={32} color={color} />
                <Text className="font-mssbold text-purple text-xs">
                  Friends
                </Text>
              </>
            ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <>
                <ChatText size={32} weight="fill" color={color} />
                <Text className="font-mssbold text-purple text-xs">Chat</Text>
              </>
            ) : (
              <>
                <ChatText size={32} color={color} />
                <Text className="font-mssbold text-purple text-xs">Chat</Text>
              </>
            ),
        }}
      />
    </Tabs>
  );
};
