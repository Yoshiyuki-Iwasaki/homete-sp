import React from "react";
import { Text, View, Image } from "react-native";

const Account = () => {
  return (
    <>
      <View
        style={{
          backgroundColor: "#1DA1F2",
          height: 120,
          paddingHorizontal: 20,
        }}
      ></View>
      <View
        style={{
          marginTop: -50,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Image
          style={{
            height: 100,
            width: 100,
            borderColor: "#1DA1F2",
            borderWidth: 2,
            borderRadius: 50,
          }}
          source={require("../assets/icon.png")}
        />
      </View>
    </>
  );
};

export default Account;
