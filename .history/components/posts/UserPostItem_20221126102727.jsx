import React,{useState} from 'react';
import { SupaBaseDB } from '../../utils/dbconnect';
import Link from 'next/link';
import styles from '../../styles/UserPostItem.module.css';

export default function UserPostItem({ posted }) {

    let postContent;  // post type
    if (posted.post_text == '') {
        postContent = "image"
    }
    if (posted.post_pic == '') {
        postContent = "text"
    }
    
    const [delMsg, setDelMsg] = useState('')

    const delPost = async (id) => {
       const posts = await SupaBaseDB
            .from("posts")
            .delete()
            .eq("post_id", id);
        
        if (posts.error) {
            setDelMsg(JSON.stringify(posts.error['message']));
        }
        else {
            setDelMsg("posted deleted successfully");
        }
    }

    /* const EditPost = () => {
        
    } */


    return (
        <div className={styles.container}>
            <Link href={'/posts[id]'} as={`/posts/${posted.post_id}`}>
                <div className={styles.postContent}>
                    {/* the post can either be a text format or just a plain image  */}
                    {postContent == "image" ?
                        <div>
                            <img className={styles.postImg} src={posted.post_pic} />
                            <div className={styles.postActions}>
                                <button className={styles.delBtn} onClick={delPost(posted.post_id)}>Delete</button>
                                <button className={styles.editBtn}>Edit</button>
                            </div>
                        </div> :
                        <div>
                            <p className={styles.postText}>{posted.post_text}</p>
                            <div className={styles.postActions}>
                                <button className={styles.delBtn}>Delete</button>
                                <button className={styles.editBtn}>Edit</button>
                            </div>
                        </div>
                    }
                </div>
            </Link>
        </div>
    );
};