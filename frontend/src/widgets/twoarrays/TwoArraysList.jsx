import React from 'react';
import styles from './TwoArraysList.module.css'
import TwoArraysItem from "./TwoArraysItem";

const TwoArraysList = ({items, update}) => {
    return (
        <div>
            {items.map((item) =>
                <TwoArraysItem
                    item={item}
                    key={item.id}
                    update={update}
                    remove={() => alert('Удаление элементов из БД не предусмотрено ТЗ')}
                />
            )}
        </div>
    );
};

export default TwoArraysList;