import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {Text,View,Image,TextInput,Button,TouchableOpacity, KeyboardAvoidingView,} from "react-native";
import styles from '../styles/components/CommunityStyle';

function CommunityPage () {
    return (
        <View style={styles.container}>
          <Text>Community</Text>
        </View>
      );
}

export {CommunityPage as CommunityPage}