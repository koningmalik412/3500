import { View, Text, ImageBackground, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import { TouchableOpacity } from "react-native";
import GradientBackgroundHome from "../(components)/GradientBackgroundHome";
import {
  Cake,
  CalendarBlank,
  CaretLeft,
  CaretRight,
  GenderMale,
  LineVertical,
  GenderFemale,
  GenderIntersex,
  UserPlus,
  Chat,
} from "phosphor-react-native";
import { fetchHobbiesByUsername, fetchUserByUsername } from "../utils/database";
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

function calculateAge(birthDate: Date) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();

  if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
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

const UserScreen = () => {
  const [user, setUser] = useState<User | null>(null); // Start with null
  const [birthDate, setBirthDate] = useState<Date | null>(null); // Handle birth date separately
  const [hobbies, setHobbies] = useState<{ category: string; hobby: string }[]>(
    []
  );
  const [loading, setLoading] = useState(true); // Loading state

  const { username } = useLocalSearchParams();
  const router = useRouter();

  useEffect(() => {
    const loadAssets = async () => {
      await preloadAssets();
    };
    loadAssets();
  }, []);

  // Fetch user data
  useEffect(() => {
    const getUser = async () => {
      if (username) {
        const fetchedUser = await fetchUserByUsername(username);
        setUser(fetchedUser);

        if (fetchedUser?.date_of_birth) {
          setBirthDate(new Date(fetchedUser.date_of_birth));
        }

        // Fetch hobbies after user data is fetched
        if (fetchedUser?.username) {
          const interests = await fetchHobbiesByUsername(fetchedUser.username);
          setHobbies(interests);
        }

        setLoading(false); // Set loading to false once user and hobbies are fetched
      }
    };

    getUser();
  }, [username]); // Only re-run this effect when `username` changes

  if (loading || !user) {
    return (
      <GradientBackgroundHome>
        <Text className="text-center mt-5 text-lg text-purple">Loading...</Text>
      </GradientBackgroundHome>
    );
  }

  return (
    <GradientBackgroundHome>
      <ScrollView>
        <ImageBackground
          source={
            user.username === "s4818189"
              ? require("../../assets/images/alvinbg.jpg")
              : require("../../assets/images/profilebg.jpg")
          }
          className="w-full h-[327px]"
          resizeMode="contain"
        >
          <View className="flex-row items-center px-4 mt-16 justify-between">
            <View className="flex-row items-center gap-1">
              <TouchableOpacity onPress={() => router.back()}>
                <CaretLeft size={32} color="white" weight="bold" />
              </TouchableOpacity>
              <Text className="text-2xl font-msbold text-white">Profile</Text>
            </View>
          </View>
        </ImageBackground>
        <View className="relative">
          <Image
            source={
              imageMap[user.profile_picture] ||
              require("../../assets/images/dps/defaultdp.jpg")
            }
            className="w-32 h-32 rounded-full mr-3 border-[3px] border-purple absolute left-4 -top-16"
          />
          <View className="ml-40 mt-2 flex-row justify-between">
            <View className="">
              <Text className="font-msbold text-lg">{user.nickname}</Text>
              <Text className="font-msregular text-xs">{user.full_name}</Text>
            </View>
          </View>
          <View className="px-4 pb-3 mt-3 border-b-[0.5px] border-light-purple">
            <View className="flex-row items-center mt-5">
              <Text className="font-msitalic">{user.bio || "No bio yet"}</Text>
            </View>

            <Text className="text-purple font-msregular text-xs mt-6">
              {user.faculty} | {user.study_program}
            </Text>

            <View className="flex-row items-center mt-2">
              {user.gender === "Man" && (
                <GenderMale color="#51247A" size={16} />
              )}
              {user.gender === "Woman" && (
                <GenderFemale color="#51247A" size={16} />
              )}
              {user.gender === "Other" && (
                <GenderIntersex color="#51247A" size={16} />
              )}

              <Text className="text-purple font-msregular text-xs">
                {" "}
                {user.gender}
              </Text>
              <LineVertical color="#51247A" size={16} />
              <Cake color="#51247A" size={16} />
              <Text className="text-purple font-msregular text-xs">
                {" "}
                {birthDate && calculateAge(birthDate)}
              </Text>
              <LineVertical color="#51247A" size={16} />
              <CalendarBlank color="#51247A" size={16} />
              <Text className="text-purple font-msregular text-xs">
                {" "}
                {birthDate &&
                  birthDate.getDate() +
                    " " +
                    birthDate.toLocaleString("default", { month: "short" })}
              </Text>
              <LineVertical color="#51247A" size={16} />
              <Text className="text-purple font-msregular text-xs">
                {" "}
                {user.ethnicity}
              </Text>
              <LineVertical color="#51247A" size={16} />
              <View className="bg-blue rounded-full py-1 px-2">
                <Text className="text-white font-msbold text-xs">
                  {user.mbti}
                </Text>
              </View>
            </View>

            <Text className="font-msregular text-purple text-md mt-3">
              <Text className="font-msbold">{user.friends}</Text> Friends
            </Text>
            <View className="flex-row items-center gap-1 pr-2 mt-2 mb-1">
              <TouchableOpacity className="flex-row items-center justify-center w-1/2 py-2 rounded-full bg-purple">
                <UserPlus size={20} weight="bold" color="#FFFFFF" />
                <Text className="text-center font-msbold text-white ml-2">
                  Add Friend
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex-row items-center justify-center w-1/2 py-2 rounded-full bg-purple"
                onPress={() => router.push("/activeChat")}
              >
                <Chat size={20} weight="bold" color="#FFFFFF" />
                <Text className="text-center font-msbold text-white ml-2">
                  Message
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="px-4 pb-3 mt-3">
            <Text className="font-msbold text-base text-purple">Interests</Text>

            <View className="flex flex-row flex-wrap mt-2">
              {hobbies.map(
                (hobbyData: { category: string; hobby: string }, index) => (
                  <View
                    key={index}
                    className={`bg-pink py-1 px-3 rounded-full mr-2 mb-2 `}
                  >
                    <Text className={`text-white font-msbold text-xs`}>
                      {hobbyData.hobby}
                    </Text>
                  </View>
                )
              )}
            </View>
          </View>
          <View className="px-2 pb-3">
            <Text className="font-msbold px-2 text-base text-purple">
              Posts
            </Text>
            <Text className="font-msbold text-center text-purple text-base mt-10 mb-10">
              No posts yet
            </Text>
          </View>
        </View>
      </ScrollView>
    </GradientBackgroundHome>
  );
};

export default UserScreen;
