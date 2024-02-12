import { useState } from "react";
import Button from './Button.jsx';

function AddTask({ onAddTask }) {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); // it prevents the web page by reloading again and again thus saving it from going into infinite loop
    if (text.trim) {
      onAddTask(text);
      setText(""); //after task is added, the box where user types task should again become empty
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          style={{ margin: '20px' ,padding : '10px' }}
        />
        <Button type='submit'> Add Task</Button>
      </form>
    </>
  );
}
export default AddTask;
