import { Box, Button, Card, Divider, Typography } from "@mui/material"
import { ColorSelector } from "./ColorSelector"

const Todo = ({ todo, todoDelete, todoToggleCompleted, setTodoEdit, todoAdd }) => {

    const { title, description, date, color } = todo

    return (
        <Card sx={{ padding: 3, display: 'grid', gap: 2, backgroundColor: (theme) => theme.palette?.[color].main }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 2,
                alignItems: 'center',
            }}>
                <Typography variant="body2">
                    {date}
                </Typography>
                <ColorSelector todoAdd={todoAdd} todo={todo} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography
                    sx={{
                        overflowWrap: 'break-word',
                        wordBreak: 'break-word',
                    }}
                    variant="h3"
                >
                    {title}
                </Typography>
                <Button
                    variant={todo.completed ? 'contained' : 'outlined'}
                    disableElevation
                    onClick={() => todoToggleCompleted(todo.id)}
                    color={todo.completed ? 'success' : 'secondary'}
                >
                    {todo.completed ? 'Finished' : 'Pending'}
                </Button>
            </Box>
            <Typography
                variant="body1"
                sx={{
                    overflowWrap: 'break-word',
                    wordBreak: 'break-word',
                }}
            >
                {description}
            </Typography>
            <Divider />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Button
                    sx={{ borderRadius: 20 }}
                    variant="contained"
                    disableElevation
                    color='info'
                    onClick={() => setTodoEdit(todo)}
                >
                    Edit
                </Button>
                <Button
                    sx={{ borderRadius: 20 }}
                    variant="contained"
                    disableElevation
                    onClick={() => todoDelete(todo.id)}
                    color='error'
                >
                    Delete
                </Button>
            </Box>

        </Card>
    )
}

export default Todo
