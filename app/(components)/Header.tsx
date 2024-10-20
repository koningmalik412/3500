import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { MagnifyingGlass } from "phosphor-react-native";
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
  defaultdp: require("../../assets/images/dps/defaultdp.jpg"),
};

const Header: React.FC<{
  user: User;
}> = ({ user }) => {
  const router = useRouter();

  useEffect(() => {
    const loadAssets = async () => {
      await preloadAssets();
    };

    loadAssets();
  }, []);

  return (
    <View className="mt-16 px-4 mb-3 flex flex-row items-center justify-between">
      <TouchableOpacity
        className="flex-row"
        onPress={() => router.push("/profile")}
      >
        <Image
          source={imageMap[user.profile_picture] || imageMap["defaultdp"]}
          className="w-12 h-12 object-cover rounded-full border-2 border-purple"
        />
        <View className="ml-3 pb-1">
          <Text className="font-mssbold text-lg">{user.nickname}</Text>
          <Text className="font-msregular text-[11px]">
            {user.faculty} | {user.program_code}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="p-1">
        <MagnifyingGlass color="#51247A" weight="bold" size={32} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
