import React, { useState } from "react";
import { InteractionManager } from "react-native";

import {
  SafeAreaView,
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Header } from "react-native/Libraries/NewAppScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
var cnt = 0;
var loaded = false;
function HomeScreenFunctionality({ img_url, name, id }) {
  var img = img_url,
    productName = name;
  const [count, setCount] = useState(0);
  //   console.log(img);

  return (
    <SafeAreaView style={{ marginTop: 7 }}>
      <View style={styles.productTabs}>
        <Image source={{ uri: img }} style={{ width: 60, height: 70 }} />
        <View>
          <Text
            numberOfLines={5}
            style={styles.tabText}
            onPress={() => alert()}
          >
            {productName}
          </Text>
        </View>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={styles.inc_decBtn}
              onPress={() => setCount(count > 0 ? count - 1 : 0)}
            >
              -
            </Text>
            <Text style={{ width: 40, textAlign: "center", padding: 5 }}>
              {count}
            </Text>
            <Text style={styles.inc_decBtn} onPress={() => setCount(count + 1)}>
              +
            </Text>
          </View>

          <Pressable
            style={{ padding: 7, backgroundColor: "orange", marginTop: 25 }}
            onPress={() => {
            //   AsyncStorage.setItem("@MySuperStore:" + productName, count+"");
              cnt += count;
            //   try {
            //     AsyncStorage.setItem(
            //       "total_items",
            //       AsyncStorage.getItem("@MySuperStore:total_items") + count
            //     );
            //   } catch {
            //     AsyncStorage.setItem("@MySuperStore:total_items", count);
            //   }

              alert("Added to cart " + productName + " -> " + count);
              setCount(0);
            }}
          >
            <Text style={{ fontSize: 12 }}>Add To Cart</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

function HomeScreen() {
  const [OilCanData, setOilCanData] = useState([
    {
      id: 1,
      qty: 0,
      productName: "Unknown Product 1",
      img: require("../../assets/Oil/OilCanLogo.png"),
    },
    {
      id: 2,
      qty: 0,
      productName: "Unknown Product 2",
      img: require("../../assets/Vehicle/CarLogo.png"),
    },
    {
      id: 3,
      qty: 0,
      productName: "Unknown Product 3",
      img: require("../../assets/Filter/Filter.png"),
    },
    { id: 4, qty: 0 },
    { id: 5, qty: 0 },
    { id: 6, qty: 0 },
    { id: 7, qty: 0 },
  ]);

  const getData = () => {
    console.log("getData");
    //Service to get the data from the server to render
    fetch("http://www.canroyal.ca:5000/available_products")
      //Sending the currect offset with get request
      .then((response) => response.json())
      .then((responseJson) => {
        //Successful response from the API Call
        console.log(responseJson);
        if (responseJson.data.length > 0) {
          setOilCanData([...responseJson.data]);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  if (!loaded) {
    getData();
    loaded = true;
  }
  return (
    <ScrollView>
      {OilCanData.map((oilData) => {
        return (
          <HomeScreenFunctionality
            key={oilData.id}
            {...oilData}
          ></HomeScreenFunctionality>
        );
      })}
    </ScrollView>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function CartScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function OilScreen(props) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "OIL CANS") {
            iconName = "md-water-sharp";
          } else if (route.name === "Refresh") {
            iconName = "md-refresh-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "md-cart-sharp" : "md-cart-sharp";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="OIL CANS" component={HomeScreen} />
      <Tab.Screen name="Refresh" component={SettingsScreen} />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{ tabBarBadge: cnt }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  productTabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "pink",
    // marginTop: 7,
    padding: 10,
  },
  tabImg: {
    width: 75,
    height: 75,
  },
  tabText: {
    fontFamily: "Helvetica",
    width: 160,
    fontSize: 17,
  },
  inc_decBtn: {
    backgroundColor: "grey",
    padding: 5,
    color: "white",
  },
});

export default OilScreen;
