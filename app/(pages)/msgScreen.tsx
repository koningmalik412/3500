import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import MessageItem from '../(components)/MessageItem'; // Assuming MessageItem is in the same directory

// Define the message structure
interface Message {
  id: string;
  name: string;
  avatar: string;
  message: string;
  time: string;
}

// Sample message data
const messagesData: Message[] = [
  {
    id: '1',
    name: 'Liwen Ai',
    avatar: 'https://via.placeholder.com/50',
    message: 'Hello! How are you?',
    time: '9:42',
  },
  {
    id: '2',
    name: 'Alvin',
    avatar: 'https://via.placeholder.com/50',
    message: 'Hello! How are you?',
    time: '9:42',
  },
  {
    id: '3',
    name: 'Anna',
    avatar: 'https://via.placeholder.com/50',
    message: 'Hello! How are you?',
    time: '9:42',
  },
  {
    id: '4',
    name: 'Arlo',
    avatar: 'https://via.placeholder.com/50',
    message: 'Hello! How are you?',
    time: '9:42',
  },
  {
    id: '5',
    name: 'Leah',
    avatar: 'https://via.placeholder.com/50',
    message: 'Hello! How are you?',
    time: '9:42',
  },
  {
    id: '6',
    name: '3500 Team',
    avatar: 'https://via.placeholder.com/50',
    message: 'Hello! How are you?',
    time: '9:42',
  },
  {
    id: '7',
    name: '1800 Team',
    avatar: 'https://via.placeholder.com/50',
    message: 'Hello! How are you?',
    time: '9:42',
  },
];

// Messages Screen Component
const MessagesScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Message</Text>
      <FlatList
        data={messagesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MessageItem item={item} />} // Reuse the MessageItem component
      />
    </View>
  );
};

// Styles for the Messages screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#51247A',
    marginBottom: 15,
  },
});

export default MessagesScreen;
