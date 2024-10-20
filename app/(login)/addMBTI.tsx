import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Link, useRouter } from "expo-router";
import RNPickerSelect from "react-native-picker-select";
import GradientBackground from "../(components)/GradientBackground";
import { CaretLeft, CaretRight } from "phosphor-react-native";
import { useDatabase } from "../DatabaseContext";
import { updateUser } from "../utils/database";

import mbtiList from "../utils/data/mbtiPersonalities.json";

export default function addName() {
  const router = useRouter();

  const { user } = useDatabase();

  const [mbti, setMbti] = useState<string>("");

  const handleSubmit = async () => {
    await updateUser(user.id, { mbti: mbti });
    router.push("/interest");
  };

  return (
    <GradientBackground>
      <View className="flex-1 py-5 px-8">
        {/* Back Button */}
        <View className="flex-row justify-between items-center">
          <TouchableOpacity
            className="mt-14 mb-12"
            onPress={() => router.back()}
          >
            <CaretLeft size={32} color="white" weight="bold" />
          </TouchableOpacity>
        </View>

        {/* Welcome Text */}
        <Text className="text-4xl font-msbold text-white mb-10 mt-5">
          Help us get to know you better!
        </Text>
        <Text className="text-xl font-msbold text-white mb-1">
          What is your MBTI?
        </Text>

        <ScrollView>
          <View className="flex-column mt-2 mb-24">
            {mbtiList.map((mbtiData, index) => (
              <TouchableOpacity
                key={index}
                className={`bg-white flex-row items-center py-2 px-2 rounded-full mr-2 mb-2 ${
                  mbti === mbtiData.type ? "bg-pink" : ""
                }`}
                onPress={() => setMbti(mbtiData.type)}
              >
                <View className={`bg-blue py-1 px-2 rounded-2xl mr-2`}>
                  <Text className={`text-white font-msbold text-base `}>
                    {mbtiData.type}
                  </Text>
                </View>
                <Text
                  className={`text-purple font-msbold text-base ${
                    mbti === mbtiData.type ? "text-white" : ""
                  }`}
                >
                  {mbtiData.nickname}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

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
