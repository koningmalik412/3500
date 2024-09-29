import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import * as FileSystem from 'expo-file-system'; // Optional if using local files
import categoriesData from '../../assets/interests.json'; // Adjust the path if necessary

export default function InterestSelection() {
  const router = useRouter();

  // State to store interests data and selected interests
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  // Load categories data from local JSON file
  useEffect(() => {
    // If you are using a local import (like categoriesData), just use it directly.
    // If using `FileSystem` API, you can fetch it dynamically here.
    setCategories(categoriesData); // Set the categories from the imported JSON
  }, []);

  // Function to toggle interest selection
  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  // Check if the minimum number of selections (3) is met
  const canProceed = selectedInterests.length >= 3;

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>{"<"}</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>
        Select <Text style={styles.highlight}>at least 3</Text> of your interests
      </Text>
      <Text style={styles.subtitle}>You can choose more if you like</Text>

      {/* Scrollable list of interests */}
      <ScrollView contentContainerStyle={styles.interestsContainer}>
        {/* Map over categories to render each category and its interests */}
        {categories.map((category, categoryIndex) => (
          <View key={categoryIndex}>
            {/* Category Title */}
            <Text style={styles.categoryLabel}>{category.category}</Text>
            <View style={styles.interestsRow}>
              {/* Map over interests for each category */}
              {category.interests.map((interest: string, interestIndex: number) => (
                <TouchableOpacity
                  key={interestIndex}
                  style={[
                    styles.interestTag,
                    selectedInterests.includes(interest) && styles.selectedTag,
                  ]}
                  onPress={() => toggleInterest(interest)}
                >
                  <Text
                    style={[
                      styles.interestText,
                      selectedInterests.includes(interest) && styles.selectedText,
                    ]}
                  >
                    {interest}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Display number of selected interests */}
      <Text style={styles.selectedCount}>{selectedInterests.length} selected</Text>

      {/* Next Button */}
      <TouchableOpacity
        style={[styles.nextButton, !canProceed && styles.disabledButton]}
        disabled={!canProceed}
        onPress={() => router.push('/ready')} // Navigate to next screen
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#563d7c',
  },
  backButton: {
    marginTop: 20,
    marginBottom: 20,
  },
  backText: {
    fontSize: 24,
    color: 'white',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  highlight: {
    color: '#f8a5c2',
  },
  subtitle: {
    fontSize: 16,
    color: '#c4c4c4',
    marginBottom: 20,
  },
  interestsContainer: {
    paddingBottom: 100, // for better scroll experience with Next button
  },
  categoryLabel: {
    color: '#e4e4e4',
    fontSize: 22,
    marginBottom: 10,
  },
  interestsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  interestTag: {
    backgroundColor: '#7a4dbc',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  selectedTag: {
    backgroundColor: '#d4c2e6',
  },
  interestText: {
    color: 'white',
    fontSize: 16,
  },
  selectedText: {
    color: '#563d7c',
  },
  selectedCount: {
    fontSize: 16,
    color: '#e4e4e4',
    textAlign: 'center',
    marginVertical: 20,
  },
  nextButton: {
    backgroundColor: '#b565c4',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#a4a4a4',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
