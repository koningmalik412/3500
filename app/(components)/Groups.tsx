import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  ScrollView,
} from "react-native";
import { Chat, CaretRight } from "phosphor-react-native"; // Import the Chat icon from Phosphor
import { useRouter } from "expo-router";
import { Asset } from "expo-asset";

// Define the type for each group
interface Group {
  id: string;
  name: string;
  logo: ImageSourcePropType;
  description: string;
}

const preloadAssets = async () => {
  const imageAssets = Object.values(imageMap).map((image) => {
    return Asset.fromModule(image).downloadAsync();
  });

  // Await all image preloading
  await Promise.all(imageAssets);
};

// Sample groups data
const imageMap: { [key: string]: any } = {
  bsaLogo: require("../../assets/images/bsa.png"),
  uqunionLogo: require("../../assets/images/uqunion.jpg"),
  uqjxLogo: require("../../assets/images/uqjx.png"),
  uqkdcLogo: require("../../assets/images/uqkdc.png"),
};

// Sample groups data
const groupsData: Group[] = [
  {
    id: "1",
    name: "Brisbane-Asian Student Association (BSA)",
    logo: imageMap.bsaLogo,
    description: "Connecting Asian students in Brisbane",
  },
  {
    id: "2",
    name: "University of Queensland Union (UQU)",
    logo: imageMap.uqunionLogo,
    description: "Student advocacy and support at UQ",
  },
  {
    id: "3",
    name: "UQ Japan Exchange (UQJX)",
    logo: imageMap.uqjxLogo,
    description: "The official Japanese language and culture society",
  },
  {
    id: "4",
    name: "UQ K-pop Dance Club (UQKDC)",
    logo: imageMap.uqkdcLogo,
    description: "UQ’s first all-inclusive K-Pop Dance Club",
  },
];

const GroupComponent: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const loadAssets = async () => {
      await preloadAssets();
    };

    loadAssets();
  }, []);
  return (
    <View className="flex-1 px-2 pt-4">
      <Text className="text-xl text-purple mb-4 mx-2 font-msbold">
        Communities for you
      </Text>
      <ScrollView>
        {groupsData.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => router.push("/groupInfo")}
          >
            <View className="flex-row items-center px-4 py-4 bg-white mb-3 rounded-2xl shadow-md">
              <Image
                source={item.logo}
                className="w-16 h-16 rounded-full border-[3px] border-purple mr-2"
              />
              <View className="flex-1">
                <Text className="text-base font-msbold mr-2">{item.name}</Text>
                <Text className="text-sm font-msregular text-gray-500 mt-1">
                  {item.description}
                </Text>
              </View>
              <View>
                <CaretRight size={24} color="#51247A" weight="bold" />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default GroupComponent;
