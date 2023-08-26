import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {Text,View,Image,TextInput,Button,TouchableOpacity, KeyboardAvoidingView,} from "react-native";
import styles from '../styles/components/ChatStyle';


function ChatPage () {
    return (
        <View style={styles.container}>
          <Text>Chat</Text>
        </View>
      );
}

export {ChatPage as ChatPage}