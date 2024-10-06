import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // For icons like heart, comment

export default function PostScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Post</Text>
        <TouchableOpacity style={styles.addFriendButton}>
          <Ionicons name="person-add-outline" size={20} color="#51247A" />
          <Text style={styles.addFriendText}>Add friend</Text>
        </TouchableOpacity>
      </View>

      {/* User info section */}
      <View style={styles.userInfo}>
        <Image source={{ uri: 'https://via.placeholder.com/50x50' }} style={styles.profileImage} />
        <View>
          <Text style={styles.userName}>Malik Ismail</Text>
          <Text style={styles.userDepartment}>EAIT | CS</Text>
        </View>
      </View>

      {/* Post content */}
      <View style={styles.postContent}>
        <Text style={styles.postText}>Enjoying myself</Text>
        <Image
          source={{ uri: 'https://via.placeholder.com/500x300' }}
          style={styles.postImage}
        />
        <Text style={styles.timestamp}>2:25 PM - 11 September 2024</Text>
      </View>

      {/* Reactions section */}
      <View style={styles.reactions}>
        <View style={styles.reactionItem}>
          <Ionicons name="heart-outline" size={20} color="black" />
          <Text style={styles.reactionText}>25</Text>
        </View>
        <Text style={styles.likedBy}>
          Liked by <Text style={styles.highlight}>Liwen Ai</Text> and others
        </Text>
        <View style={[styles.reactionItem, styles.chatBubble]}>
          <Ionicons name="chatbubble-outline" size={20} color="black" />
          <Text style={styles.reactionText}>4</Text>
        </View>
      </View>

      {/* Comments section */}
      <View style={styles.comments}>
        <View style={styles.commentItem}>
          <Text style={styles.commentUser}>Liwen Ai:</Text>
          <Text style={styles.commentText}>Cool!</Text>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 15,
    backgroundColor: '#f2f2f2',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addFriendButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderColor: '#51247A',
    borderWidth: 1,
    borderRadius: 5,
  },
  addFriendText: {
    color: '#51247A',
    marginLeft: 5,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userDepartment: {
    fontSize: 12,
    color: '#777',
  },
  postContent: {
    marginBottom: 15,
  },
  postText: {
    fontSize: 16,
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  timestamp: {
    fontSize: 12,
    color: '#777',
  },
  reactions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 15,
  },
  reactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
  },
  reactionText: {
    marginLeft: 5,
  },
  likedBy: {
    fontSize: 13,
    color: '#777',
    paddingRight: 15,
  },
  highlight: {
    fontWeight: 'bold',
  },
  comments: {
    marginBottom: 15,
  },
  commentItem: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  commentUser: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  commentText: {
    fontSize: 14,
  },
});
