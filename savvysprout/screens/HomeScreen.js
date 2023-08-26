import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Animated } from 'react-native';
import styles from '../styles/components/HomeStyle';
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Users = [
    { id: "1", uri: require('../assets/1.jpg') },
    { id: "2", uri: require('../assets/2.jpg') },
    { id: "3", uri: require('../assets/3.jpg') },
    { id: "4", uri: require('../assets/4.jpg') },
    { id: "5", uri: require('../assets/5.jpg') },
  ]



function SwipePage() {

     renderUsers = () => {
        return Users.map((item, i) => {
           return (
            <Animated.View 
            key={i}
            style={{
            height: SCREEN_HEIGHT - 300,
            width: SCREEN_WIDTH,
            padding: 10
            }}
            >
               <Image
                 style={{
                   flex: 1,
                   height: null,
                   width: null,
                   resizeMode: "cover",
                   borderRadius: 20
                 }}
                 source={item.uri}
               />
             </Animated.View>
           );
        });
     };

    return (
        <View style={{ flex: 1 }}>
        <View style={{ height: 60 }}>
        </View>
        <View style={{ flex: 1 }}>
          {this.renderUsers()}
        </View>
        <View style={{ height: 60 }}>
        </View>
      </View>
    );
  }
  
  function ChatPage() {
    return (
      <View style={styles.container}>
        <Text>Chat!</Text>
      </View>
    );
  }

  function CommunitiesPage() {
    return (
      <View style={styles.container}>
        <Text>Communities!</Text>
      </View>
    );
  }

  function UserPage() {
    return (
      <View style={styles.container}>
        <Text>User!</Text>
      </View>
    );
  }





  function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Swipe" component={SwipePage} />
        <Tab.Screen name="Chat" component={ChatPage} />
        <Tab.Screen name="Communities" component={CommunitiesPage} />
        <Tab.Screen name="User" component={UserPage} />
      </Tab.Navigator>
    );
  }




function HomeScreen() {
  return (
    <MyTabs>

    </MyTabs>
  );
}

export  {HomeScreen as HomeScreen};
