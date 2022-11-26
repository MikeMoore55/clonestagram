import React from 'react'
import { SupaBaseDB } from '../../../utils/dbconnect';
import styles from '../../../styles/Post.module.css';

export default function Posts({ posts }) {

    let postContent;  // post type
    let posted;
    posts.map(post => posted = post);

    console.log(posted)

    if (posted.post_text == '') {
        postContent = "image"
    }
    if (posted.post_pic == '') {
        postContent = "text"
    }

    return (

        <div className={styles.container}>
            <div className={styles.postContent}>
                {/* the post can either be a text format or just a plain image  */}
                {postContent == "image" ?
                    <div>
                        <img className={styles.postImg} src={posted.post_pic} />
                    </div> :
                    <div>
                        <p className={styles.postText}>{posted.post_text}</p>
                    </div>
                }
                <div className={styles.postActions}>
                    <button className={styles.delBtn} onClick={delPost(posted.post_id)}>Delete</button>
                    <button className={styles.editBtn}>Edit</button>
                </div>
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