import React from 'react';
import styles from '../../styles/PostItem.module.css';

export default function PostItem({ posted}) {
    console.log(posted)
    return (
        <div className={styles.container}>
            <div className={styles.profileSection}>
                <h4>{posted.user_id}</h4>
            </div>
            <div className={styles.postContent}>
                {/* the post can either be a text format or just a plain image  */}
                <img className={styles.postImg} src={posted.post_pic} />
                
                <p className={styles.caption}>{posted.caption}</p>
                
                <p className={styles.postText}>{posted.post_text}</p>                
            </div>
        </div>
    );
};
