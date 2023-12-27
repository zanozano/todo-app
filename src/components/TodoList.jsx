import { Box } from "@mui/material"
import Todo from "./Todo"

const TodoList = ({ todos, todoDelete, todoToggleCompleted, setTodoEdit, todoAdd }) => {


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '100%' }}>
            {
                todos.map(todo => (
                    <Todo
                        todoAdd={todoAdd}
                        todo={todo}
                        key={todo.id}
                        todoDelete={todoDelete}
                        todoToggleCompleted={todoToggleCompleted}
                        setTodoEdit={setTodoEdit}
                    />
                ))
            }
        </Box>
    )
}

export default TodoList
