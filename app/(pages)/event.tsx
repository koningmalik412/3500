import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import GradientBackgroundHome from "../(components)/GradientBackgroundHome";
import { Heart, ChatCircleDots, CaretLeft } from "phosphor-react-native";

export default function EventScreen() {
  const router = useRouter();

  return (
    <GradientBackgroundHome>
      <ScrollView className="flex-grow px-4 mt-16">
        {/* Header section */}
        <View className="flex-row items-center justify-between mb-4">
          <TouchableOpacity onPress={() => router.back()}>
            <CaretLeft size={32} />
          </TouchableOpacity>
          <Text className="text-lg font-msbold">Event</Text>
          <View className="w-6"></View>
        </View>

        {/* Event title and image */}
        <View className="mb-4">
          <Text className="text-2xl font-bold text-purple mb-2">
            # UQ Attractions Punching
          </Text>
          <View className="bg-white rounded-2xl mb-4">
            <Image
              source={require("../../assets/images/event1.png")} // Placeholder event image
              className="w-full h-48 rounded-t-2xl"
            />
            <Text className="text-sm p-5 font-msregular rounded-lg">
              If you are a new student, what kind of scenery have you seen on
              campus? Come take a picture and post it in the channel below!
            </Text>
          </View>

          <Text className="text-xs font-msregular ">
            2:25 PM - 11 September 2024
          </Text>
        </View>

        {/* Reactions section */}
        <View className="flex-row items-center mb-4">
          <View className="flex-row items-center mr-2">
            <Heart size={20} color="black" />
            <Text className="ml-1 font-msregular">25</Text>
          </View>
          <Text className="font-msregular pr-4">
            Liked by <Text className="font-msbold">Liwen Ai</Text> and others
          </Text>
          <View className="flex-row items-center">
            <ChatCircleDots size={20} color="black" />
            <Text className="ml-1 font-msregular">4</Text>
          </View>
        </View>

        {/* Comments section */}
        <View className="mb-4">
          <View className="flex-row mb-1">
            <Text className="font-msbold mr-1">Liwen Ai:</Text>
            <Text className="font-msregular">Cool!</Text>
          </View>
        </View>
      </ScrollView>
    </GradientBackgroundHome>
  );
}
