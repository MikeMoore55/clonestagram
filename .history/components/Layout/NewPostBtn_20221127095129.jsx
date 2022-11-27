import React from 'react';
import { GrAdd } from "react-icons/gr"; // " + " icon
import Link from 'next/link';
import styles from '../../styles/NewPostBtn.module.css'

export default function NewPostBtn() {
    return (
        <div className={styles.btnContainer}>

            <button className={styles.addBtn}>
                <Link href={'/createpost'}>
                    <img className={styles.icon} src={"https://brhqhwzkkolxuilfhwkx.supabase.co/storage/v1/object/public/app-icons/iconmonstr-plus-square-lined-240.png?t=2022-11-27T07%3A51%3A13.114Z"}/>
                </Link>
            </button>
            
        </div>
    );
};
