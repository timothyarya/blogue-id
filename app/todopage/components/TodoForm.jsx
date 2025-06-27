import { useState } from "react";

const TodoForm = ({ addTodo, deleteAllTodo }) => {
    const [text, setText] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    }

    return (
        <div className="flex flex-col items-center">

            <form
            className="flex flex-col gap-4 p-5 items-center w-full"
            onSubmit={handleSubmit}
            >

                <input
                className="border-1 text-center w-full p-2 placeholder:font-mono"
                placeholder="What will you do?"
                value={text}
                onChange={(e) => setText(e.target.value)}
                />

                <button
                type="submit"
                className="p-2 px-4 rounded-full bg-white font-mono text-black font-extrabold"
                >
                    ADD LIST
                </button>

            </form>

            <button
            className="p-2 px-4 rounded-full bg-red-400 font-mono text-white font-extrabold"
            onClick={deleteAllTodo}
            >
                DELETE ALL!
            </button>

        </div>
        
    )
}

export default TodoForm;