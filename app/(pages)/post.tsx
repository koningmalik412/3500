import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { CaretLeft, UserPlus } from "phosphor-react-native";
import { Heart, ChatCircleDots } from "phosphor-react-native"; // Import Phosphor icons

export default function PostScreen() {
  const router = useRouter();

  return (
    <ScrollView className="flex-grow px-4 bg-gray-100 mt-16">
      {/* Header section */}
      <View className="flex-row items-center justify-between mb-4">
        <TouchableOpacity onPress={() => router.back()}>
          <CaretLeft size={32} />
        </TouchableOpacity>
        <Text className="text-lg font-msbold">Post</Text>
        <View className="w-6"></View>
      </View>

      {/* User info section */}
      <View className="flex flex-row justify-between mb-4">
        <View className="flex-row items-center">
          <Image
            source={require("../../assets/images/dps/malikdp.jpeg")}
            className="w-12 h-12 rounded-full mr-3 border-2 border-purple"
          />
          <View>
            <Text className="text-base font-bold">Malik</Text>
            <Text className="text-xs text-gray-500">EAIT | CS</Text>
          </View>
        </View>

        <TouchableOpacity className="flex-row items-center px-2 m-2 border border-purple rounded">
          {/* Replace Ionicons with Phosphor */}
          <UserPlus size={20} color="#51247A" />
          <Text className="text-purple font-msregular ml-2">Add friend</Text>
        </TouchableOpacity>
      </View>

      {/* Post content */}
      <View className="mb-4">
        <Text className="text-base font-msregular mb-2">So pretty</Text>
        <Image
          source={require("../../assets/images/posts/post1.jpg")}
          className="w-full h-[440px] rounded-lg mb-2"
        />
        <Text className="text-xs font-msregular text-gray-500">
          2:25 PM - 11 September 2024
        </Text>
      </View>

      {/* Reactions section */}
      <View className="flex-row items-center mb-4">
        <View className="flex-row items-center mr-2">
          {/* Replace Ionicons with Phosphor */}
          <Heart size={20} color="black" />
          <Text className="font-msregular ml-2">25</Text>
        </View>
        <Text className="text-xs text-gray-500 font-msregular pr-4">
          Liked by <Text className="font-msbold">Liwen Ai</Text> and others
        </Text>
        <View className="flex-row items-center">
          {/* Replace Ionicons with Phosphor */}
          <ChatCircleDots size={20} color="black" />
          <Text className="font-msregular ml-2">4</Text>
        </View>
      </View>

      {/* Comments section */}
      <View className="mb-4">
        <View className="flex-row mb-2">
          <Text className="font-msbold mr-2">Liwen Ai:</Text>
          <Text className="text-sm font-msregular">Cool!</Text>
        </View>
      </View>
    </ScrollView>
  );
}
