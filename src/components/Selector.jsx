import React from 'react';
import { useMode } from '../context/ModeProvider';

export const Selector = ({ color }) => {


    const { isLightMode } = useMode()

    const colorMap = {
        default: isLightMode ? '#efefef' : '#3d3d3d',
        yellow: isLightMode ? '#fffac0' : '#753e0e',
        green: isLightMode ? '#ccffd9' : '#00562a',
        red: isLightMode ? '#ffe2e0' : '#871d15',
    };

    const fillColor = colorMap[color] || '#fafafa'

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink" // Cambiado a camelCase
            width="20"
            height="20"
            x="0"
            y="0"
            viewBox="0 0 100 100"
            style={{ enableBackground: 'new 0 0 512 512' }}
            xmlSpace="preserve" // Cambiado a camelCase
            className=""
        >
            <g>
                <path
                    fill={fillColor}
                    d="M100 50c0 27.615 -22.385 50 -50 50S0 77.615 0 50 22.385 0 50 0s50 22.385 50 50zm0 0"
                    opacity="1"
                    data-original={fillColor}
                />
            </g>
        </svg>
    );
};
