import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
} from "react-native";

const TaskItem = ({ item, index }: any) => {
  const [taskItems, setTaskItems] = useState<any>([]);
  const completeTask = (index: any) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  return (
    <TouchableOpacity key={index} onPress={() => completeTask(index)}>
      <Text key={index}>{item}</Text>
    </TouchableOpacity>
  );
};

export default TaskItem
