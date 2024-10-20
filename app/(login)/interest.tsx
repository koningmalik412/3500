import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import {
  associateUserWithHobby,
  fetchAllHobbies,
  fetchHobbyCategories,
} from "../utils/database";
import GradientBackground from "../(components)/GradientBackground";
import { CaretLeft, CaretRight } from "phosphor-react-native";
import { useDatabase } from "../DatabaseContext";

export default function InterestSelection() {
  const router = useRouter();
  const [categories, setCategories] = useState<any[]>([]);
  const [interests, setInterests] = useState<any[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  const { user } = useDatabase();

  useEffect(() => {
    const loadHobbies = async () => {
      try {
        const fetchedHobbies = await fetchAllHobbies();
        setInterests(fetchedHobbies);
        const fetchedCategories = await fetchHobbyCategories();
        setCategories(fetchedCategories);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadHobbies();
  }, []);

  const handleSubmit = async () => {
    selectedInterests.map(async (interest) => {
      await associateUserWithHobby(user.id, interest);
    });
    router.push("/ready");
  };

  const toggleInterest = (interest: number) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const canProceed = selectedInterests.length >= 3;

  return (
    <GradientBackground>
      <View className="flex-1 py-5 px-8">
        {/* Back Button */}
        <TouchableOpacity className="mt-14 mb-5" onPress={() => router.back()}>
          <CaretLeft size={32} color="white" weight="bold" />
        </TouchableOpacity>

        {/* Title */}
        <Text className="text-3xl font-msbold text-white mb-4">
          Select <Text className="text-pink">at least 3</Text> of your interests
        </Text>
        <Text className="text-white font-msmedium text-sm mb-2">
          You can choose as many you like
        </Text>

        {/* Scrollable list of interests */}
        <ScrollView>
          {categories.map((category, categoryIndex) => (
            <View key={categoryIndex}>
              {/* Category Title */}
              <Text className="text-white font-msbold text-xl mb-2 pt-3">
                {category.category}
              </Text>
              <View className="flex flex-row flex-wrap mb-4">
                {interests
                  ?.filter(
                    (interest) => interest.category === category.category
                  )
                  .map((hobbyData: { id: number; hobby: string }) => (
                    <TouchableOpacity
                      key={hobbyData.id}
                      className={`bg-white py-1 px-3 rounded-full mr-2 mb-2 ${
                        selectedInterests.includes(hobbyData.id)
                          ? "bg-pink"
                          : ""
                      }`}
                      onPress={() => toggleInterest(hobbyData.id)}
                    >
                      <Text
                        className={`text-purple font-msbold text-xs ${
                          selectedInterests.includes(hobbyData.id)
                            ? "text-white"
                            : ""
                        }`}
                      >
                        {hobbyData.hobby}
                      </Text>
                    </TouchableOpacity>
                  ))}
              </View>
            </View>
          ))}
        </ScrollView>

        <View className="w-full pb-7 pt-5 flex flex-row justify-between items-center">
          {/* Display number of selected interests */}
          <Text className="text-white font-msbold text-lg text-center">
            {selectedInterests.length}/3 selected
          </Text>

          {/* Next Button */}
          <TouchableOpacity
            className={`bg-pink py-2 rounded-2xl pl-5 pr-4 items-center ${
              !canProceed ? "bg-light-purple" : ""
            }`}
            disabled={!canProceed}
            onPress={handleSubmit}
          >
            <Text
              className={`text-white text-lg font-bold ${
                !canProceed ? "text-purple" : ""
              }`}
            >
              Next{" "}
              <CaretRight
                size={20}
                color={`${!canProceed ? "#51247A" : "white"}`}
                weight="bold"
              />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </GradientBackground>
  );
}
