import React from 'react';
import PostItem from './PostItem';

export default function DisplayPosts({post}) {
    return (

        <div>
            <p>hi</p>
            {post.map(post =>

                <PostItem key={post.posy_id} posted={post} />
            
            )}
        </div>
    );
};
