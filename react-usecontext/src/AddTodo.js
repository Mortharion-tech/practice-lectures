import { useContext } from "react";
import { TasksDispatchContext } from "./TasksContext.js";

export default function AddTodo() {
    const dispatch = useContext(TasksDispatchContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        dispatch({
            type: 'ADD_TODO',
            text: (formData.get('text'))
        });
    }

    return (
        <form style={{ margin: 10 }} onSubmit={handleSubmit}>
            <input name="text" type="text" />
        </form>
    );
}