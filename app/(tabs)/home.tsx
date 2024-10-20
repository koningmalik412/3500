// app/home.tsx
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageSourcePropType,
  TouchableWithoutFeedback,
} from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router"; // Import useRouter for navigation
import GradientBackgroundHome from "../(components)/GradientBackgroundHome";
import Header from "../(components)/Header";
import { ChatCircleDots, Heart } from "phosphor-react-native";
import { useDatabase } from "../DatabaseContext";
import { Asset } from "expo-asset";

interface Post {
  id: string;
  user: string;
  content: string;
  likes: number;
  comments: number;
  image: string;
  orientation: string;
}

interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
}

const preloadAssets = async () => {
  const imageAssets = Object.values(imageMap).map((image) => {
    return Asset.fromModule(image).downloadAsync();
  });

  // Await all image preloading
  await Promise.all(imageAssets);
};

const imageMap: { [key: string]: any } = {
  post1: require("../../assets/images/posts/post1.jpg"),
  post2: require("../../assets/images/posts/post2.jpg"),
  post3: require("../../assets/images/posts/post3.jpg"),
  post4: require("../../assets/images/posts/post4.jpg"),
  post5: require("../../assets/images/posts/post5.jpg"),
  post6: require("../../assets/images/posts/post6.jpg"),
  post7: require("../../assets/images/posts/post7.jpg"),
  post8: require("../../assets/images/posts/post8.jpg"),
  rinadp: require("../../assets/images/dps/rinadp.jpg"),
  alvindp: require("../../assets/images/dps/alvindp.png"),
  event1: require("../../assets/images/event1.png"),
  event2: require("../../assets/images/event2.png"),
  event3: require("../../assets/images/event3.jpg"),
};

// Posts with image keys from imageMap
const posts: Post[] = [
  {
    id: "1",
    user: "Rina",
    content: "Going out tonight",
    likes: 25,
    comments: 4,
    image: "post1",
    orientation: "portrait",
  },
  {
    id: "2",
    user: "Alvin",
    content: "Crazy day today",
    likes: 42,
    comments: 7,
    image: "post2",
    orientation: "landscape",
  },
  {
    id: "3",
    user: "Rina",
    content: "New dress!",
    likes: 32,
    comments: 6,
    image: "post8",
    orientation: "portrait",
  },
  {
    id: "4",
    user: "Alvin",
    content: "Look at him",
    likes: 19,
    comments: 3,
    image: "post4",
    orientation: "portrait",
  },
  {
    id: "5",
    user: "Rina",
    content: "Paris vibes~",
    likes: 215,
    comments: 14,
    image: "post5",
    orientation: "portrait",
  },
  {
    id: "6",
    user: "Alvin",
    content: "Met my friends!!",
    likes: 42,
    comments: 7,
    image: "post6",
    orientation: "landscape",
  },
  {
    id: "7",
    user: "Rina",
    content: "Taken last night",
    likes: 2,
    comments: 6,
    image: "post7",
    orientation: "portrait",
  },
  {
    id: "8",
    user: "Alvin",
    content: "Night sky vibes",
    likes: 0,
    comments: 0,
    image: "post3",
    orientation: "landscape",
  },
];

// Events with image keys from imageMap
const events: Event[] = [
  {
    id: "1",
    title: "#UQ Attractions Punching",
    description:
      "If you are a new student, what kind of scenery have you seen on campus? Come take a picture and post it in the channel below!",
    image: "event1",
  },
  {
    id: "2",
    title: "#Cat and Mouse Game",
    description:
      "The campus is hosting cat and mouse games! Join the game, team up with your friends or meet new friends live! ",
    image: "event2",
  },
  {
    id: "3",
    title: "#UQ Hackathon 2024",
    description:
      "Join us for a 48-hour hackathon to win a grand prize! Gather your team and be ready to show the world what you've got!",
    image: "event3",
  },
];

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState<"Post" | "Event">("Post");
  const router = useRouter(); // Initialize router
  const { user } = useDatabase();

  useEffect(() => {
    const loadAssets = async () => {
      await preloadAssets();
    };

    loadAssets();
  }, []);

  return (
    <GradientBackgroundHome>
      <View className="flex-1 px-2">
        <Header user={user} />
        {/* Custom Tab Header for Post and Event */}
        <View className="flex flex-row justify-around bg-white rounded-full shadow-md">
          <TouchableOpacity
            className={`py-1 w-1/2 flex items-center ${
              activeTab === "Post" ? "bg-purple rounded-full" : ""
            }`}
            onPress={() => setActiveTab("Post")}
          >
            <Text
              className={`text-sm font-msbold ${
                activeTab === "Post" ? "text-white" : "text-purple"
              }`}
            >
              Posts
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`py-1 w-1/2 flex items-center ${
              activeTab === "Event" ? "bg-purple rounded-full" : ""
            }`}
            onPress={() => setActiveTab("Event")}
          >
            <Text
              className={`text-sm font-msbold ${
                activeTab === "Event" ? "text-white" : "text-purple"
              }`}
            >
              Events
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === "Post" && (
          <ScrollView
            showsVerticalScrollIndicator={false}
            className="flex-column mt-1"
          >
            {posts.map((item, index) => {
              return (
                <TouchableWithoutFeedback
                  onPress={() => router.push("/post")}
                  key={index}
                >
                  <View className="flex-1 m-1 bg-white p-3 rounded-2xl mt-2">
                    <View className="flex-row items-center gap-2 mb-2">
                      <Image
                        source={
                          item.user === "Rina"
                            ? imageMap["rinadp"]
                            : imageMap["alvindp"]
                        }
                        className="w-10 h-10 rounded-full border-2 border-purple"
                      />
                      <View className="pb-1">
                        <Text className="font-mssbold text-xs">
                          {item.user}
                        </Text>
                        <Text className="font-msregular text-[9px]">
                          HABS | Psy
                        </Text>
                      </View>
                    </View>

                    <Image
                      source={imageMap[item.image]}
                      className={`w-full rounded-lg mb-3 ${
                        item.orientation === "portrait" ? "h-[450px]" : "h-60"
                      }`}
                    />

                    <Text className="text-xs font-msregular mb-2 pl-1">
                      <Text className="font-msbold">{item.user} </Text>
                      {item.content}
                    </Text>
                    <View className="flex flex-row font-msregular gap-1 items-center">
                      <View className="flex flex-row items-center gap-1">
                        <TouchableOpacity>
                          <Heart size={20} />
                        </TouchableOpacity>

                        <Text>{item.likes}</Text>
                      </View>

                      <View className="flex flex-row items-center gap-1">
                        <TouchableOpacity>
                          <ChatCircleDots size={20} />
                        </TouchableOpacity>

                        <Text>{item.comments}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </ScrollView>
        )}

        {activeTab === "Event" && (
          <ScrollView className="mt-3">
            {events.map((item, index) => (
              <View
                key={index}
                className="mb-4 mx-1 bg-white rounded-2xl shadow-md"
              >
                <Image
                  source={imageMap[item.image]}
                  className="w-full h-48 rounded-t-2xl" // Fixed size 300x500 for event images
                />
                <View className="px-5 py-5">
                  <Text className="text-lg font-msbold mb-1">{item.title}</Text>
                  <Text className="text-sm font-msregular text-gray-500 mb-5">
                    {item.description}
                  </Text>
                  <TouchableOpacity
                    className=" bg-purple px-5 py-2 rounded-full items-center"
                    onPress={() => router.push("/event")}
                  >
                    <Text className="text-sm font-msbold text-white">
                      View Event
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    </GradientBackgroundHome>
  );
}
