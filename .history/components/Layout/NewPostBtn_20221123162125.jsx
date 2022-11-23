import React from 'react';
import { GrAdd } from "react-icons/gr";
import Link from 'next/link';
import styles from '../../styles/NewPostBtn.module.css'

export default function NewPostBtn() {
    return (
        <div className={styles.btnContainer}>

            <button className={styles.addBtn}>
                <Link href={'/createpost'}>
                    <span className={styles.btnIcon}>
                        <GrAdd />
                    </span>
                </Link>
            </button>
            
        </div>
    );
};
