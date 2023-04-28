import React from 'react';
import Button from "../../UI/button/Button";
import styles from "./ItemCard.module.css";

const ItemCard = ({item, update, remove, children}) => {
    return (
        <div
            className={styles.item_card}
            onClick={e => {
                e.stopPropagation();
                update(item);
            }}
        >
            {children}
            <div className={styles.item_buttons}>
                <Button
                    variant={'light'}
                    onClick={e => {
                        e.stopPropagation();
                        remove(item);
                    }}
                >
                    X
                </Button>
            </div>
        </div>
    );
};

export default ItemCard;