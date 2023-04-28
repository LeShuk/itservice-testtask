import React from 'react';
import styles from './Tabs.module.css'
import TabContent from "./TabContent";

const Tabs = ({tabs, activeTab, setActiveTab}) => {
    return (
        <>
            <div className={styles.tab}>
                <div className={styles.tabs}>
                    {
                        tabs.map((tab) =>
                            <div className={[
                                styles.tablinks,
                                tab.id === activeTab ? styles.active : ''
                            ].join(' ')}
                                 onClick={() => setActiveTab(tab.id)}
                                 key={tab.id}
                            >
                                {tab.title}
                            </div>
                        )}
                </div>
                {tabs[activeTab] &&
                <TabContent {...tabs[activeTab]}/>}
            </div>

        </>
    );
};

export default Tabs;