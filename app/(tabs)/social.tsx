import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Friends from "../(components)/Friends";
import Groups from "../(components)/Groups";
import GradientBackgroundHome from "../(components)/GradientBackgroundHome";
import Header from "../(components)/Header";
import { useDatabase } from "../DatabaseContext";
import { fetchCompatible } from "../utils/fetchCompatible";

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

interface Interest {
  category: string;
  hobby: string;
  id: number;
}

interface CompatibleUser {
  user: User;
  similarInterests: Interest[];
}

export default function PeopleGroupScreen() {
  const [activeTab, setActiveTab] = useState<"People" | "Communities">(
    "People"
  );
  const [compatibleList, setCompatibleList] = useState<CompatibleUser[]>([]);

  const { user } = useDatabase();

  useEffect(() => {
    const loadUsers = async () => {
      setCompatibleList(await fetchCompatible(user));
    };

    loadUsers();
  }, []);

  return (
    <GradientBackgroundHome>
      <View className="flex-1 px-2">
        <Header user={user} />
        {/* Tab Header */}
        <View className="flex flex-row justify-around bg-white rounded-full shadow-md">
          <TouchableOpacity
            className={`py-1 w-1/2 flex items-center ${
              activeTab === "People" ? "bg-purple rounded-full" : ""
            }`}
            onPress={() => setActiveTab("People")}
          >
            <Text
              className={`text-sm font-msbold ${
                activeTab === "People" ? "text-white" : "text-purple"
              }`}
            >
              People
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`py-1 w-1/2 flex items-center ${
              activeTab === "Communities" ? "bg-purple rounded-full" : ""
            }`}
            onPress={() => setActiveTab("Communities")}
          >
            <Text
              className={`text-sm font-msbold ${
                activeTab === "Communities" ? "text-white" : "text-purple"
              }`}
            >
              Communities
            </Text>
          </TouchableOpacity>
        </View>

        {/* People Tab */}
        {activeTab === "People" && <Friends userList={compatibleList} />}

        {/* Communities Tab */}
        {activeTab === "Communities" && <Groups />}
      </View>
    </GradientBackgroundHome>
  );
}
