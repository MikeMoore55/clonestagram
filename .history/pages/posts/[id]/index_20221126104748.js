import React from 'react'
import { SupaBaseDB } from '../../../utils/dbconnect';

export default function Posts({ posts }) {

    let postContent;  // post type
    let posted;
    posts.map(post => posted = post);

    console.log(posted)

    posts.map(post => {
        if (post.post_text == '') {
            postContent = "image"
        }
        if (post.post_pic == '') {
            postContent = "text"
        }
    })

    return (
        <div>
            <br />
            <br />
            <br />
            <div>
                {posts.map(post =>
                    <div key={post.post_id}>
                        <p>{post.post_id}</p>
                        <p></p>
                    </div>
                )}
            </div>
        </div>
    );
};


export const getStaticProps = async (context) => {

    const posts = await SupaBaseDB
        .from("posts")
        .select('*')
        .eq('post_id', context.params.id)
    const post = posts.data;

    return {
        props: {
            posts: post,
        }
    };

};

export const getStaticPaths = async () => {

    const res = await SupaBaseDB
        .from("posts")
        .select('*')

    const post = res.data;

    const ids = post.map(post => post.post_id);

    const paths = ids.map(id => ({ params: { id: id.toString() } }));

    return {
        paths: paths,
        fallback: false
    };

}