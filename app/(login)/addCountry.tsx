import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Link, useRouter } from "expo-router";
import GradientBackground from "../(components)/GradientBackground";
import { CaretLeft, CaretRight } from "phosphor-react-native";
import { useDatabase } from "../DatabaseContext";
import { updateUser } from "../utils/database";

import countryList from "../utils/data/countries.json";

export default function addName() {
  const router = useRouter();

  const { user } = useDatabase();

  // State to manage the editable nickname
  const [countries, setCountries] = useState<string[]>([]);

  const handleSubmit = async () => {
    await updateUser(user.id, { ethnicity: countries.join("") });
    router.push("/addMBTI");
  };

  const toggleCountry = (country: string) => {
    if (countries.includes(country)) {
      setCountries(countries.filter((i) => i !== country));
    } else {
      setCountries([...countries, country]);
    }
  };

  return (
    <GradientBackground>
      <View className="flex-1 py-5 px-8 relative">
        {/* Back Button */}
        <TouchableOpacity className="mt-14 mb-12" onPress={() => router.back()}>
          <CaretLeft size={32} color="white" weight="bold" />
        </TouchableOpacity>

        {/* Welcome Text */}
        <Text className="text-4xl font-msbold text-white mb-10 mt-5">
          Help us get to know you better!
        </Text>
        <Text className="text-xl font-msbold text-white">
          What is your ethnicity?
        </Text>

        <Text className="text-sm font-msmedium text-white mb-1 mt-1">
          You can select multiple countries
        </Text>

        <ScrollView>
          <View className="flex flex-row flex-wrap mb-24 mt-2">
            {countryList.map((country, index) => (
              <TouchableOpacity
                key={index}
                className={`bg-white py-1 px-2 rounded-full mr-2 mb-2 ${
                  countries.includes(country.emoji) ? "bg-pink" : ""
                }`}
                onPress={() => toggleCountry(country.emoji)}
              >
                <Text
                  className={`text-purple font-msbold text-xs ${
                    countries.includes(country.emoji) ? "text-white" : ""
                  }`}
                >
                  {country.country + " " + country.emoji}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Next Button */}
        <View className="absolute bottom-12 left-8 w-full">
          <TouchableOpacity
            className="bg-pink py-2 pl-5 pr-4 rounded-2xl m-auto"
            onPress={handleSubmit}
          >
            <Text className="text-white text-lg font-bold">
              Next <CaretRight size={20} color="white" weight="bold" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </GradientBackground>
  );
}
