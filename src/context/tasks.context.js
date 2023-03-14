import React, { useState, useEffect } from "react";

const TasksContext = React.createContext();

function TasksProviderWrapper(props) {
  const [tasks, setTasks] = useState([])
  console.log("INSIDE TASK CONTEXT!!!")
  return (
    <TasksContext.Provider
      value={{tasks, setTasks}}
    >
      {props.children}
    </TasksContext.Provider>
  );
}

export { TasksProviderWrapper, TasksContext };
