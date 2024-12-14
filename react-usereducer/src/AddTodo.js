export default function AddTodo({ handleAddTask }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        handleAddTask(formData.get('text'))
    }

    return (
        <form style={{ margin: 10 }} onSubmit={handleSubmit}>
            <input name="text" type="text" />
        </form>
    );
}