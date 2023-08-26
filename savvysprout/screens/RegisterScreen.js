import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {Text,View,Image,TextInput,Button,TouchableOpacity} from "react-native";
import styles from '../styles/components/RegisterStyle';

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
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

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Register</Text> 
      </TouchableOpacity> 

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.forgot_button}>Login instead</Text> 
      </TouchableOpacity> 
    </View> 

    
  );
}

export { RegisterScreen as RegisterScreen} ;