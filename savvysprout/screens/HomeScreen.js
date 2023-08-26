import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Foods = [
    { id: "1", uri: require('../assets/1.jpg') },
    { id: "2", uri: require('../assets/2.jpg') },
    { id: "3", uri: require('../assets/3.jpg') },
    { id: "4", uri: require('../assets/4.jpg') },
    { id: "5", uri: require('../assets/5.jpg') },
  ]

function SwipePage() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Swipe!</Text>
      </View>
    );
  }
  
  function ChatPage() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Chat!</Text>
      </View>
    );
  }

  function CommunitiesPage() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Communities!</Text>
      </View>
    );
  }

  function UserPage() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
