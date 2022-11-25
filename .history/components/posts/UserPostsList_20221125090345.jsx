import React from 'react';
import UserPostItem from './UserPostItem';

export default function UserPostsList({user, posts}) {
  return (
      <div>
          {posts.map(post => {
              <UserPostItem key={post.post_id} post={post}/>
          })}
    </div>
  )
}