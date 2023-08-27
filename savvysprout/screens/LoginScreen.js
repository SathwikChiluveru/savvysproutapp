import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {Text,View,Image,TextInput,Button,TouchableOpacity, KeyboardAvoidingView,} from "react-native";
import styles from '../styles/components/LoginStyle';


const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/log2.jpg")} /> 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email or Username"
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setUsername(username)}
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
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.btnText}>Login</Text> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupBtn} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
    </View> 
  );
}

export { LoginScreen as LoginScreen} ;