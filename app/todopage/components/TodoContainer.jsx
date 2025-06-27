import { ImCross } from 'react-icons/im';

const TodoContainer = ({ id, title, checkComplete, isCompleted, deleteTodo }) => {
    const markComplete = () => {
        checkComplete(id);
    }

    const handleDelete = () => {
        deleteTodo(id);
    }

    return (
        <div className="flex flex-row gap-3 items-center">
            <input type="checkbox" onChange={markComplete} defaultChecked={false} />
            <li className={`flex flex-row gap-3 items-center font-bold font-mono ${isCompleted ? "line-through" : ""}`} key={id} >{title}</li>
            <button className="text-red-500" onClick={handleDelete}><ImCross /></button>
        </div>
        
    )
}

export default TodoContainer;