import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For icons like heart, comment
import { useRouter } from "expo-router";
import MessageLine from "../(components)/MessageLine";
import GradientBackgroundHome from "../(components)/GradientBackgroundHome";

// Sample chat data
const messagesData = [
  {
    id: "1",
    message: "Good morning!",
    isSender: false,
    avatar: "rinadp.jpg",
  },
  {
    id: "2",
    message: "Good morning to you too",
    isSender: true,
    avatar: "malikdp.jpeg",
  },
  {
    id: "3",
    message: "Did you just wake up?",
    isSender: false,
    avatar: "rinadp.jpg",
  },
  {
    id: "4",
    message: "Yes, I did",
    isSender: true,
    avatar: "malikdp.jpeg",
  },
  {
    id: "5",
    message: "Omg, me too!",
    isSender: false,
    avatar: "rinadp.jpg",
  },
  {
    id: "6",
    message: "Wanna study together?",
    isSender: true,
    avatar: "malikdp.jpeg",
  },
];

const ActiveChat: React.FC = () => {
  const router = useRouter();
  const [newMessage, setNewMessage] = useState("");

  const handleBackPress = () => {
    router.back();
  };

  const handleSend = () => {
    if (newMessage.trim()) {
      // Logic to send the message and update the chat list goes here
      setNewMessage("");
    }
  };

  return (
    <GradientBackgroundHome>
      <View className="flex-1">
        {/* Header */}
        <View className="flex-row items-center p-3 bg-purple pt-14">
          <TouchableOpacity onPress={handleBackPress}>
            <Text>
              <Ionicons name="chevron-back-outline" size={30} color="#fff" />{" "}
              {/* Back icon */}
            </Text>
          </TouchableOpacity>
          <Text className="text-white font-msbold text-lg ml-4">Rina</Text>
        </View>

        {/* Messages List */}
        <FlatList
          data={messagesData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MessageLine
              message={item.message}
              isSender={item.isSender}
              avatar={item.avatar}
            />
          )}
          className="flex-1 p-3"
          contentContainerStyle={{ justifyContent: "flex-start" }} // Align messages at the top
        />

        {/* Input field */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
          className="flex-row items-center p-3 bg-white border-t border-gray-300"
        >
          <TextInput
            className="flex-1 p-3 border border-gray-300 font-msregular rounded-full mx-3 mb-6"
            placeholder="Type a message..."
            value={newMessage}
            onChangeText={(text) => setNewMessage(text)}
          />
          <TouchableOpacity onPress={handleSend} className="mb-5 mx-2">
            <Text>
              <Ionicons name="send" size={28} color="#51247A" />{" "}
              {/* Send Button Icon */}
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </GradientBackgroundHome>
  );
};

export default ActiveChat;
