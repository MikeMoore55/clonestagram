import React from 'react';
import styles from '../../styles/PostItem.module.css';

export default function PostItem({ posted}) {
    console.log(posted)
    return (
        <div className={styles.container}>
            <img className={styles.postImg} src={posted.post_pic} />
        </div>
    );
};
