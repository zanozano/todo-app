import React, { createContext, useContext, useState } from 'react';
import { createTheme } from '@mui/material/styles';

const ModeContext = createContext();

export const useMode = () => {
    return useContext(ModeContext);
};

export const ModeProvider = ({ children }) => {
    const [isLightMode, setIsLightMode] = useState(true);

    const toggleMode = () => {
        setIsLightMode((prevMode) => !prevMode);
    };

    const theme = createTheme({
        typography: {
            fontFamily: 'Roboto, sans-serif',
        },
        palette: {
            mode: isLightMode ? "light" : "dark",
            primary: {
                main: isLightMode ? '#126924' : '#43e563',
            },
            secondary: {
                main: isLightMode ? '#323232' : '#c8c8c8',
            },
            tertiary: {
                main: isLightMode ? '#a5a5a5' : '#555555',
            },
            surface: {
                main: isLightMode ? '#000000' : '#201e2b',
            },
            background: {
                main: isLightMode ? '#fafafa' : '#141801',
            },
        },
        components: {
            MuiCard: {
                styleOverrides: {
                    root: {
                        borderRadius: 18,
                        padding: 44,
                        boxShadow: 'none',
                    }
                }
            },

        }
    });

    const contextValue = {
        isLightMode,
        toggleMode,
        theme,
    };

    return (
        <ModeContext.Provider value={contextValue}>
            {children}
        </ModeContext.Provider>
    );
};
