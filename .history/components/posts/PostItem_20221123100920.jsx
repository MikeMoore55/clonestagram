import React from 'react';
import styles from '../../styles/PostItem.module.css';

export default function PostItem({ posted}) {
    console.log(posted)
    return (
        <div className={styles.container}>
            <p>{posted.user_id}</p>
            <p>{posted.post_pic}</p>
            <img src={posted.post_pic} />
        </div>
    );
};
