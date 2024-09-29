import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from "expo-router";

const LoginScreen = () => {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground
      style={styles.container}
      source={{uri: 'https://your-background-image-url.com'}}
    >
      <View style={styles.content}>
        <Text style={styles.title}>
          <Text style={styles.bold}>UQ</Text>Plaza
        </Text>
        {/* Student ID Input */}
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#6d6d6d" />
          <TextInput
            style={styles.input}
            placeholder="Enter your student ID"
            value={studentId}
            onChangeText={setStudentId}
            placeholderTextColor="#c4c4c4"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#6d6d6d" />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            placeholderTextColor="#c4c4c4"
          />
        </View>

        {/* Trouble Logging In */}
        <TouchableOpacity>
          <Text style={styles.forgotText}>Trouble logging in?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <Link href="/info" asChild>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#563d7c', // Background gradient color (or use ImageBackground)
  },
  content: {
    width: '90%',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    color: 'white',
    marginBottom: 40,
  },
  bold:{
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
    color: '#6d6d6d',
  },
  forgotText: {
    color: '#c4c4c4',
    marginTop: 10,
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: '#b565c4',
    borderRadius: 25,
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
