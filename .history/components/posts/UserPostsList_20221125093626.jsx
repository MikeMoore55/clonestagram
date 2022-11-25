import React from 'react';
import UserPostItem from './UserPostItem';
import styles from '../../styles/UserPostList.module.css';


export default function UserPostsList({posts}) {
  console.log(posts)
    return (
      <div className={styles.list}>
            {posts.map((index, post) => {
                <div key={index}>
                    <UserPostItem posted={post}/>
                </div>
            })};
    </div>
  )
}