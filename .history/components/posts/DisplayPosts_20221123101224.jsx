import React from 'react';
import PostItem from './PostItem';
import styles from '../../styles/PostDisplay.module.css';

export default function DisplayPosts({post}) {
    return (

        <div>
            <p>hi</p>
            {post.map(post =>

                <PostItem key={post.post_id} posted={post} />
            
            )}
        </div>
    );
};
