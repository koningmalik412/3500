import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { Asset } from "expo-asset";

interface MessageLineProps {
  isSender: boolean; // True if the message is sent by the current user
  message: string;
  avatar: string;
}

const preloadAssets = async () => {
  const imageAssets = Object.values(imageMap).map((image) => {
    return Asset.fromModule(image).downloadAsync();
  });

  // Await all image preloading
  await Promise.all(imageAssets);
};

const imageMap: { [key: string]: any } = {
  "malikdp.jpeg": require("../../assets/images/dps/malikdp.jpeg"),
  "rinadp.jpg": require("../../assets/images/dps/rinadp.jpg"),
};

const MessageLine: React.FC<MessageLineProps> = ({
  isSender,
  message,
  avatar,
}) => {
  useEffect(() => {
    const loadAssets = async () => {
      await preloadAssets();
    };

    loadAssets();
  }, []);
  return (
    <View
      className={`flex-row items-center mb-2 ${
        isSender ? "justify-end" : "justify-start"
      }`}
    >
      {!isSender && (
        <Image
          source={imageMap[avatar]}
          className="w-12 h-12 rounded-full border-2 border-purple mx-2"
        />
      )}
      <View
        className={`max-w-[70%] p-3 rounded-3xl ${
          isSender ? "bg-purple" : "bg-pink"
        }`}
      >
        <Text className="text-white font-msregular">{message}</Text>
      </View>
      {isSender && (
        <Image
          source={imageMap[avatar]}
          className="w-12 h-12 rounded-full border-2 border-purple mx-2"
        />
      )}
    </View>
  );
};

export default MessageLine;
