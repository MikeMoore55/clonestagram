import React from 'react';
import { GrAdd } from "react-icons/gr"; // " + " icon
import Link from 'next/link';
import styles from '../../styles/NewPostBtn.module.css'

export default function NewPostBtn() {
    return (
        <div className={styles.btnContainer}>

            <button className={styles.addBtn}>
                <Link href={'/createpost'}>
                    <img className={styles.icon} src={""} alt="home icon"/>
                </Link>
            </button>
            
        </div>
    );
};
