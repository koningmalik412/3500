import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Userinput from "./userInput";
import { useRouter } from "expo-router";
import { Asset } from "expo-asset";

interface PersonInfoProps {
  name: string;
  bio: string;
  time: string;
  onClose: () => void;
}

const preloadAssets = async () => {
  const imageAssets = Object.values(imageMap).map((image) => {
    return Asset.fromModule(image).downloadAsync();
  });

  // Await all image preloading
  await Promise.all(imageAssets);
};

const imageMap: { [key: string]: any } = {
  person: require("../../assets/images/map/person.png"),
  love: require("../../assets/images/map/love.png"),
  loves: require("../../assets/images/map/loves.png"),
  local: require("../../assets/images/map/local.png"),
  users: require("../../assets/images/map/users.png"),
};

const PersonInfo: React.FC<PersonInfoProps> = ({
  name,
  bio,
  time,
  onClose,
}) => {
  const router = useRouter();
  const [inputList, setInputList] = useState<string[]>([]);
  const [isLove, setIsLove] = useState(false);

  const handleProfilePress = () => {
    onClose();
    router.push("/user/s4818189");
  };

  useEffect(() => {
    const loadAssets = async () => {
      await preloadAssets();
    };

    loadAssets();
  }, []);

  return (
    <View className="p-4 bg-white rounded-lg shadow-md my-2 mx-3">
      {/* First Row: Avatar, Name */}
      <View className="flex-row items-center">
        <TouchableOpacity onPress={handleProfilePress}>
          <Image
            source={imageMap["person"]}
            className="w-12 h-12 rounded-full mr-3"
          />
        </TouchableOpacity>
        <Text className="text-lg font-bold flex-1">{name}</Text>
      </View>

      {/* Second Row: Bio */}
      <Text className="my-2 text-sm text-gray-700">{bio}</Text>

      {/* Third Row: Time */}
      <Text className="text-xs text-gray-500 mb-2">{time}</Text>

      {/* Fourth Row: Icons (Favorite, Comment, Location) */}
      <View className="flex-row justify-around items-center">
        <TouchableOpacity
          onPress={() => setIsLove(!isLove)}
          className="flex-row items-center"
        >
          <Image
            className="w-2.5 h-2.5"
            source={!isLove ? imageMap["love"] : imageMap["loves"]}
          />
          <Text className="ml-2 text-xs text-gray-700">
            {isLove ? "1" : "0"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center">
          <Userinput
            handleConfirm={(text) => {
              if (text && text.length > 0) {
                let newInputList = Array.from(inputList);
                newInputList.push(text);
                setInputList(newInputList);
              }
            }}
          />
          <Text className="ml-2 text-xs text-gray-700">{inputList.length}</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center">
          <Image className="w-2.5 h-2.5" source={imageMap["local"]} />
        </TouchableOpacity>
      </View>

      {/* Input List */}
      {inputList.map((text, index) => (
        <View key={index} className="flex-row items-center mt-2">
          <Image className="w-5 h-5 mr-2" source={imageMap["users"]} />
          <Text className="text-sm">{text}</Text>
        </View>
      ))}
    </View>
  );
};

export default PersonInfo;
