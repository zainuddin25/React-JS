import Todolist from "../todo-list/TodoList"
import { useState } from "react"
import TodoCreate from "../todo-create/TodoCreate"
import "./Todo.css"

const Todo = () => {

    const [getTodos, setTodos] = useState([
        {id : 1, title  : "Eat"},
        {id : 2, title  : "Sleep"},
        {id : 3, title  : "Code"}
    ])

    const eventCreteTodo = (todo) => {
        setTodos(getTodos.concat(todo))
        // console.log(getTodos);
    }

    return (
        <div>
            <h3>Todo List</h3>
            <TodoCreate onCreateTodo={eventCreteTodo}/>
            <Todolist data={getTodos} />
        </div>
    )
}

export default Todo;