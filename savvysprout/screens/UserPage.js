import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {Text,View,Image,TextInput,Button,TouchableOpacity, KeyboardAvoidingView,} from "react-native";
import styles from '../styles/components/UserStyle';

function UserPage () {
    return (
        <View style={styles.container}>
          <Text>User</Text>
        </View>
    );
}

export {UserPage as UserPage}