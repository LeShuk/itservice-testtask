import React, {useEffect, useState} from 'react';
import TwoArraysList from "./TwoArraysList";
import Button from "../../UI/button/Button";
import TwoArraysService from "../../api/TwoArraysService";
import styles from './TwoArraysLoad.module.css';

const TwoArraysLoad = ({onSelect, onCancel}) => {
    const [arraysItems, setArraysItems] = useState();

    const getAll = () => {
        TwoArraysService
            .getAll()
            .then(items => setArraysItems(items))
            .catch(err => console.error("Не удалось получить список строк."))
    }

    useEffect(() => {
        getAll();
    }, [])
    
    return (
            <>
                {
                    !!arraysItems
                        ? <>
                            <h1>Выберете элемент для загрузки:</h1>
                            <TwoArraysList
                                items={arraysItems}
                                update={onSelect}
                            />
                        </>
                        : <>
                            <h1>Сохраненные элементы отсутствуют</h1>
                        </>
                }

                <div className={styles.modalButton}>
                    <Button
                        onClick={onCancel}
                        variant={'light'}
                    >
                        Отмена
                    </Button>
                </div>
            </>
    );
};

export default TwoArraysLoad;