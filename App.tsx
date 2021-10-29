import React from "react";
import TaskList from "./components/task/TaskList";
import Header from "./components/module/Header";
import TabBar from "./components/module/TabBar";

const App = () => {
  return (
    <>
      <Header />
      <TaskList />
      <TabBar />
    </>
  );
};

export default App;
