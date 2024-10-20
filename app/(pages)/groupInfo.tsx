import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";
import { CaretLeft, CaretRight } from "phosphor-react-native";
import GradientBackgroundHome from "../(components)/GradientBackgroundHome";
import { fetchCompatible } from "../utils/fetchCompatible";
import { useDatabase } from "../DatabaseContext";
import PersonCard from "../(components)/PersonCard";
import { Asset } from "expo-asset";

// Define the image map
const imageMap: { [key: string]: any } = {
  bsabg: require("../../assets/images/bsabg.png"),
  bsaLogo: require("../../assets/images/bsa.png"),
  bsaActivity1: require("../../assets/images/posts/bsa1.jpg"),
  bsaActivity2: require("../../assets/images/posts/bsa2.jpg"),
  bsaActivity3: require("../../assets/images/posts/bsa3.jpg"),
};

// Preload all assets from the image map
const preloadAssets = async () => {
  const imageAssets = Object.values(imageMap).map((image) => {
    return Asset.fromModule(image).downloadAsync();
  });

  await Promise.all(imageAssets);
};

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

const groupActivities = [
  {
    id: "1",
    activityImage: imageMap.bsaActivity1,
    title: "Cultural Fiesta",
  },
  {
    id: "2",
    activityImage: imageMap.bsaActivity2,
    title: "Picnic & Paint",
  },
  {
    id: "3",
    activityImage: imageMap.bsaActivity3,
    title: "Crazy Rich Asians",
  },
];

const GroupInfo: React.FC = () => {
  const [userList, setUserlist] = useState<CompatibleUser[]>([]);
  const router = useRouter();
  const { user } = useDatabase();

  useEffect(() => {
    const loadUsers = async () => {
      setUserlist(await fetchCompatible(user));
    };

    const loadAssets = async () => {
      await preloadAssets();
    };

    loadAssets();
    loadUsers();
  }, []);

  return (
    <GradientBackgroundHome>
      <ScrollView className="flex-1">
        <ImageBackground
          source={imageMap.bsabg}
          className="w-full h-[327px]"
          resizeMode="contain"
        >
          <View className="flex-row items-center px-4 mt-16 justify-between">
            <View className="flex-row items-center gap-1">
              <TouchableOpacity onPress={() => router.back()}>
                <CaretLeft size={32} color="white" weight="bold" />
              </TouchableOpacity>
              <Text className="text-2xl font-msbold text-white">Community</Text>
            </View>
          </View>
        </ImageBackground>
        <View className="flex-row items-center justify-between mb-4 ">
          {/* Group Profile Image overlapping the banner */}
          <View className="absolute bottom-[-40px] left-1/2 transform -translate-x-[64px] flex-row items-center">
            <Image
              source={imageMap.bsaLogo}
              className="w-32 h-32 rounded-full border-4 border-purple"
            />
          </View>
        </View>

        {/* Follow Button positioned below the logo */}
        <View className="flex mt-9 mx-36">
          <TouchableOpacity className="bg-purple py-2 px-5 rounded-full">
            <Text className="text-white text-center font-msbold">Follow</Text>
          </TouchableOpacity>
        </View>

        {/* Group Name and Description */}
        <View className="mt-2 px-5">
          <Text className="text-lg font-msbold text-center">
            Brisbane-Asian Student Association (BSA International)
          </Text>
          <Text className="text-sm text-gray-600 mt-2 font-msregular text-center">
            BSA International (Brisbane-Asian Student Association) is a
            multicultural student social club primarily based at the University
            of Queensland.
          </Text>
        </View>

        {/* Group Activity */}
        <Text className="text-lg font-msbold text-purple px-5 pt-5">
          Activities
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 20 }}
          className="px-5 pt-2"
        >
          {groupActivities.map((activity) => (
            <View key={activity.id} className="mr-4">
              <Image
                source={activity.activityImage}
                className="w-36 h-36 rounded-lg"
              />
              <Text className="text-sm font-msregular text-center mt-2">
                {activity.title}
              </Text>
            </View>
          ))}
        </ScrollView>

        {/* Group Labels */}
        <Text className="text-lg font-msbold text-purple px-5 pt-5">
          Community Interests
        </Text>
        <View className="flex flex-row flex-wrap px-5 mt-3">
          <View className={`bg-pink py-1 px-3 rounded-full mr-1 mb-2 `}>
            <Text className={`text-white font-msbold`}>K-Pop 🎶</Text>
          </View>
          <View className={`bg-pink py-1 px-3 rounded-full mr-1 mb-2 `}>
            <Text className={`text-white font-msbold`}>C-Pop 🎶</Text>
          </View>
          <View className={`bg-pink py-1 px-3 rounded-full mr-1 mb-2 `}>
            <Text className={`text-white font-msbold`}>J-Pop 🎶</Text>
          </View>
          <View className={`bg-pink py-1 px-3 rounded-full mr-1 mb-2 `}>
            <Text className={`text-white font-msbold`}>K-Drama 🎭</Text>
          </View>
          <View className={`bg-pink py-1 px-3 rounded-full mr-1 mb-2 `}>
            <Text className={`text-white font-msbold`}>Anime 🎨</Text>
          </View>
        </View>

        {/* Group Members */}
        <Text className="text-lg font-msbold text-purple px-5 pt-5">
          Members
        </Text>
        <View className="mx-4 mt-2">
          {userList.map((userData) => (
            <PersonCard userData={userData} key={userData.user.id} />
          ))}
        </View>
      </ScrollView>
    </GradientBackgroundHome>
  );
};

export default GroupInfo;
