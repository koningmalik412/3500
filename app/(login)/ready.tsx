import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function FinalScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>{"<"}</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>You're all set!</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        We’ll use this information to find you the people you’re most compatible with on campus
      </Text>

      {/* Additional Instructions */}
      <Text style={styles.additionalText}>
        You can always change your interests in your profile page
      </Text>

      {/* Continue Button */}
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => router.push('/home')} 
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#563d7c',
    justifyContent: 'space-between',
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
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 60,
  },
  subtitle: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  additionalText: {
    fontSize: 18,
    color: '#c4c4c4',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  continueButton: {
    backgroundColor: '#b565c4',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 50,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
