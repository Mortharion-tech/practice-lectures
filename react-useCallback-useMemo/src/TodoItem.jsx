import { useRef } from "react";

const TodoItem = ({ task, handleChange }) => {
  const renderCount = useRef(0);

  const toggleTodoCompleted = () => handleChange({ ...task, done: !task.done });

  return (
    <li className="todoItem">
      <input
        onChange={toggleTodoCompleted}
        type="checkbox"
        checked={task.done}
      />
      <span>{task.text}</span>
      <div className="badge">{renderCount.current++}</div>
    </li>
  );
};

export default TodoItem;
