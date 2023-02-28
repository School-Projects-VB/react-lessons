import React from 'react';

interface Props {
    onClick: (e: any) => void;
    text: string;
    type?: 'submit' | 'reset' | 'button';
}

const Button: React.FC<Props> = ({onClick, text, type}) => (
    <button
        className="button"
        onClick={onClick}
        type={type}
    >
        {text}
    </button>
);

Button.defaultProps = {
    type: 'button',
};

export default Button;
