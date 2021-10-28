import { StatusBar } from "expo-status-bar";
import React ,{ useState } from "react";
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, Platform} from "react-native";

const App = () => {
  const [task, setTask] = useState<string>("");
  const [taskItems, setTaskItems] = useState<any>([]);
  const handleAddTask = () => {
    if (!task) null;
    setTaskItems([...taskItems, task]);
    setTask('');
  };
  const completeTask = (index: any) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  return (
    <View>
      <Text>Task List</Text>
      <View>
        {taskItems.map((item: any, index: string) => {
          return (
            <TouchableOpacity onPress={() => completeTask(index)}>
              <Text key={index}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
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
    </View>
  );
};

export default App;