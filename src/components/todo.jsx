import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';
import './todo.css'

const TodoCard = ({ text, onDelete }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent className='cardContent'>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {text}
                </Typography>
                <CardActions>
                    <Button onClick={onDelete} size="small">X</Button>
                </CardActions>
            </CardContent>

        </Card>
    )
}

export const TodoList = () => {
    const [todo, setTodo] = useState([]);
    const dispatch = useDispatch();
    const handleAdd = () => {
        dispatch(toggleTheme());
        const el = document.getElementById('newTask');

        if (el.value !== '') {
            const newTodo = { text: el.value, id: todo.length + 1 }

            setTodo([...todo, newTodo])
            el.value = ''
        }

    }

    const handleDelete = (itemId) => {
        const newTodos = todo.filter(({ id }) => id !== itemId);

        setTodo(newTodos)
    }

    return (
        <>
            <div>
                {todo.map(({ text, id }) => {
                    return <TodoCard text={text} id={id} onDelete={() => handleDelete(id)} />
                })}
            </div>

            <div className='todoWrapper'>
                <TextField id='newTask' label="Enter task" fullWidth />
                <Button className='addBtn' variant="text" onClick={handleAdd} >Add task</Button>
            </div>
        </>
    )
}