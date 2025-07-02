import TodoContainer from "./TodoContainer";

const TodoList = ({ todoList, checkComplete, deleteTodo }) => {
    return (
        <>
            <ul className="flex flex-col gap-3 items-center font-bold font-mono">
                {todoList.map((todo) => {
                    return (
                        <TodoContainer
                        className="flex flex-row gap-3 items-center font-bold font-mono"
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        checkComplete={checkComplete}
                        isCompleted={todo.isCompleted}
                        deleteTodo={deleteTodo}
                        />
                    )
                }) }
            </ul>
        </>
    )
}

export default TodoList;