import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Asset } from "expo-asset";

// Define the message structure
interface Message {
  id: string;
  name: string;
  avatar: string;
  message: string;
  time: string;
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
  "ferraldp.jpg": require("../../assets/images/dps/ferraldp.jpg"),
  "alvindp.png": require("../../assets/images/dps/alvindp.png"),
  "jinsondp.jpg": require("../../assets/images/dps/jinsondp.jpg"),
  "liamdp.jpg": require("../../assets/images/dps/liamdp.jpg"),
  "sophiedp.jpg": require("../../assets/images/dps/sophiedp.jpg"),
  "jasminedp.jpg": require("../../assets/images/dps/jasminedp.jpg"),
  "ethandp.jpg": require("../../assets/images/dps/ethandp.jpg"),
  "oliviadp.jpg": require("../../assets/images/dps/oliviadp.jpg"),
  "jamesdp.jpg": require("../../assets/images/dps/jamesdp.jpg"),
  "emmadp.jpg": require("../../assets/images/dps/emmadp.jpg"),
  "lucasdp.jpg": require("../../assets/images/dps/lucasdp.jpg"),
  "avadp.jpg": require("../../assets/images/dps/avadp.jpg"),
  "noahdp.jpg": require("../../assets/images/dps/noahdp.jpg"),
  "minjundp.jpg": require("../../assets/images/dps/minjundp.jpg"),
  "akiradp.jpg": require("../../assets/images/dps/akiradp.jpg"),
  "rinadp.jpg": require("../../assets/images/dps/rinadp.jpg"),
  "yukidp.jpg": require("../../assets/images/dps/yukidp.jpg"),
};

// Message Item Component
const MessageItem: React.FC<{ item: Message }> = ({ item }) => {
  const router = useRouter(); // Initialize the router inside the component

  const handlePress = () => {
    // Navigate to the /chat route
    router.push(`/activeChat`);
  };

  useEffect(() => {
    const loadAssets = async () => {
      await preloadAssets();
    };

    loadAssets();
  }, []);

  return (
    <TouchableOpacity
      className="flex-row items-center py-4 px-4 mx-2 bg-white mb-2 rounded-2xl shadow-sm"
      onPress={handlePress}
    >
      <Image
        source={imageMap[item.avatar]}
        className="w-16 h-16 rounded-full border-[3px] border-purple mr-3"
      />
      <View className="flex-1">
        <View className="flex-row items-center">
          <Text className="text-base font-msbold mr-2">{item.name}</Text>
        </View>
        <Text className="text-sm font-msregular text-gray-500">
          {item.message}
        </Text>
      </View>
      <Text className="text-xs font-msregular text-gray-400">{item.time}</Text>
    </TouchableOpacity>
  );
};

export default MessageItem;
