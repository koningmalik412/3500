import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // For icons like heart, comment

export default function EventScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Event</Text>
      </View>

      {/* Event title and image */}
      <View style={styles.eventContent}>
        <Text style={styles.eventTitle}># UQ Attractions Punching</Text>
        <Image
          source={{ uri: 'https://via.placeholder.com/500x300?text=Event+Image' }} // Placeholder event image
          style={styles.eventImage}
        />
        <Text style={styles.eventDescription}>
          If you are a new student, what kind of scenery have you seen on campus? Come take a picture and post it in the channel below!
        </Text>
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
          <Text style={styles.commentText}>qnmlgb!</Text>
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
  eventContent: {
    marginBottom: 15,
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#51247A',
    marginBottom: 10,
  },
  eventImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  eventDescription: {
    fontSize: 14,
    color: '#777',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
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
