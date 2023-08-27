import React, { useState } from "react";
import styles from '../styles/components/ChatStyle';
import { View, Text, Pressable, SafeAreaView, FlatList } from "react-native";

import CommunityComponent from "../component/CommunityComponent";

function CommunityPage(){

    //👇🏻 Dummy list of rooms
    const rooms = [

      {
        id: "1",
        name: "CentralSGCoders",
        messages : [
          {
            id: "1a",
            text: "Guys wake up",
            time: "12:50",
            user: "Friend"
          },

          {
            id: "1b",
            text: "jojo: Anyone wanna join me for a Hackathon?",
            user: "Marco"
          },


        ],
     },
     {
      id: "2",
      name: "Woodwork Masters",
      messages : [
        {
          id: "2a",
          text: "Guys wake up",
          user: "Friend"
        },

        {
          id: "2b",
          text: "jj: Anyone know where to buy the above stuff hahah",
          user: "Marco"
        },


      ],
   },

   {
    id: "3",
    name: "Invest4U",
    messages : [
      {
        id: "3a",
        text: "Guys wake up",
        time: "12:50",
        user: "Friend"
      },

      {
        id: "3b",
        text: "simpson: is it a good time to invest in chinese markets rn?",
        user: "Marco"
      },


    ],
 },

 {
  id: "4",
  name: "Uncle Roger Fanclub",
  messages : [
    {
      id: "4a",
      text: "Guys wake up",
      time: "12:50",
      user: "Friend"
    },

    {
      id: "3b",
      text: "nephewjack: where to buy chilli sauce?",
      user: "Marco"
    },


  ],
},

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
                        renderItem={({ item }) => <CommunityComponent item={item} />}
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

export {CommunityPage as CommunityPage}

