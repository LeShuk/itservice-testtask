import React from 'react';
import Button from "../../UI/button/Button";
import Upload from "../../UI/upload/Upload";
import styles from './ButtonGroup.module.css';

const ButtonGroup = () => {
    return (
        <div className={styles.buttonGroup}>
            <Button>
                Посчитать
            </Button>
            <Button>
                Сохранить
            </Button>
            <Button>
                Загрузить
            </Button>
            <Button variant={'light'}>
                Экспортировать
            </Button>
            <Upload
                variant={'light'}
                accept={'text/plain'}
                caption={'Импортировать'}
            />
        </div>
    );
};
//посчитать, сохранить, экспортировать, загрузить, импортировать.

export default ButtonGroup;