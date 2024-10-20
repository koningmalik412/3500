import React from "react";
import { View, Text, ScrollView } from "react-native";
import PersonCard from "./PersonCard";

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

const Friends: React.FC<{ userList: CompatibleUser[] }> = ({ userList }) => {
  return (
    <View className="flex-1 px-2 pt-4">
      <Text className="text-xl text-purple mb-4 mx-2 font-msbold">
        Who You Might Like...
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {userList.map((userData) => (
          <PersonCard userData={userData} key={userData.user.id} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Friends;
