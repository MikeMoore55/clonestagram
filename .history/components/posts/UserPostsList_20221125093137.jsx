import React from 'react';
import UserPostItem from './UserPostItem';
import styles from '../../styles/UserPostList.module.css';


export default function UserPostsList({user, posts}) {
  return (
      <div className={styles.list}>
          {posts.map(post => {
              <UserPostItem key={post.post_id} post={post}/>
          })};
    </div>
  )
}