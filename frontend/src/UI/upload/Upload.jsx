import React, {useRef} from 'react';
import styles from './Upload.module.css'
import Button from "../button/Button";

const Upload = ({setFile,
                accept,
                variant = 'dark',
                caption = 'Загрузить'}) => {
    const ref = useRef(null);

    return (
        <div
            className={styles.file_upload}
            onClick={
            (e) => {
                e.preventDefault();
                e.stopPropagation();
                ref.current.click();
            }
        }>
            <input
                type={"file"}
                accept={accept}
                onChange={(e) => {
                    if (!!e.target.files) {
                        setFile(e.target.files[0]);
                    }
                }}
                onClick={e => e.stopPropagation()}
                ref={ref}
            />
            <Button
                variant={variant}
            >
                {caption}
            </Button>
        </div>
    );
};

export default Upload;