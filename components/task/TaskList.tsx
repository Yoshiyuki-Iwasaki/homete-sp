import React, { useState } from "react";
import {
  View,
  StyleSheet
} from "react-native";
import TaskItem from "./TaskItem";
import TaskInput from "./TaskInput";

const TaskList = () => {
  const [taskItems, setTaskItems] = useState<any>([]);
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <View style={styles.items}>
          {taskItems.map((item: any, index: string) => {
            return (
              <TaskItem
                key={index}
                index={index}s
                item={item}
                taskItems={taskItems}
                setTaskItems={setTaskItems}
              />
            );
          })}
        </View>
      </View>
      <TaskInput taskItems={taskItems} setTaskItems={setTaskItems} />
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    height: '67vh',
    overflow: 'scroll',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
  },
});
