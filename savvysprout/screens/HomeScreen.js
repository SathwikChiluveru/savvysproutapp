import styles from '../styles/components/HomeStyle';

import { ImageBackground } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ChatPage } from './ChatPage';
import { CommunityPage } from './CommunityPage';
import { UserPage } from './UserPage';
import React, { useState } from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Animated,
  PanResponder,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SwipeableCard = ({ item, removeCard, swipedDirection }) => {
  // let xPosition = new Animated.Value(0);
  const [xPosition, setXPosition] = useState(new Animated.Value(0));
  let swipeDirection = '';
  let cardOpacity = new Animated.Value(1);
  let rotateCard = xPosition.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: ['-20deg', '0deg', '20deg'],
  });

  let panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => false,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
    onPanResponderMove: (evt, gestureState) => {
      xPosition.setValue(gestureState.dx);
      if (gestureState.dx > SCREEN_WIDTH - 250) {
        swipeDirection = 'Like';
      } else if (gestureState.dx < -SCREEN_WIDTH + 250) {
        swipeDirection = 'Dislike';
      }
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (
        gestureState.dx < SCREEN_WIDTH - 250 &&
        gestureState.dx > -SCREEN_WIDTH + 250
      ) {
        swipedDirection('--');
        Animated.spring(xPosition, {
          toValue: 0,
          speed: 5,
          bounciness: 10,
          useNativeDriver: false,
        }).start();
      } else if (gestureState.dx > SCREEN_WIDTH - 250) {
        Animated.parallel([
          Animated.timing(xPosition, {
            toValue: SCREEN_WIDTH,
            duration: 200,
            useNativeDriver: false,
          }),
          Animated.timing(cardOpacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
          }),
        ]).start(() => {
          swipedDirection(swipeDirection);
          removeCard();
        });
      } else if (gestureState.dx < -SCREEN_WIDTH + 250) {
        Animated.parallel([
          Animated.timing(xPosition, {
            toValue: -SCREEN_WIDTH,
            duration: 200,
            useNativeDriver: false,
          }),
          Animated.timing(cardOpacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
          }),
        ]).start(() => {
          swipedDirection(swipeDirection);
          removeCard();
        });
      }
    },
  });

  return (
    <Animated.View
    {...panResponder.panHandlers}
    style={[
      styles.cardStyle,
      {
        transform: [{ translateX: xPosition }, { rotate: rotateCard }],
      },
    ]}
  >
      <ImageBackground
        source={item.imageUrl}
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center', // Center the title vertically
          alignItems: 'center', // Center the title horizontally
        }}
      >
        <Text style={styles.cardTitleStyle}> {item.cardTitle} </Text>
        <View style={styles.cardInfoContainer}>
          <Text style={styles.cardInfoText}>{item.name},{item.age}</Text>
          <Text style={styles.cardInfoText}>{item.location}</Text>
          <Text style={styles.cardInfoText}>Skills: {item.skills}</Text>
        </View>
      </ImageBackground>
  </Animated.View>

  );
};

const Tab = createBottomTabNavigator();

function SwipePage() {
  const [noMoreCard, setNoMoreCard] = useState(false);
  const [sampleCardArray, setSampleCardArray] = useState(DEMO_CONTENT);
  const [swipeDirection, setSwipeDirection] = useState('--');

  const removeCard = (id) => {
    // alert(id);
    sampleCardArray.splice(
      sampleCardArray.findIndex((item) => item.id == id),
      1
    );
    setSampleCardArray(sampleCardArray);
    if (sampleCardArray.length == 0) {
      setNoMoreCard(true);
    }
  };

  const lastSwipedDirection = (swipeDirection) => {
    setSwipeDirection(swipeDirection);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.swipeText}>
        {swipeDirection}
      </Text>
      <View style={styles.container}>
        {sampleCardArray.map((item, key) => (
          <SwipeableCard
            key={key}
            item={item}
            removeCard={() => removeCard(item.id)}
            swipedDirection={lastSwipedDirection}
          />
        ))}
        {noMoreCard ? (
          <Text style={{ fontSize: 22, color: '#000' }}>No Cards Found.</Text>
        ) : null}
      </View>
    </SafeAreaView>
  );
    
  }

  function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Swipe" component={SwipePage} />
        <Tab.Screen name="Chat" component={ChatPage} />
        <Tab.Screen name="Communities" component={CommunityPage} />
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
const DEMO_CONTENT = [
  {
    id: '1',
    cardTitle: 'Card 1',
    backgroundColor: '#FFC107',
    imageUrl: require('../assets/timmy.jpg'),
    name: 'Timothy Chalamet',
    age: 30,
    location: 'Beauty World',
    skills: 'Acting, Flying Airplanes',
  },
  {
    id: '2',
    cardTitle: 'Card 2',
    backgroundColor: '#ED2525',
    imageUrl: require('../assets/ryan.jpg'),
    name: 'Ryan Reynolds',
    age: 35,
    location: 'Punggol',
    skills: 'Football, JavaScript',
  },
  {
    id: '3',
    cardTitle: 'Card 3',
    backgroundColor: '#E7088E',
    imageUrl: require('../assets/scarjo.jpg'),
    name: 'Scarlet Johansson',
    age: 25,
    location: 'Changi',
    skills: 'Java, Italian Cuisine',

  },
  {
    id: '4',
    cardTitle: 'Card 4',
    backgroundColor: '#00BCD4',
    imageUrl: require('../assets/Jisoo.jpg'),
    name: 'Jisoo',
    age: 25,
    location: 'Serangoon',
    skills: 'Singing, Kpop Dance',

  },
  {
    id: '5',
    cardTitle: 'Card 5',
    backgroundColor: '#FFFB14',
    imageUrl: require('../assets/eric.jpg'),
    name: 'Eric Cartman',
    age: 10,
    location: 'Jurong',
    skills: 'Woodwork',

  },
].reverse();

export  {HomeScreen as HomeScreen};
