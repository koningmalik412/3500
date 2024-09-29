import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Link, useRouter } from 'expo-router';
import RNPickerSelect from 'react-native-picker-select';

export default function InfoScreen() {
  const router = useRouter();

  // State to manage the editable nickname
  const [nickname, setNickname] = useState<string>('Malik');
  
  // State to manage the date of birth (web-compatible)
  const [birthday, setBirthday] = useState<string>('2001-11-03'); // YYYY-MM-DD format

  // State to manage the MBTI selection
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>{"<"}</Text>
      </TouchableOpacity>

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcome to UQ Plaza!</Text>
      <Text style={styles.subTitle}>Here’s what we found about you:</Text>

      {/* Full Name Field (Non-editable) */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput style={styles.input} value="Ainul Malik Zaidan Ismail" editable={false} />
      </View>

      {/* Editable Nickname Field */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nickname</Text>
        <TextInput
          style={styles.input}
          value={nickname}
          onChangeText={(text) => setNickname(text)}  
          placeholder="Enter your nickname"
          placeholderTextColor="#c4c4c4"
        />
      </View>

      {/* Birthday Field */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Birthday</Text>
        <TextInput style={styles.input} value="2001-01-31" editable={false} />
      </View>

      {/* Dropdown for MBTI Personality */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>MBTI Personality</Text>
        <TextInput style={styles.input} value="INTP" editable={true} />
      {selectedValue && <Text>Selected: {selectedValue}</Text>}
      </View>

      {/* Program Info */}
      <View style={styles.programCard}>
        <Text style={styles.programTitle}>Bachelor of Computer Science</Text>
        <Text style={styles.programDetail}>Major: Machine Learning</Text>
        <Text style={styles.programDetail}>Status: Full-time</Text>
      </View>

      {/* Link for corrections */}
      <TouchableOpacity>
        <Text style={styles.correctionLink}>Is this not correct? <Text style={styles.underline}>Reach out to us.</Text></Text>
      </TouchableOpacity>

      {/* Next Button */}
      <Link href="/interest" asChild>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

// TypeScript Styles using StyleSheet
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
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    color: '#c4c4c4',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    color: '#c4c4c4',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#7a4dbc',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    color: 'white',
    fontSize: 16,
  },
  programCard: {
    backgroundColor: '#7a4dbc',
    padding: 20,
    borderRadius: 15,
    marginVertical: 20,
  },
  programTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  programDetail: {
    color: '#e4e4e4',
    fontSize: 16,
  },
  correctionLink: {
    color: '#c4c4c4',
    textAlign: 'center',
    marginBottom: 30,
  },
  underline: {
    textDecorationLine: 'underline',
  },
  nextButton: {
    backgroundColor: '#b565c4',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

// Styles for RNPickerSelect (dropdown)
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    backgroundColor: '#7a4dbc',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    color: 'white',
    fontSize: 16,
  },
  inputAndroid: {
    backgroundColor: '#7a4dbc',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    color: 'white',
    fontSize: 16,
  },
});
