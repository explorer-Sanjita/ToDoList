import { useReducer } from "react";
import AddTask from "./AddTask.jsx";
import "./App.css";
import TaskList from "./TaskList.jsx";

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Learn React", done: false },
  { id: 1, text: "Learn digital art", done: true },
  { id: 2, text: "Generative AI workshop", done: true },
];

const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case "added":
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    case "deleted": {
      return tasks.filter((t) => t.id != action.id);
    }

    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
  }
};
function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  };

  const handleChangeInTask = (task) => {
    dispatch({
      type: "changed",
      task: task,
    });
  };

  return (
    <>
      <h1>TO DO LIST</h1>
      <div className="container">
        <img src="./toDoList.gif" alt="" />
        <div className="content">
          <AddTask onAddTask={handleAddTask} />
          <TaskList
            tasks={tasks}
            onDeleteTask={handleDeleteTask}
            onChangeTask={handleChangeInTask}
          />
        </div>
      </div>
    </>
  );
}

export default App;
