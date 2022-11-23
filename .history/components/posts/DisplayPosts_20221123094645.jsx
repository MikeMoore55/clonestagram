import React from 'react';
import PostItem from './PostItem';

export default function DisplayPosts({post}) {
    return (

        <div>
            <p>hi</p>
            {post.map((post, index) => {
                <PostItem key={index} posted={post} />
            }
            )}
        </div>
    );
};
