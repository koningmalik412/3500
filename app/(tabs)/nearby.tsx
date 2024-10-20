import { View, Text } from "react-native";
import React from "react";
import Maps from "../(components)/maps";
import GradientBackgroundHome from "../(components)/GradientBackgroundHome";
import Header from "../(components)/Header";
import { useDatabase } from "../DatabaseContext";

const nearby = () => {
  const { user } = useDatabase();

  return (
    <GradientBackgroundHome>
      <View className="flex-1">
        <View className="px-2">
          <Header user={user} />
        </View>

        <Maps />
      </View>
    </GradientBackgroundHome>
  );
};

export default nearby;
