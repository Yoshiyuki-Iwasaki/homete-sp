import React, { useState } from "react";
import {
  Text,
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
        <Text style={styles.sectionTitle}>Task List</Text>
        <View>
          {taskItems.map((item: any, index: string) => {
            return <TaskItem key={index} item={item} index={index} />;
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
    backgroundColor:'#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal:20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop:30,
  },
  writeTaskWrapper: {
  },
  input: {},
  addWrapper: {},
  addText: {},
});
