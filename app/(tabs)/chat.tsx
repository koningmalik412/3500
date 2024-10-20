import React from "react";
import { View, Text, FlatList } from "react-native";
import MessageItem from "../(components)/MessageItem";
import GradientBackgroundHome from "../(components)/GradientBackgroundHome";
import Header from "../(components)/Header";
import { useDatabase } from "../DatabaseContext";

// Define the message structure
interface Message {
  id: string;
  name: string;
  avatar: string;
  message: string;
  time: string;
}

// Sample message data
const messagesData: Message[] = [
  {
    id: "1",
    name: "Ferral",
    avatar: "ferraldp.jpg",
    message: "You still owe me money",
    time: "10:30",
  },
  {
    id: "7",
    name: "Rina",
    avatar: "rinadp.jpg",
    message: "Wanna study together?",
    time: "9:14",
  },
  {
    id: "2",
    name: "Alvin",
    avatar: "alvindp.png",
    message: "I've submitted our assignment 👍",
    time: "Yesterday",
  },
  {
    id: "3",
    name: "Sophie",
    avatar: "sophiedp.jpg",
    message: "See you!",
    time: "Tuesday",
  },
  {
    id: "4",
    name: "Liam",
    avatar: "liamdp.jpg",
    message: "Thats crazyy 😭😭",
    time: "Tuesday",
  },
  {
    id: "5",
    name: "Jinsun",
    avatar: "jinsondp.jpg",
    message: "We can do it tomorrow",
    time: "Monday",
  },
  {
    id: "6",
    name: "Jasmine",
    avatar: "jasminedp.jpg",
    message: "Alright, just lmk",
    time: "Sunday",
  },
];

// Messages Screen Component
const MessagesScreen: React.FC = () => {
  const { user } = useDatabase();
  return (
    <GradientBackgroundHome>
      <View className="flex-1 px-2">
        <Header user={user} />
        <Text className="text-2xl font-msbold text-purple mb-4 px-4">
          Message
        </Text>
        <FlatList
          data={messagesData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MessageItem item={item} />} // Reuse the MessageItem component
        />
      </View>
    </GradientBackgroundHome>
  );
};

export default MessagesScreen;
