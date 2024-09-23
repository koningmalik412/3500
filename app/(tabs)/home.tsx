import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View>
      <Text className="font-msregular text-3xl">Home</Text>
      <Link className="font-msbold" href="/posts/1">
        Post
      </Link>
    </View>
  );
};

export default Home;
