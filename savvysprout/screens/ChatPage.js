import React, { useState } from "react";
import styles from '../styles/components/ChatStyle';
import { View, Text, Pressable, SafeAreaView, FlatList } from "react-native";

import ChatComponent from "../component/ChatComponent";

function ChatPage(){

    //👇🏻 Dummy list of rooms
    const rooms = [
      {
        id: "1",
        name: "Jihoon",
        messages : [
          {
            id: "1a",
            text: "Guys wake up",
            time: "12:50",
            user: "Friend"
          },

          {
            id: "1b",
            text: "Hey what are you doing rn",
            time: "1:00",
            user: "Marco"
          },


        ],
     },

     {
      id: "2",
      name: "Sathwik",
      messages : [
        {
          id: "2a",
          text: "Guys wake up",
          time: "12:50",
          user: "Friend"
        },

        {
          id: "2b",
          text: "See you Saturday!",
          time: "3:00",
          user: "Marco"
        },


      ],
   },

   {
    id: "3",
    name: "Joshua",
    messages : [
      {
        id: "3a",
        text: "Guys wake up",
        time: "12:50",
        user: "Friend"
      },

      {
        id: "3b",
        text: "So when do you normally work out?",
        time: "3:00",
        user: "Marco"
      },


    ],
 },

 {
  id: "4",
  name: "Rachel",
  messages : [
    {
      id: "4a",
      text: "Guys wake up",
      time: "12:50",
      user: "Friend"
    },

    {
      id: "3b",
      text: "Which uni did u graduate from?",
      time: "4:30",
      user: "Marco"
    },


  ],
},

{
  id: "5",
  name: "Khai Ryo",
  messages : [
    {
      id: "5a",
      text: "Guys wake up",
      time: "12:50",
      user: "Friend"
    },

    {
      id: "5b",
      text: "Are you indonesian?",
      time: "6:30",
      user: "Marco"
    },


  ],
},

{
  id: "6",
  name: "John Doe",
  messages : [
    {
      id: "6a",
      text: "Guys wake up",
      time: "12:50",
      user: "Friend"
    },

    {
      id: "6b",
      text: "Damn, thats impressive fr",
      time: "12:30",
      user: "Marco"
    },


  ],
},

{
  id: "7",
  name: "Jane Doe",
  messages : [
    {
      id: "7a",
      text: "Guys wake up",
      time: "12:50",
      user: "Friend"
    },

    {
      id: "7b",
      text: "ANy communities you joining?",
      time: "11:30",
      user: "Marco"
    },


  ],
}

    ];

    return (
        <SafeAreaView style={styles.chatscreen}>
            <View style={styles.chattopContainer}>
                <View style={styles.chatheader}>
            {/* 👇🏻 Logs "ButtonPressed" to the console when the icon is clicked */}

                </View>
            </View>

            <View style={styles.chatlistContainer}>
                {rooms.length > 0 ? (
                    <FlatList
                        data={rooms}
                        renderItem={({ item }) => <ChatComponent item={item} />}
                        keyExtractor={(item) => item.id}
                    />
                ) : (
                    <View style={styles.chatemptyContainer}>
                        <Text style={styles.chatemptyText}>No rooms created!</Text>
                        <Text>Click the icon above to create a Chat room</Text>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
};

export {ChatPage as ChatPage}