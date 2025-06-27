'use client';
import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const dataFromLocalStorage = () => JSON.parse(localStorage.getItem("todo")) || [];

const Dashboard = () => {
    const [todo, setTodo] = useState(dataFromLocalStorage());



    useEffect(() => {
        let updateTodoOnLocal = JSON.stringify(todo);
        localStorage.setItem("todo", updateTodoOnLocal);
    }, [todo]);



    const addTodo = (textFromInput) => {
        const newTodo = {
            id: todo.length + 1,
            title: textFromInput,
            isCompleted: false
        }
        setTodo([...todo, newTodo]);
    }



    const checkComplete = (id) => {
        setTodo(
            todo.map((item) => {
                if (item.id === id) item.isCompleted = !item.isCompleted;
                return item;
            })
        );
    }



    const deleteTodo = (id) => {
        setTodo(
            todo.filter((item) => item.id !== id)
        );
    }

    

    const deleteALLTODO = () => {
        setTodo([]);
    }



    return (
        <>
            <div className="flex flex-col mt-30 text-center justify-center border-2 border-white w-full p-10 gap-5">
                <h1 className="font-mono italic text-gray-300 opacity-50">Saved on Browser Local Storage</h1>
                <TodoForm addTodo={addTodo} deleteAllTodo={deleteALLTODO}/>
                <TodoList todoList={todo} checkComplete={checkComplete} deleteTodo={deleteTodo}/>
            </div>
        </>
        
        

    )
}

export default Dashboard;