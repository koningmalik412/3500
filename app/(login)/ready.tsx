import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import GradientBackground from "../(components)/GradientBackground";
import { CaretLeft, CaretRight } from "phosphor-react-native";
import { fetchUserByUsername, updateUser } from "../utils/database";
import { useDatabase } from "../DatabaseContext";

export default function FinalScreen() {
  const router = useRouter();

  const { user, loadUser } = useDatabase();

  const handleSubmit = async () => {
    // await updateUser(user.id, { is_initialized: true });
    const new_user = await fetchUserByUsername(user.username);
    loadUser(new_user);
    router.push("/home");
  };

  return (
    <GradientBackground>
      <View className="flex-1 py-5 px-8">
        {/* Back Button */}
        <TouchableOpacity className="mt-14 mb-5" onPress={() => router.back()}>
          <CaretLeft size={32} color="white" weight="bold" />
        </TouchableOpacity>

        {/* Title */}
        <Text className="text-white font-msbold text-4xl font-bold  mt-28 mb-20">
          You're all set!
        </Text>

        {/* Subtitle */}
        <Text className="text-white font-mssbold text-lg mb-14">
          We’ll use this information to find you the people you’re most
          compatible with on campus
        </Text>

        {/* Additional Instructions */}
        <Text className="text-white font-msmedium text-md">
          You can always change your interests in your profile page
        </Text>

        {/* Continue Button */}
        <View className="absolute bottom-12 left-8 w-full">
          <TouchableOpacity
            className="bg-pink py-2 pl-5 pr-4 rounded-2xl items-center place-content-center m-auto"
            onPress={handleSubmit}
          >
            <Text className="text-white text-lg font-bold">
              Continue <CaretRight size={20} color="white" weight="bold" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </GradientBackground>
  );
}
