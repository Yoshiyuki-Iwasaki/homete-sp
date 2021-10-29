import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = () => {
  return (
    <>
      <Text style={styles.sectionTitle}>Task List</Text>
    </>
  );
};

export default Header;


const styles = StyleSheet.create({
  sectionTitle: {
    padding: 15,
    fontSize: 24,
    fontWeight: "bold",
  },
});
