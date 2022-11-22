import React from 'react';
import { GrAdd } from "react-icons/gr";
import styles from '../../styles/NewPostBtn.module.css'

export default function NewPostBtn() {
    return (
        <div className={styles.btnContainer}>
            <button className={styles.addBtn}>
                <span>
                    <GrAdd />
                </span>
            </button>
        </div>
    );
};
