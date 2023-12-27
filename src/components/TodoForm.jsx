import { Alert, Box, Button, Card, Snackbar, TextField, Typography, styled } from "@mui/material"
import { useState, useEffect } from "react"

const initialFormValues = {
    title: '',
    description: '',
    date: '',
    color: 'default',
}

const CustomForm = styled('form')(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: 12
}));

const TodoForm = ({ todoAdd, todoEdit }) => {

    const [formValues, setFormValues] = useState(initialFormValues)
    const { title, description } = formValues
    const [error, setError] = useState(null)
    const [successMessage, setsuccessMessage] = useState(null)
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (todoEdit) {
            setFormValues(todoEdit)
        }
    }, [todoEdit])



    const handleInputChange = (e) => {

        const changedFormValues = {
            ...formValues,
            [e.target.name]: e.target.value
        }

        setFormValues(changedFormValues)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (title.trim() === '') {
            setError('Title is Mandatory')
            setsuccessMessage(null)
            return;
        }

        if (description.trim() === '') {
            setError('Description is Mandatory')
            setsuccessMessage(null)
            return;
        }

        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().slice(0, 19).replace("T", " ");
        const todoData = {
            ...formValues,
            date: formattedDate,
            color: 'default'
        };

        todoAdd(todoData)

        setFormValues(initialFormValues)
        setsuccessMessage('Todo Added Successfully')

        setTimeout(() => {
            setsuccessMessage(null);
        }, 2000);

        setError(null)
        setOpen(true);
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '100%' }}>

            <Card sx={{ gap: 2, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h4">New Task</Typography>
                <CustomForm onSubmit={handleSubmit}>
                    <TextField
                        label="Title"
                        variant="outlined"
                        type="text"
                        placeholder="Titulo"
                        value={title}
                        name="title"
                        onChange={handleInputChange}
                    />
                    <TextField
                        multiline
                        minRows={4}
                        label="Description"
                        variant="outlined"
                        placeholder="Description"
                        value={description}
                        name="description"
                        onChange={handleInputChange}
                    >
                    </TextField>
                    <Button
                        type="submit"
                        variant="contained"
                        disableElevation
                    >
                        {todoEdit ? "Update Task" : "Add Task"}
                    </Button>
                </CustomForm>
                {
                    error &&
                    (
                        <Alert severity="error">
                            {error}
                        </Alert>
                    )
                }
                {
                    successMessage &&
                    (
                        <Alert severity="success">
                            {successMessage}
                        </Alert>
                    )
                }
            </Card>
        </Box>
    )
}

export default TodoForm
