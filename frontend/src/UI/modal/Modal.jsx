import React from 'react';
import styles from './Modal.module.css';

const Modal = ({visible, setVisible, children}) => {
    const hide = (e) => {
        setVisible(false);
    }

    return (
        <div
            className={[styles.modal, visible?styles.active:""].join(" ") }
            onClick={e => hide(e)}
        >
            <div className={styles.content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;