import React from 'react';
import PostItem from './PostItem';

export default function DisplayPosts({posts}) {
    return (
        <div>
            <p>hi</p>
            {posts.map((posts, index) => {
                <PostItem key={index} post={posts} />
            }
            )}
        </div>
    );
};
