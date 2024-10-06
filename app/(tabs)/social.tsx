import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Friends from '../(components)/Friends'; 
import Groups from '../(components)/Groups'; 

export default function PeopleGroupScreen() {
  const [activeTab, setActiveTab] = useState<'People' | 'Groups' >('People');

  return (
    <View style={styles.container}>
      {/* Tab Header */}
      <View style={styles.tabHeader}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'People' && styles.activeTab]}
          onPress={() => setActiveTab('People')}
        >
          <Text style={styles.tabText}>People</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Groups' && styles.activeTab]}
          onPress={() => setActiveTab('Groups')}
        >
          <Text style={styles.tabText}>Group</Text>
        </TouchableOpacity>
      </View>

      {/* People Tab */}
      {activeTab === 'People' && <Friends />}
      
      {/* Groups Tab */}
      {activeTab === 'Groups' && <Groups />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
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
});
