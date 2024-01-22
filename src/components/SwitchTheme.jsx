import { Button } from '@mui/material';
import React from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useMode } from '../context/ModeProvider';

export const SwitchTheme = () => {
    const { isLightMode, toggleMode } = useMode();

    return (
        <Button
            title="Theme Mode"
            aria-label="Theme Mode"
            onClick={toggleMode}
            variant='contained'
            disableElevation
            sx={{
                aspectRatio: '1/1',
                borderRadius: 10,
                fontSize: 16,
                fontWeight: 600,
                padding: 1,
                position: 'absolute',
                right: 10,
                top: 10,
            }}>
            {isLightMode ? (
                <>
                    <DarkModeIcon />
                </>
            ) : (
                <>
                    <LightModeIcon />
                </>
            )}

        </Button>
    );
};
