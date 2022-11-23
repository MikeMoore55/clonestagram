import React from 'react';

export default function PostItem({ post }) {
    console.log(post)
  return (
      <div>
          <p>{post.user_id}</p>
          <p>{post.post_pic}</p>
    </div>
  )
}
