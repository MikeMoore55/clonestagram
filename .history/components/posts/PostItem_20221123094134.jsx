import React from 'react'

export default function PostItem({post}) {
  return (
      <div>
          <p>{post.user_id}</p>
          <p>{post.post_pic}</p>
    </div>
  )
}
