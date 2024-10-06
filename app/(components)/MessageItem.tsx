import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

// Define the message structure
interface Message {
  id: string;
  name: string;
  avatar: string;
  message: string;
  time: string;
}


// Message Item Component
const MessageItem: React.FC<{ item: Message }> = ({ item }) => {
  const router = useRouter(); // Initialize the router inside the component

  const handlePress = () => {
    // Navigate to the /chat route
    router.push(`/activeChat`);
  };

  return (
    <TouchableOpacity style={styles.messageItem} onPress={handlePress}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.messageContent}>
        <View style={styles.messageHeader}>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
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
  messageContent: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  message: {
    fontSize: 14,
    color: '#777',
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
});

export default MessageItem;
