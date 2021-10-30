import React from "react";
import Top from "./page/Top";
import Account from "./page/Account";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }: any) => ({
            tabBarIcon: ({ focused, color, size }: any) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
              } else if (route.name === "Settings") {
                iconName = focused ? "ios-list-box" : "ios-list";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Home" component={Top} />
          <Tab.Screen name="Settings" component={Account} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
