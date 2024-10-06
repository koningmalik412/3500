import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Chat } from 'phosphor-react-native'; // Import the chat icon

// Define the props for the PersonCard component
interface PersonCardProps {
  avatar: string;
  name: string;
  mbti: string;
  interests: string[];
}

const PersonCard: React.FC<PersonCardProps> = ({
  avatar,
  name,
  mbti,
  interests,
}) => {
  const router = useRouter(); // Initialize router for navigation

  // Function to handle chat button press
  const handleChatPress = () => {
    router.push('/activeChat');
  };

  return (
    <View style={styles.friendItem}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View style={{ flex: 1 }}>
        {/* Name and MBTI tag */}
        <View style={styles.nameAndMbtiContainer}>
          <Text style={styles.friendName}>{name}</Text>
          <Text style={styles.mbtiTag}>{mbti}</Text>
        </View>

        {/* Interests */}
        <View style={styles.interestsContainer}>
          {interests.map((interest, index) => (
            <Text key={index} style={styles.interestTag}>
              {interest}
            </Text>
          ))}
        </View>
      </View>

      {/* Chat button always shown */}
      <TouchableOpacity onPress={handleChatPress}>
        <Chat size={24} color="#51247A" weight="bold" style={styles.actionIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    marginHorizontal: 0,
    marginVertical: 10,
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
    flexDirection: 'row',
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
    flexDirection: 'row',
    marginTop: 5,
    flexWrap: 'wrap', // Allow tags to wrap to the next line if they overflow
  },
  interestTag: {
    fontSize: 12,
    color: '#fff',
    backgroundColor: '#FF5722', // Orange background for interests
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12, // Rounded background
    marginRight: 6,
    marginBottom: 6,
    overflow: 'hidden',
  },
  actionIcon: {
    marginHorizontal: 15,
  },
});

export default PersonCard;
