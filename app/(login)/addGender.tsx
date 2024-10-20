import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Link, useRouter } from "expo-router";
import RNPickerSelect from "react-native-picker-select";
import GradientBackground from "../(components)/GradientBackground";
import { CaretLeft, CaretRight } from "phosphor-react-native";
import { useDatabase } from "../DatabaseContext";
import { updateUser } from "../utils/database";

export default function addName() {
  const router = useRouter();

  const { user } = useDatabase();

  const [gender, setGender] = useState<string>("");

  const handleSubmit = async () => {
    await updateUser(user.id, { gender: gender });
    router.push("/addCountry");
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
          What is your gender?
        </Text>

        <TouchableOpacity
          className={`bg-white px-4 py-2 rounded-full ${
            gender === "Man" ? "bg-pink" : ""
          }`}
          onPress={() => setGender("Man")}
        >
          <Text
            className={`font-msmedium text-black text-base ${
              gender === "Man" ? "text-white" : ""
            }`}
          >
            Man
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`bg-white px-4 py-2 rounded-full mt-2 ${
            gender === "Woman" ? "bg-pink" : ""
          }`}
          onPress={() => setGender("Woman")}
        >
          <Text
            className={`font-msmedium text-black text-base ${
              gender === "Woman" ? "text-white" : ""
            }`}
          >
            Woman
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`bg-white px-4 py-2 rounded-full mt-2 ${
            gender === "Other" ? "bg-pink" : ""
          }`}
          onPress={() => setGender("Other")}
        >
          <Text
            className={`font-msmedium text-black text-base ${
              gender === "Other" ? "text-white" : ""
            }`}
          >
            Other
          </Text>
        </TouchableOpacity>

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
