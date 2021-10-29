import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const TaskItem = ({ item, taskItems, setTaskItems, index }: any) => {
  const completeTask = (index: any) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  return (
    <View style={styles.item}>
      <TouchableOpacity
        style={styles.squere}
        onPress={() => completeTask(index)}
      ></TouchableOpacity>
      <Text style={styles.itemText}>
        {item}
      </Text>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  item: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  squere: {
    marginRight: 15,
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
  },
  itemText: {},
});
