import React from 'react';
import UsersPostItem from './UsersPostItem';
import styles from '../../styles/UserPostList.module.css';


export default function UsersPostsList({posts}) {
  console.log(posts)
    return (
        <div className={styles.list}>
            {posts.map(post => 
                
                <UsersPostItem key={post.post_id} posted={post} />
        
            )}
        </div>
    );
};