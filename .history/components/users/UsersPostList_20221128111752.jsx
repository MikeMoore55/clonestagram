import React from 'react';
import UsersPostItem from './UsersPostItem';
import styles from '../../styles/UserPostList.module.css';

//post list for post items for users post for user account from post [:D complex, i know]

export default function UsersPostsList({posts}) {
  
    return (
        <div className={styles.list}>
            {posts.map(post => 
                
                <UsersPostItem key={post.post_id} posted={post} />
        
            )}
        </div>
    );
};