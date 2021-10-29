import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
} from "react-native";

const TaskInput = ({ taskItems, setTaskItems }:any) => {
  const [task, setTask] = useState<string>("");
  const handleAddTask = () => {
    if (!task) null;
    setTaskItems([...taskItems, task]);
    setTask("");
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TextInput
        value={task}
        placeholder={"Write a task."}
        onChangeText={text => setTask(text)}
      />
      <TouchableOpacity onPress={() => handleAddTask()}>
        <View>
          <Text>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default TaskInput
