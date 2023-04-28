import React, {useState} from 'react';
import Tabs from "../UI/tabs/Tabs";
import Button from "../UI/button/Button";
import styles from './MainPage.module.css';
import Upload from "../UI/upload/Upload";
import TwoArraysList from "../widgets/twoarrays/TwoArraysList";
import Modal from "../UI/modal/Modal";
import TwoArraysLoad from "../widgets/twoarrays/TwoArraysLoad";

const MainPage = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [activeItem, setActiveItem] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const tabs = [
        {id: 0, title: 'Два массива', children: 'Два массива туточки'},
        {id: 1, title: 'Полумагический квадрат', children: 'C алгоритмами иногда хромаю, без подсказки не разберусь.'},

    ]

    const load = () => {
        setShowModal(true);
    }

    const onSelect = (item) => {
        setActiveItem(item);
        setShowModal(false);
    }

    const onCancel = () => {
        setShowModal(false);
    }

    return (
        <>
            <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}/>
            <div className={styles.buttonGroup}>
                <Button>
                    Посчитать
                </Button>
                <Button>
                    Сохранить
                </Button>
                <Button
                    onClick={load}
                >
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
            {showModal &&
            <Modal visible={showModal} setVisible={setShowModal}>
                <TwoArraysLoad
                    onSelect={onSelect}
                    onCancel={onCancel}
                />
            </Modal>
            }
        </>
    );
};

export default MainPage;