import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import interestsData from '../../assets/interests.json'; // Imported interests data
import mbtiData from '../../assets/mbtiPersonalities.json'; // Imported MBTI data
import PersonCard from './PersonCard';

// Define the type for each friend
interface Friend {
  id: string;
  name: string;
  avatar: string;
  interests: string[];
  mbti: string;
}

// Define the structure of interests data
interface InterestCategory {
  category: string;
  interests: string[];
}

// Define the structure of MBTI data
interface MBTI {
  type: string;
  nickname: string;
}

// Function to get 3 random interests from interests.json
const getRandomInterests = (): string[] => {
  const interests: string[] = [];
  (interestsData as InterestCategory[]).forEach(category => interests.push(...category.interests));
  return [...interests].sort(() => 0.5 - Math.random()).slice(0, 3); // Get 3 random interests
};

// Function to get a random MBTI type from mbtiPersonalities.json
const getRandomMBTI = (): string => {
  const randomMBTI = (mbtiData as MBTI[])[Math.floor(Math.random() * mbtiData.length)];
  return `${randomMBTI.type}`;
};

// Sample friends data with random interests and MBTI
const friendsData: Friend[] = [
  { id: '1', name: 'John Doe', avatar: 'https://via.placeholder.com/50', interests: getRandomInterests(), mbti: getRandomMBTI() },
  { id: '2', name: 'Jane Smith', avatar: 'https://via.placeholder.com/50', interests: getRandomInterests(), mbti: getRandomMBTI() },
  { id: '3', name: 'Chris Johnson', avatar: 'https://via.placeholder.com/50', interests: getRandomInterests(), mbti: getRandomMBTI() },
];

const Friends: React.FC = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.promptText}>People You Might Like...</Text>
        <FlatList
        data={friendsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <PersonCard
            avatar={item.avatar}
            name={item.name}
            mbti={item.mbti}
            interests={item.interests}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f2f2f2',
  },
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  nameAndMbtiContainer: {
    flexDirection: 'row', // Align name and MBTI horizontally
    alignItems: 'center',
  },
  friendName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10, // Add space between name and MBTI tag
  },
  mbtiTag: {
    fontSize: 14,
    color: '#fff',
    backgroundColor: '#4CAF50', // Green background for MBTI tag
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12, // Rounded background
    overflow: 'hidden',
  },
  interestsContainer: {
    flexDirection: 'row', // Align interests in a row
    marginTop: 5,
    flexWrap: 'wrap', // Allow tags to wrap to the next line if they overflow
  },
  interestTag: {
    fontSize: 12,
    color: '#000',
    backgroundColor: '#EFEB18', // Orange background for interests
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12, // Rounded background
    marginRight: 6,
    marginBottom: 6,
    overflow: 'hidden',
  },
  promptText:{
    fontSize: 18, 
    color: '#51247A',
    marginBottom: 15,
    fontWeight: 'bold'
  }
});

export default Friends;
