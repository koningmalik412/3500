import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Chat } from 'phosphor-react-native'; // Import the Chat icon from Phosphor
import { useRouter } from 'expo-router';

// Define the type for each group
interface Group {
  id: string;
  name: string;
  logo: string;
  description: string;
}

// Sample groups data
const groupsData: Group[] = [
  { id: '1', name: 'Brisbane-Asian Student Association (BAS)', logo: 'https://via.placeholder.com/50', description: 'Connecting Asian students in Brisbane' },
  { id: '2', name: 'University of Queensland Union (UQU)', logo: 'https://via.placeholder.com/50', description: 'Student advocacy and support at UQ' },
  { id: '3', name: 'Brisbane-Asian Student Association (BAS)', logo: 'https://via.placeholder.com/50', description: 'Connecting Asian students in Brisbane' },
  { id: '4', name: 'University of Queensland Union (UQU)', logo: 'https://via.placeholder.com/50', description: 'Student advocacy and support at UQ' },
];

const router = useRouter();

const GroupComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.promptText}>Groups You Can Join...</Text>
      {/* FlatList directly handling the scrolling */}
      <FlatList
        data={groupsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.groupItem}>
            {/* Group item click for navigation */}
            <TouchableOpacity style={styles.groupInfoContainer} onPress={() => router.push('/groupInfo')}>
              <Image source={{ uri: item.logo }} style={styles.logo} />
              <View style={styles.groupDetails}>
                <Text style={styles.groupName}>{item.name}</Text>
                <Text style={styles.groupDescription}>{item.description}</Text>
              </View>
            </TouchableOpacity>
        
            {/* Chat icon click for chat action */}
            <TouchableOpacity onPress={() => console.log(`Chat with ${item.name}`)}>
              <Chat size={25} color="#51247A" weight="bold" style={styles.actionIcon} />
            </TouchableOpacity>
          </View>
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
  groupItem: {
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
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  groupDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  groupName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  groupDescription: {
    fontSize: 12,
    color: '#777',
  },
  actionIcon: {
    padding: 0,
  },
  promptText: {
    fontSize: 18,
    color: '#51247A',
    marginBottom: 15,
    fontWeight: 'bold',
  }, 
  groupInfoContainer: {
    flexDirection: 'row',
    flex: 1, // Make sure it takes up available space
    alignItems: 'center',
  },
});

export default GroupComponent;
