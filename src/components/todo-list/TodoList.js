import "./TodoList.css"

const Todolist = (props) => {
    return (
        <ul>{
            props.data.map((todo) => {
                return <li key={todo.id}>{todo.title}</li>
            })
        }</ul>
    )
}

export default Todolist