// app/home.tsx
import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter for navigation

interface Post {
  id: string;
  user: string;
  content: string;
  likes: number;
  comments: number;
  image: string;
}

interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
}

// Posts with 300x300 square images from via.placeholder.com
const posts: Post[] = [
  { id: '1', user: 'Malik Ismail', content: 'Enjoying myself', likes: 25, comments: 4, image: 'https://via.placeholder.com/300x300?text=Post1' },
  { id: '2', user: 'Liwen Ai', content: 'Crazy night tonight', likes: 42, comments: 7, image: 'https://via.placeholder.com/300x300?text=Post2' },
  { id: '3', user: 'Malik Ismail', content: 'Amazing day!', likes: 32, comments: 6, image: 'https://via.placeholder.com/300x300?text=Post3' },
  { id: '4', user: 'Liwen Ai', content: 'Sunset vibes', likes: 19, comments: 3, image: 'https://via.placeholder.com/300x300?text=Post4' },
  { id: '5', user: 'Malik Ismail', content: 'Enjoying myself', likes: 215, comments: 14, image: 'https://via.placeholder.com/300x300?text=Post5' },
  { id: '6', user: 'Liwen Ai', content: 'Crazy night tonight', likes: 42, comments: 7, image: 'https://via.placeholder.com/300x300?text=Post6' },
  { id: '7', user: 'Malik Ismail', content: 'Amazing day!', likes: 2, comments: 6, image: 'https://via.placeholder.com/300x300?text=Post7' },
  { id: '8', user: 'Liwen Ai', content: 'Sunset vibes', likes: 0, comments: 0, image: 'https://via.placeholder.com/300x300?text=Post8' },

];

// Events with 300x500 (2:1 aspect ratio) images from via.placeholder.com
const events: Event[] = [
  { id: '1', title: 'UQ Attractions Punching', description: 'If you are a new student...', image: 'https://via.placeholder.com/300x500?text=Event1' },
  { id: '2', title: 'UQ Networking Event', description: 'A great place to meet people.', image: 'https://via.placeholder.com/300x500?text=Event2' },
  { id: '3', title: 'Hackathon 2024', description: 'Join us for a 48-hour hackathon.', image: 'https://via.placeholder.com/300x500?text=Event3' },
];

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState<'Post' | 'Event'>('Post');
  const router = useRouter(); // Initialize router

  return (
    <View style={styles.container}>
      {/* Custom Tab Header for Post and Event */}
      <View style={styles.tabHeader}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Post' && styles.activeTab]}
          onPress={() => setActiveTab('Post')}
        >
          <Text style={styles.tabText}>Post</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Event' && styles.activeTab]}
          onPress={() => setActiveTab('Event')}
        >
          <Text style={styles.tabText}>Event</Text>
        </TouchableOpacity>
      </View>

      {/* Show "Posts" FlatList when the "Post" tab is active */}
      {activeTab === 'Post' && (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          numColumns={2} // Fixed 2 columns for posts
          columnWrapperStyle={styles.row} // Apply some styles for spacing between columns
          renderItem={({ item }) => (
            <View style={styles.postContainer}>
              {/* Wrap the Image component with TouchableOpacity for navigation */}
              <TouchableOpacity onPress={() => router.push('/post')}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.thumbnail} // Fixed size 300x300
                />
              </TouchableOpacity>
              <Text style={styles.username}>{item.user}</Text>
              <Text style={styles.content}>{item.content}</Text>
              <View style={styles.postFooter}>
                <Text>❤️ {item.likes}</Text>
                <Text>💬 {item.comments}</Text>
              </View>
            </View>
          )}
        />
      )}

      {/* Show "Events" FlatList when the "Event" tab is active */}
      {activeTab === 'Event' && (
        <FlatList
          data={events}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.eventContainer}>
              <TouchableOpacity onPress={() => router.push('/event')}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.eventImage} // Fixed size 300x500
                />
              </TouchableOpacity>
              <Text style={styles.eventTitle}>{item.title}</Text>
              <Text style={styles.eventDescription}>{item.description}</Text>
              <TouchableOpacity style={styles.viewEventButton} onPress={() => router.push('/event')}>
                <Text style={styles.viewEventText}>View Event</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f2f2f2',
  },
  tabHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#51247A',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#51247A',
  },
  row: {
    justifyContent: 'space-between', // Space out columns
  },
  postContainer: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
  },
  thumbnail: {
    width: '100%',
    height: 175, // Fixed size 300x300 for post images
    borderRadius: 10,
    marginBottom: 10,
  },
  username: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 12,
    marginBottom: 10,
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  eventContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
  },
  eventImage: {
    width: '100%',
    height: 200, // Fixed size 300x500 for event images
    borderRadius: 10,
    marginBottom: 10,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  eventDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  viewEventButton: {
    backgroundColor: '#51247A',
    padding: 10,
    borderRadius: 10,
  },
  viewEventText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
