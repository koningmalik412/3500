import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Link, useRouter } from "expo-router";
import RNPickerSelect from "react-native-picker-select";
import GradientBackground from "../(components)/GradientBackground";
import { CaretLeft, CaretRight } from "phosphor-react-native";
import { useDatabase } from "../DatabaseContext";

export default function InfoScreen() {
  const router = useRouter();

  const { user } = useDatabase();

  return (
    <GradientBackground>
      <View className="flex-1 py-5 px-8">
        {/* Back Button */}
        <TouchableOpacity className="mt-14 mb-12" onPress={() => router.back()}>
          <CaretLeft size={32} color="white" weight="bold" />
        </TouchableOpacity>

        {/* Welcome Text */}
        <Text className="text-4xl font-msbold text-white mb-10">
          Welcome to UQ Plaza!
        </Text>
        <Text className="text-xl font-msbold text-white mb-5">
          Here’s what we found about you:
        </Text>

        <View className="mb-4 flex-row items-center gap-5">
          <Text className="text-white font-msbold">Student Number</Text>
          <TextInput
            className="bg-light-purple grow font-msmedium pb-2 pt-1 px-3 rounded-xl text-white text-sm"
            value={user.student_number}
            editable={false}
          />
        </View>

        {/* Full Name Field (Non-editable) */}
        <View className="mb-4 flex-row items-center gap-5">
          <Text className="text-white font-msbold">Full Name</Text>
          <TextInput
            className="bg-light-purple grow font-msmedium pb-2 pt-1 px-3 rounded-xl text-white text-sm"
            value={user.full_name}
            editable={false}
          />
        </View>

        {/* Birthday Field */}
        <View className="mb-8 flex-row items-center gap-5">
          <Text className="text-white font-msbold">Date of Birth</Text>
          <TextInput
            className="bg-light-purple grow font-msmedium pb-2 pt-1 px-3 rounded-xl text-white text-sm"
            value={user.date_of_birth}
            editable={false}
          />
        </View>

        <Text className="text-xl font-msbold text-white mb-5">Program</Text>

        {/* Program Info */}
        <View className="bg-light-purple p-5 rounded-lg mb-8">
          <Text className="text-white text-lg font-msbold mb-2">
            {user.study_program}
          </Text>
          <Text className="text-white font-msregular text-sm">
            <Text className="font-msbold">Major: </Text>
            {user.major}
          </Text>
          <Text className="text-white font-msregular text-sm">
            <Text className="font-msbold">Status: </Text>
            {user.study_status}
          </Text>
        </View>

        {/* Next Button */}
        <View className="absolute bottom-12 left-8 w-full">
          <View className="flex flex-row justify-center gap-1 mb-4">
            <Text className="text-white font-msregular text-center">
              Is this not correct?{" "}
            </Text>
            <TouchableOpacity>
              <Text className="text-white font-msregular text-center underline">
                Reach out to us.
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            className="bg-pink py-2 pl-5 pr-4 rounded-2xl m-auto"
            onPress={() => router.push("/addName")}
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
