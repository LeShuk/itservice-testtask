import React from 'react';
import styles from './Button.module.css';

const Button = ({variant = 'dark', children}, ...other) => {
    return (
        <button
            className={[
                styles.button,
                styles[variant]
            ].join(' ')}
            {...other}
        >
            {children}
        </button>
    );
};

export default Button;