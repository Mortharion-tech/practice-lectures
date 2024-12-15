export default function TasksList({ tasks, handleChangeTask, handleDeleteTask }) {
    return (
        <>
        {tasks.map(task =>
        <li key={task.id}>
            <input
                onChange={() => handleChangeTask({ ...task, done: !task.done})}
                type="checkbox" checked={task.done}
            />
            {task.text}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </li>
        )}
        </>
    )
}