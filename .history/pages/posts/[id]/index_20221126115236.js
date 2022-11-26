import React, { useState } from 'react'
import { SupaBaseDB } from '../../../utils/dbconnect';
import Router, { useRouter } from 'next/router';
import styles from '../../../styles/Post.module.css';

export default function Posts({ posts }) {

    const router = useRouter();
    let posted;
    posts.map(post => posted = post);

    console.log(posted)

    let postContent;  // post type
    if (posted.post_text == '') {
        postContent = "image"
    }
    if (posted.post_pic == '') {
        postContent = "text"
    }

    const [delMsg, setDelMsg] = useState('')
    const delPost = async (e) => {
        e.preventDefault();
        const posts = await SupaBaseDB
            .from("posts")
            .delete()
            .eq("post_id", posted.post_id);


        const imageFileName = posted.filename;
        const bucket = await supabase // bucket is the name for a "storage folder" in supabase
            .storage
            .from('post-pics')
            .remove([`public/${imageFileName}`])


        if (posts.error) {
            setDelMsg(JSON.stringify(posts.error['message']));
        }
        else if (bucket.error) {
            setDelMsg(JSON.stringify(bucket.error['message']))
        }
        else {
            setDelMsg("posted deleted successfully");
            router.push(`/account/${posted.user_id}`)
        }
    }

    console.log(delMsg)

    /* const EditPost = () => {
        
    } */

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
                    <button className={styles.delBtn} onClick={(e) => { delPost(e) }}>Delete</button>
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