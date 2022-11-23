import React from 'react';
import PostItem from './PostItem';
import styles from '../../styles/PostDisplay.module.css';

export default function DisplayPosts({post, accounts}) {
    return (

        <div className={styles.postList}>
            <div className={styles.posts}>
                {post.map(post =>

                    <PostItem key={post.post_id} posted={post} account={accounts} />
            
                )}
            </div>
        </div>
    );
};
