import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons like heart, comment
import { useRouter } from 'expo-router';
import MessageLine from '../(components)/MessageLine';

// Sample chat data
const messagesData = [
  { id: '1', message: 'Hello! How are you?', isSender: false, avatar: 'https://via.placeholder.com/50' },
  { id: '2', message: "I'm fine. Thank you. And you?", isSender: true, avatar: 'https://via.placeholder.com/50' },
  { id: '3', message: 'Hello! How are you?', isSender: false, avatar: 'https://via.placeholder.com/50' },
  { id: '4', message: "I'm fine. Thank you. And you?", isSender: true, avatar: 'https://via.placeholder.com/50' },
  { id: '5', message: 'Hello! How are you?', isSender: false, avatar: 'https://via.placeholder.com/50' },
  { id: '6', message: "I'm fine. Thank you. And you?", isSender: true, avatar: 'https://via.placeholder.com/50' },
];

const ActiveChat: React.FC = () => {
  const router = useRouter();
  const [newMessage, setNewMessage] = useState('');

  const handleBackPress = () => {
    router.back();
  };

  const handleSend = () => {
    if (newMessage.trim()) {
      // Logic to send the message and update the chat list goes here
      setNewMessage('');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Text>
            <Ionicons name="chevron-back-outline" size={30} color="#fff" /> {/* Back icon */}
          </Text>
        </TouchableOpacity>
        <Text style={styles.chatTitle}>Liwen Ai</Text>
      </View>

      {/* Messages List */}
      <FlatList
        data={messagesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MessageLine
            message={item.message}
            isSender={item.isSender}
            avatar={item.avatar}
          />
        )}
        style={styles.chatList}
        contentContainerStyle={styles.chatListContainer} // Align messages at the top
      />

      {/* Input field */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"} // Ensure keyboard behavior is correct
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0} // Offset for iOS to prevent overlapping with keyboard
        style={styles.inputContainer}
      >
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
        />
        <TouchableOpacity onPress={handleSend} style={styles.inputButton}>
          <Text>
            <Ionicons name="send" size={28} color="#51247A" /> {/* Send Button Icon */}
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

// Styles for the page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#51247A',
  },
  backButton: {
    marginRight: 10,
  },
  chatTitle: {
    color: '#fff',
    fontSize: 20,
  },
  chatList: {
    flex: 1,
    padding: 10,
  },
  chatListContainer: {
    justifyContent: 'flex-start', // Align messages at the top
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  input: {
    flex: 1,
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 10,
    marginBottom: 25,
  },
  inputButton: {
    marginBottom: 20,
    marginHorizontal:10
  },
});

export default ActiveChat;
