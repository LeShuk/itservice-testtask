import React from 'react';
import ItemCard from "../../UI/itemcard/ItemCard";
import styles from './TwoArraysItem.module.css';

const TwoArraysItem = ({item, remove, update}) => {
    return (
        <ItemCard item={item} remove={remove} update={update}>
            <div className={styles.id}>
                <b>id:&nbsp;</b>
                {item.id}
            </div>
           <div className={styles.data}>
                <div className={styles.strings}>
                    <b>Строки:&nbsp;</b>
                    {item.strings.map((element, i) =>
                        <div key={element}>
                            "{element}"
                            {i<item.strings.length-1?',':''}
                        </div>
                    )};
                </div>
                <div className={styles.subStrings}>
                    <b>Подстроки:&nbsp;</b>
                    {item.subStrings.map((element, i) =>
                        <div key={element}>
                            "{element}"
                            {i<item.subStrings.length-1?',':''}

                        </div>
                    )};
                </div>
            </div>
        </ItemCard>
    );
};

export default TwoArraysItem;