import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {Text,View,Image,TextInput,Button,TouchableOpacity} from "react-native";
import styles from '../styles/components/RegisterStyle';
import axios from "axios";

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const backendUrl = "http://your-backend-ip:your-port";
  const registrationRoute = "/createNewAccount";
  const apiUrl = `${backendUrl}${registrationRoute}`;

  const handleRegistration = async () => {
    try {
      const response = await fetch('http://localhost:3500/api/account/createNewAccount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          accName: username,
          accEmail: email,
          accPassword: password,
        }
      );

      if (response.status === 201) {
        // Registration successful, navigate to another screen
        navigation.navigate("Login");
      } else {
        // Handle registration error
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setUsername(username)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(email) => setPassword(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
        /> 
      </View> 

      <TouchableOpacity style={styles.loginBtn} onPress={handleRegistration}>
        <Text style={styles.loginText}>Register</Text> 
      </TouchableOpacity> 

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.forgot_button}>Login instead</Text> 
      </TouchableOpacity> 
    </View> 

    
  );
}

export { RegisterScreen as RegisterScreen} ;