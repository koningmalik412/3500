import { View, Text, ImageBackground, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import GradientBackgroundHome from "../(components)/GradientBackgroundHome";
import {
  Cake,
  Heart,
  ChatCircleDots,
  CalendarBlank,
  CaretLeft,
  CaretRight,
  Gear,
  GenderMale,
  LineVertical,
  PencilSimpleLine,
  GenderFemale,
  GenderIntersex,
} from "phosphor-react-native";
import { useDatabase } from "../DatabaseContext";
import {
  deleteHobbyByUserId,
  fetchHobbiesByUsername,
  resetTables,
} from "../utils/database";
import { Asset } from "expo-asset";

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
  alvinbg: require("../../assets/images/alvinbg.jpg"),
  profilebg: require("../../assets/images/profilebg.jpg"),
  default: require("../../assets/images/dps/defaultdp.jpg"),
};

const Profile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [birthDate, setBirthDate] = useState(new Date());
  const [hobbies, setHobbies] = useState<{ category: string; hobby: string }[]>(
    []
  );

  const { user, clearSession, clearUser } = useDatabase();
  const router = useRouter();

  useEffect(() => {
    if (user && user.date_of_birth) {
      setBirthDate(new Date(user.date_of_birth));
    }

    const loadInterests = async () => {
      const interests = await fetchHobbiesByUsername(user.username);
      setHobbies(interests);
    };

    const loadAssets = async () => {
      await preloadAssets();
    };
    loadAssets();
    loadInterests();
  }, []);

  const handleLogout = async () => {
    console.log("Logging out...");
    // resetTables();
    await deleteHobbyByUserId(19);
    router.push("/start");
    clearSession();
    clearUser();
    setIsVisible(false);
  };

  return (
    <GradientBackgroundHome>
      <ScrollView>
        <ImageBackground
          source={
            user.username === "s4818189" ? imageMap.alvinbg : imageMap.profilebg
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
            <TouchableOpacity
              onPress={() => setIsVisible(!isVisible)}
              className="relative"
            >
              <Gear size={32} color="#FFFFFF" />
              {isVisible && (
                <View className="absolute right-0 top-6 mt-2 w-40 bg-white rounded-lg">
                  <TouchableOpacity onPress={handleLogout} className="p-3">
                    <Text className="text-red-600 text-center font-msbold">
                      Log Out
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View className="relative">
          <Image
            source={imageMap[user.profile_picture] || imageMap.default}
            className="w-32 h-32 rounded-full mr-3 border-[3px] border-purple absolute left-4 -top-16"
          />
          <View className="ml-40 mt-2 flex-row justify-between">
            <View className="">
              <Text className="font-msbold text-lg">{user.nickname}</Text>
              <Text className="font-msregular text-xs">{user.full_name}</Text>
            </View>
            <TouchableOpacity className="mr-6 mt-2">
              <PencilSimpleLine color="#51247A" size={26} />
            </TouchableOpacity>
          </View>
          <View className="px-4 pb-3 mt-3 border-b-[0.5px] border-light-purple">
            <View className="flex-row items-center mt-5">
              <Text className="font-msitalic">Add bio </Text>
              <PencilSimpleLine size={16} />
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
                {calculateAge(birthDate)}
              </Text>
              <LineVertical color="#51247A" size={16} />
              <CalendarBlank color="#51247A" size={16} />
              <Text className="text-purple font-msregular text-xs">
                {" "}
                {birthDate.getDate() +
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
          </View>
          <View className="px-4 pb-3 mt-3">
            <TouchableOpacity className="flex-row items-center">
              <Text className="font-msbold text-base text-purple">
                My Interests
              </Text>
              <CaretRight size={16} color="#51247A" weight="bold" />
            </TouchableOpacity>

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
            {/* <View className="flex flex-row flex-wrap mt-2">
              <TouchableOpacity
                className="flex-1 bg-white p-3 rounded-2xl shadow-md"
                onPress={() => router.push("/post")}
              >

                <View className="flex-row items-center gap-2 mb-2">
                  <Image
                    source={require("../../assets/images/dps/malikdp.jpeg")}
                    className="w-10 h-10 rounded-full border-2 border-purple"
                  />
                  <View className="pb-1">
                    <Text className="font-mssbold text-xs">Malik Ismail</Text>
                    <Text className="font-msregular text-[9px]">EAIT | CS</Text>
                  </View>
                </View>

                <Image
                  source={require("../../assets/images/posts/post1.jpg")}
                  className={`w-full rounded-lg mb-3 h-[450px] `}
                />

                <Text className="text-xs font-msregular mb-2 pl-1">
                  <Text className="font-msbold">Malik Ismail </Text>
                  So pretty
                </Text>
                <View className="flex flex-row font-msregular gap-1 items-center">
                  <View className="flex flex-row items-center gap-1">
                    <TouchableOpacity>
                      <Heart size={20} />
                    </TouchableOpacity>

                    <Text>45</Text>
                  </View>

                  <View className="flex flex-row items-center gap-1">
                    <TouchableOpacity>
                      <ChatCircleDots size={20} />
                    </TouchableOpacity>

                    <Text>3</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View> */}
          </View>
        </View>
      </ScrollView>
    </GradientBackgroundHome>
  );
};

export default Profile;
