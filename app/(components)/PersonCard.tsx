import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { CaretRight } from "phosphor-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Asset } from "expo-asset";

interface User {
  bio: string | null;
  created_at: string;
  date_of_birth: string;
  ethnicity: string | null;
  faculty: string;
  friends: number;
  full_name: string;
  gender: string | null;
  id: number;
  is_initialized: number;
  major: string;
  mbti: string | null;
  nickname: string | null;
  password: string;
  profile_picture: string;
  program_code: string;
  student_number: string;
  study_program: string;
  study_status: string;
  username: string;
}

interface Interest {
  category: string;
  hobby: string;
  id: number;
}

interface CompatibleUser {
  user: User;
  similarInterests: Interest[];
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

const PersonCard: React.FC<{ userData: CompatibleUser }> = ({ userData }) => {
  const router = useRouter(); // Initialize router for navigation

  useEffect(() => {
    const loadAssets = async () => {
      await preloadAssets();
    };

    loadAssets();
  }, []);

  return (
    <View key={userData.user.id}>
      <View className="flex-row items-center px-4 py-2 bg-white mb-3 rounded-2xl">
        <Image
          source={
            imageMap[userData.user.profile_picture] ||
            require("../../assets/images/dps/defaultdp.jpg")
          }
          className="w-16 h-16 border-[3px] border-purple rounded-full mr-2"
        />
        <View className="flex-1">
          {/* Name and MBTI tag */}
          <View className="flex-row items-center justify-between ml-2">
            <Text className="text-base font-msbold mr-2">
              {userData.user.nickname}
            </Text>
            <View className="flex-row items-center">
              <Text className="font-msregular pb-1">
                {userData.user.ethnicity} |{" "}
              </Text>
              <View className="bg-blue rounded-full mr-4">
                <Text className="text-[11px] font-msbold text-white px-2 py-1">
                  {userData.user.mbti}
                </Text>
              </View>
            </View>
          </View>
          <Text className="font-msregular text-[11px] ml-2">
            {userData.user.faculty} | {userData.user.program_code}
          </Text>

          {/* Interests */}
          <Text className="font-msbold text-xs text-purple mt-1 ml-2">
            <Text className="font-msblack">
              {userData.similarInterests.length}
            </Text>{" "}
            Shared{" "}
            {userData.similarInterests.length > 1 ? "Interests" : "Interest"}
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="flex-row overflow-hidden mt-1 ml-1"
          >
            {userData.similarInterests.map((interest, index) => (
              <View
                key={index}
                className={`bg-pink py-1 px-2 rounded-full mr-1 mb-2 `}
              >
                <Text className={`text-white font-msbold text-[10px]`}>
                  {interest.hobby}
                </Text>
              </View>
            ))}
          </ScrollView>
          <LinearGradient
            colors={["rgba(255,255,255,0)", "rgba(255,255,255,1)"]} // Transition from white to transparent
            className="absolute right-0 top-0 h-full w-2" // Full height and adjust width for fading effect
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          />
        </View>

        <TouchableOpacity
          onPress={() => router.push(`/user/${userData.user.username}`)}
        >
          <CaretRight size={24} color="#51247A" weight="bold" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PersonCard;
