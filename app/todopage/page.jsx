'use client';
import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const dataFromLocalStorage = () => JSON.parse(localStorage.getItem("todo")) || [];

const Dashboard = () => {
    /* todo is array of object */ 
    const [todo, setTodo] = useState(dataFromLocalStorage);


    // update the localstorage using the newest todo
    useEffect(() => {
        let updateTodoOnLocal = JSON.stringify(todo);
        localStorage.setItem("todo", updateTodoOnLocal);
    }, [todo]);


    // adding new todo items
    const addTodo = (textFromInput) => {
        const newTodo = {
            id: todo.length + 1,
            title: textFromInput,
            isCompleted: false
        }
        setTodo([...todo, newTodo]);
    }


    // check if the todo is completed
    const checkComplete = (eachTodoId) => {
        setTodo(
            todo.map((todoCheck) => {
                if (todoCheck.id === eachTodoId) todoCheck.isCompleted = !todoCheck.isCompleted;
                return todoCheck;
            })
        );
    }


    // delete todo
    const deleteTodo = (eachTodoId) => {
        setTodo(
            todo.filter((todoDelete) => todoDelete.id !== eachTodoId)
        );
    }

    
    // clear all todo
    const deleteALLTODO = () => {
        setTodo([]);
    }



    return (
        <>
            <div className="flex flex-col mt-30 text-center justify-center border-2 border-white w-full p-10 gap-5">
                <h1 className="font-mono italic text-gray-300 opacity-50">-- Saved on Browser Local Storage --</h1>
                <TodoForm addTodo={addTodo} deleteAllTodo={deleteALLTODO}/>
                <TodoList todoList={todo} checkComplete={checkComplete} deleteTodo={deleteTodo}/>
            </div>
        </>
        
        

    )
}

export default Dashboard;