import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import GradientBackground from "../(components)/GradientBackground";
import { useDatabase } from "../DatabaseContext";
import { fetchUserByUsername, resetTables } from "../utils/database";
import { verifyPassword } from "../utils/passwordHash";

const LoginScreen = () => {
  const [studentId, setStudentId] = useState("s4819215");
  const [password, setPassword] = useState("password123");

  const router = useRouter();
  const { saveSession, loadUser } = useDatabase();

  const handleLogin = async () => {
    const user = await fetchUserByUsername(studentId);

    if (user && (await verifyPassword(password, user.password))) {
      await saveSession(studentId);
      loadUser(user);
      user.is_initialized ? router.push("/home") : router.push("/info");
    } else {
      Alert.alert("Login Failed", "Invalid username or password");
    }
  };

  return (
    <GradientBackground>
      <View className="flex-1 justify-center items-center ">
        <View className="w-[85%] p-5 items-center">
          <Text className="font-msmedium text-white text-5xl mb-20">
            <Text className="font-msxbold">UQ</Text>Plaza
          </Text>

          {/* Student ID Input */}
          <View className="flex-row items-center bg-white rounded-2xl px-4 py-3 mb-5 w-full">
            <Ionicons name="person-outline" size={20} color="#8B8B8B" />
            <TextInput
              className="ml-3 font-msregular text-sm flex-1 text-gray-600"
              placeholder="Enter your student ID"
              value={studentId}
              onChangeText={setStudentId}
              placeholderTextColor="#8B8B8B"
              autoCapitalize="none"
            />
          </View>

          {/* Password Input */}
          <View className="flex-row items-center bg-white rounded-2xl px-4 py-3 mb-7 w-full">
            <Ionicons name="lock-closed-outline" size={20} color="#8B8B8B" />
            <TextInput
              className="ml-3 font-msregular text-sm flex-1 text-black"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              placeholderTextColor="#8B8B8B"
              autoCapitalize="none"
            />
          </View>

          {/* Trouble Logging In */}
          <TouchableOpacity>
            <Text className="text-white font-msregular underline mt-2 mb-10">
              Trouble logging in?
            </Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity
            className="bg-pink rounded-2xl py-3 w-full items-center"
            onPress={handleLogin}
          >
            <Text className="text-white font-msbold text-lg font-bold">
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </GradientBackground>
  );
};

export default LoginScreen;
