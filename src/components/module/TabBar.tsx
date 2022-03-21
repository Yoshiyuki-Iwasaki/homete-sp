import React from 'react'
import { Text, View, StyleSheet } from "react-native";


const TabBar = () => {
  return (
    <View style={styles.tabArea}>
      <View>
        <Text style={styles.tabText}>Tabbar</Text>
      </View>
    </View>
  );
}

export default TabBar


const styles = StyleSheet.create({
  tabArea: {
    display: 'flex',
    height: 60,
  },
  tabText: {},
});
