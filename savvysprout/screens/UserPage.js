import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import photos  from "../assets/1.jpg";


const PhotosRoutes = () => (
  <View style={{ flex: 1 }}>
    <FlatList
      data={photos}
      numColumns={3}
      renderItem={({ item, index }) => (
        <View
          style={{
            flex: 1,
            aspectRatio: 1,
            margin: 3,
          }}
        >
          <Image
            key={index}
            source={item}
            style={{ width: "200%", height: "200%", borderRadius: 2 }}
          />
        </View>
      )}
    />
  </View>
);

const LikesRoutes = () => (
  <View style={{ flex: 1 }}>
    <FlatList
      data={photos}
      numColumns={3}
      renderItem={({ item, index }) => (
        <View
          style={{
            flex: 1,
            aspectRatio: 1,
            margin: 3,
          }}
        >
          <Image
            key={index}
            source={item}
            style={{ width: "200%", height: "200%", borderRadius: 2 }}
          />
        </View>
      )}
    />
  </View>
);

const renderScene = SceneMap({
  first: PhotosRoutes,
  second: LikesRoutes,
});

function UserPage() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: "first", title: "Skills" },
    { key: "second", title: "Communities" },
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: "#ffcc15",
      }}
      style={{
        backgroundColor: "#FFFFFF",
        height: 44,
      }}
      renderLabel={({ focused, route }) => (
        <Text style={[{ color: focused ? "#222222" : "#39B68D"}]}>
          {route.title}
        </Text>
      )}
    />
  );
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
    >
      <StatusBar backgroundColor="#39B68D" />
      <View style={{ width: "100%" }}>
        <Image
          source="../assets/log2.jpg"
          resizeMode="cover"
          style={{
            height: 55,
            width: "100%",
          }}
        />
      </View>

      <View style={{ flex: 1, alignItems: "center" }}>
        <Image
          source={require("../assets/logo2.jpg")}
          resizeMode="contain"
          style={{
            height: 155,
            width: 155,
            borderRadius: 999,
            borderColor: "#ffcc15",
            borderWidth: 2,
            marginTop: -90,
          }}
        />

        <Text
          style={{
            color: "#ffcc15",
            marginVertical: 8,
          }}
        >
          Marco
        </Text>
        <Text
          style={{
            color: "#222222"
          }}
        >
          Web Developer
        </Text>

        <View
          style={{
            flexDirection: "row",
            marginVertical: 6,
            alignItems: "center",
          }}
        >
          <MaterialIcons name="location-on" size={24} color="black" />
          <Text
            style={{
              marginLeft: 4,
            }}
          >
            Bencoolen, Singapore
          </Text>
        </View>

        <View
          style={{
            paddingVertical: 8,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginHorizontal: 10,
            }}
          >
            <Text
              style={{
                color: "#ffcc15",
              }}
            >
              122
            </Text>
            <Text
              style={{
                color: "#ffcc15",
              }}
            >
              Followers
            </Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginHorizontal: 10,
            }}
          >
            <Text
              style={{
                color: "#ffcc15",
              }}
            >
              67
            </Text>
            <Text
              style={{
                color: "#ffcc15",
              }}
            >
              Followings
            </Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginHorizontal: 10,
            }}
          >
            <Text
              style={{
                color: "#ffcc15",
              }}
            >
              77K
            </Text>
            <Text
              style={{
                color: "#ffcc15",
              }}
            >
              Likes
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              width: 124,
              height: 36,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#ffcc15",
              borderRadius: 10,
              marginHorizontal: 10 * 2,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
              }}
            >
              Edit Profile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 124,
              height: 36,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#ffcc15",
              borderRadius: 10,
              marginHorizontal: 10 * 2,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
              }}
            >
              Add Friend
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1, marginHorizontal: 22, marginTop: 20 }}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={renderTabBar}
        />
      </View>
    </SafeAreaView>
  );
};

export {UserPage as UserPage}