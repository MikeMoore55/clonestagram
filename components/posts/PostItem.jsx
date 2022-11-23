import React from 'react';

export default function PostItem({ posted}) {
    console.log(posted)
  return (
      <div>
          <p>{posted.user_id}</p>
          <p>{posted.post_pic}</p>
    </div>
  )
}
