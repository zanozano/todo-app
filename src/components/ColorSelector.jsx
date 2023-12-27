import { Box, IconButton } from '@mui/material'
import React from 'react'
import { Selector } from './Selector'
import { colorPickers } from '../utils/colorPicker'

export const ColorSelector = ({ todoAdd, todo }) => {

    const changeBackgroundColor = (color) => {

        const todoData = {
            ...todo,
            color: color,
        };
        todoAdd(todoData);
    };
    return (
        <Box sx={{ display: 'flex', gap: 1 }}>
            {colorPickers.map(({ color }) => (
                <IconButton key={color} onClick={() => changeBackgroundColor(color)}>
                    <Selector color={color} />
                </IconButton>
            ))}
        </Box>
    )
}
