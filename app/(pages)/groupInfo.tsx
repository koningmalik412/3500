import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import PersonCard from '../(components)/PersonCard';

const groupMembers = [
  {
    id: '1',
    name: 'Malik Ismail',
    avatar: 'https://via.placeholder.com/50',
    mbti: 'INTJ',
    interests: ['Kindness', 'Business'],
  },
  {
    id: '2',
    name: 'Malik Ismail',
    avatar: 'https://via.placeholder.com/50',
    mbti: 'INTJ',
    interests: ['Kindness', 'Business'],
  },
];

const groupActivities = [
  { id: '1', activityImage: 'https://via.placeholder.com/150', title: 'Cultural Fiesta' },
  { id: '2', activityImage: 'https://via.placeholder.com/150', title: 'Picnic & Paint' },
  { id: '3', activityImage: 'https://via.placeholder.com/150', title: 'Crazy Rich Asians' },
];

const GroupInfo: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Group Banner */}
      <View style={styles.bannerContainer}>
        <Image source={{ uri: 'https://via.placeholder.com/400x200' }} style={styles.bannerImage} />
        {/* Group Profile Image overlapping the banner */}
        <View style={styles.logoContainer}>
          <Image source={{ uri: 'https://via.placeholder.com/120' }} style={styles.groupLogo} />
        </View>
      </View>

      {/* Follow Button positioned below the logo */}
      <View style={styles.followButtonContainer}>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followButtonText}>Follow</Text>
        </TouchableOpacity>
      </View>

      {/* Group Name and Description */}
      <View style={styles.groupInfo}>
        <Text style={styles.groupName}>Brisbane-Asian Student Association (BSA International)</Text>
        <Text style={styles.groupDescription}>
          BSA International (Brisbane-Asian Student Association) is a multicultural student social club primarily based...
        </Text>
      </View>

      {/* Group Activity */}
      <Text style={styles.sectionTitle}>Group Activity</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.activityScroll}>
        {groupActivities.map((activity) => (
          <View key={activity.id} style={styles.activityItem}>
            <Image source={{ uri: activity.activityImage }} style={styles.activityImage} />
            <Text style={styles.activityTitle}>{activity.title}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Group Labels */}
      <Text style={styles.sectionTitle}>Group Label</Text>
      <View style={styles.labelsContainer}>
        <Text style={styles.labelTag}>Asian</Text>
        <Text style={styles.labelTag}>Having fun</Text>
        <Text style={styles.labelTag}>Welfare</Text>
        <Text style={styles.labelTag}>Interaction Student</Text>
      </View>

       {/* Group Members */}
      <Text style={styles.sectionTitle}>Group Member List</Text>
      <View>
        {groupMembers.map((member) => (
          <PersonCard
            key={member.id}
            avatar={member.avatar}
            name={member.name}
            mbti={member.mbti}
            interests={member.interests}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  bannerContainer: {
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: 200,
  },
  logoContainer: {
    position: 'absolute',
    bottom: -60, // Adjust the overlap based on the new size
    left: '50%',
    transform: [{ translateX: -60 }], // Adjust the center for the new size (half of 120)
    alignItems: 'center',
    flexDirection: 'row',
  },
  groupLogo: {
    width: 120,
    height: 120,
    borderRadius: 60, // Make the image round
    borderWidth: 4,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Shadow for Android
  },
  followButtonContainer: {
    alignItems: 'flex-end',
    marginTop: 20, // Space below the logo
    paddingRight: 50
  },
  followButton: {
    backgroundColor: '#51247A',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  followButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  groupInfo: {
    marginTop: 5, // Adjusted for more space after the follow button
    padding: 20,
  },
  groupName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  groupDescription: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  activityScroll: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  activityItem: {
    marginRight: 15,
  },
  activityImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  activityTitle: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
  labelsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  labelTag: {
    backgroundColor: '#FF5722',
    color: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginRight: 10,
    marginBottom: 10,
  },
});

export default GroupInfo;
