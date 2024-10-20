import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import GradientBackground from "../(components)/GradientBackground";
import { CaretLeft, CaretRight } from "phosphor-react-native";
import { useDatabase } from "../DatabaseContext";
import { updateUser } from "../utils/database";

export default function addName() {
  const [nickname, setNickname] = useState<string>("");
  const router = useRouter();

  const { user } = useDatabase();

  const handleSubmit = async () => {
    await updateUser(user.id, { nickname: nickname });
    router.push("/addGender");
  };

  return (
    <GradientBackground>
      <View className="flex-1 py-5 px-8">
        {/* Back Button */}
        <TouchableOpacity className="mt-14 mb-12" onPress={() => router.back()}>
          <CaretLeft size={32} color="white" weight="bold" />
        </TouchableOpacity>

        {/* Welcome Text */}
        <Text className="text-4xl font-msbold text-white mb-10 mt-5">
          Help us get to know you better!
        </Text>
        <Text className="text-xl font-msbold text-white mb-5 mt-10">
          What do you want people to call you?
        </Text>

        <TextInput
          className="bg-white font-msmedium px-4 pb-3 pt-2 rounded-2xl text-black text-base"
          value={nickname}
          onChangeText={(text) => setNickname(text)}
          placeholder="Enter nickname"
        />

        {/* Next Button */}
        <View className="absolute bottom-12 left-8 w-full">
          <TouchableOpacity
            className="bg-pink py-2 pl-5 pr-4 rounded-2xl m-auto"
            onPress={handleSubmit}
          >
            <Text className="text-white text-lg font-bold">
              Next <CaretRight size={20} color="white" weight="bold" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </GradientBackground>
  );
}
