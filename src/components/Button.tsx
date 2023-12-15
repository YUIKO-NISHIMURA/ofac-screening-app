import React from 'react';

interface ButtonProps {
    onClick: () => void;
    label: string;
    bgColor: 'blue' | 'gray' | 'black';
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, bgColor, disabled }) => {
    const backgroundColorClass = getBackgroundColorClass(bgColor);
    return (
        <button
        type="button"
        onClick={onClick}
        className={`${backgroundColorClass} text-white py-2 px-4 rounded cursor-pointer h-12 w-full font-semibold`}
        disabled={disabled} 
        >
        {label}
        </button>
    );
};

export default Button;

const getBackgroundColorClass = (bgColor: string) => {
    switch (bgColor) {
        case 'blue':
            return 'bg-y-blue';
        case 'gray':
            return 'bg-gray-400';
        case 'black':
            return 'bg-black';
        default:
            return 'bg-y-blue';
    }
};