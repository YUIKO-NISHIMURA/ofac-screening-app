import React from 'react';

interface ButtonProps {
    onClick: () => void;
    label: string;
    bgColor: string;
    textColor: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, bgColor, textColor, disabled }) => {
    return (
        <button
        type="button"
        onClick={onClick}
        className={`bg-${bgColor} text-${textColor} py-2 px-4 rounded cursor-pointer h-12 w-full font-semibold`}
        disabled={disabled} 
        >
        {label}
        </button>
    );
};

export default Button;