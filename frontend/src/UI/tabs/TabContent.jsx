import React from 'react';
import styles from './TabContent.module.css'

const TabContent = ({children}) => {
    return (
        <div className={styles.tabcontent}>
            {children}
        </div>
    );
};

export default TabContent;