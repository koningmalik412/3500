import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface MessageLineProps {
  isSender: boolean; // True if the message is sent by the current user
  message: string;
  avatar: string;
}

const MessageLine: React.FC<MessageLineProps> = ({ isSender, message, avatar }) => {
  return (
    <View style={[styles.messageContainer, isSender ? styles.sender : styles.receiver]}>
      {!isSender && <Image source={{ uri: avatar }} style={styles.avatar} />}
      <View style={[styles.messageBubble, isSender ? styles.senderBubble : styles.receiverBubble]}>
        <Text style={styles.messageText}>{message}</Text>
      </View>
      {isSender && <Image source={{ uri: avatar }} style={styles.avatar} />}
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 8,
  },
  messageBubble: {
    maxWidth: '70%',
    padding: 10,
    borderRadius: 20,
  },
  senderBubble: {
    backgroundColor: '#51247A',
  },
  receiverBubble: {
    backgroundColor: 'purple',
  },
  sender: {
    justifyContent: 'flex-end',
  },
  receiver: {
    justifyContent: 'flex-start',
  },
  messageText: {
    color: '#fff',
  },
});

export default MessageLine;
