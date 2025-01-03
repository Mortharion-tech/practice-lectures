import { useContext } from "react";
import { TasksContext, TasksDispatchContext } from "./TasksContext.js";

export default function TasksList() {
    const tasks = useContext(TasksContext);
    const dispatch = useContext(TasksDispatchContext);

    return (
        <>
        {tasks.map(task =>
        <li key={task.id}>
            <input
                onChange={() =>
                    dispatch({
                        type: 'UPDATE_TODO',
                        task: {...task, done: !task.done }
                    })
                }
                type="checkbox" checked={task.done}
            />
            {task.text}
            <button onClick={() => 
                dispatch({
                    type: 'DELETE_TODO',
                    taskId: task.id
                })}>
                        Delete
                </button>
        </li>
        )}
        </>
    )
}