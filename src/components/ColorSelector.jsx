import { Box, IconButton } from '@mui/material'
import React from 'react'
import { Selector } from './Selector'
import { colorPickers } from '../utils/colorPicker'


export const ColorSelector = ({ setTodoEdit }) => {

    const changeBackgroundColor = (hex) => {
        console.log(hex)
    }

    return (
        <Box sx={{ display: 'flex', gap: 1 }}>
            {colorPickers.map(({ color, hex }) => (
                <IconButton key={color} onClick={() => changeBackgroundColor(hex)}>
                    <Selector hex={hex} />
                </IconButton>
            ))}
        </Box>
    )
}
