import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { color } from "react-native-reanimated";

const listTab = [{ status: "投稿" }, { status: "いいね" }];

const Account = () => {
  const [status, setStatus] = useState("投稿");
  const setStatusFilter = (status: any) => {
    setStatus(status);
  };
  return (
    <>
      <View style={styles.upperBg}></View>
      <View style={styles.iconArea}>
        <Image style={styles.icon} source={require("../assets/icon.png")} />
        <View style={styles.listTab}>
          {listTab.map((e, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.list, status === e.status && styles.activeList]}
              onPress={() => setStatusFilter(e.status)}
            >
              <Text
                style={[styles.text, status === e.status && styles.activeText]}
              >
                {e.status}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View
          style={[styles.content, status === "投稿" && styles.activeContent]}
        >
          <Text>投稿</Text>
        </View>
        <View
          style={[styles.content, status === "いいね" && styles.activeContent]}
        >
          <Text>いいね</Text>
        </View>
      </View>
    </>
  );
};

export default Account;


const styles = StyleSheet.create({
  upperBg: {
    backgroundColor: "#1DA1F2",
    height: 120,
    paddingHorizontal: 20,
  },
  iconArea: {
    marginTop: -50,
    alignItems: "center",
  },
  icon: {
    height: 100,
    width: 100,
    borderColor: "#1DA1F2",
    borderWidth: 2,
    borderRadius: 50,
  },
  listTab: {
    marginTop: 30,
    flexDirection: "row",
    width: "100%",
  },
  list: {
    justifyContent: "center",
    paddingVertical: 10,
    backgroundColor: "#fff",
    width: Dimensions.get("window").width / 2,
  },
  text: {
    textAlign: "center",
  },
  content: {
    display: "none",
  },
  activeList: {
    backgroundColor: "#E6838d",
  },
  activeText: {
    color: "#fff",
  },
  activeContent: {
    display: "flex",
  },
});
