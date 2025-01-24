export default function TodoList({ tasks, handleChange }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} handleChange={handleChange} />
      ))}
    </ul>
  );
}
