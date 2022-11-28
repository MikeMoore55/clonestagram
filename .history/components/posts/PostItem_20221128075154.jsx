import React from 'react';
import Link from 'next/link';
import Router,{useRouter} from 'next/router';
import {SupaBaseDB} from '../../utils/dbconnect'
import styles from '../../styles/PostItem.module.css';

export default function PostItem({ posted }) { 

    // to make image related posts look different to text related post
    let postContent;  // post type
    if (posted.post_text == '') {
        postContent = "image"
    }
    if (posted.post_pic == '') {
        postContent = "text"
    }

    const addedLike = posted.likes +1;

    const addLike = async () => {
        const likepost = await SupaBaseDB
            .from('posts')
            .update({
                likes: addedLike    
            })
            .eq('post_id', posted.post_id);
        
        if (likepost.error) {
            console.log(JSON.stringify(likepost.error["message"]))
        }
        else {
            console.log("post has been liked")
        }
    }
    
    return (
        <div className={styles.container}>

            <Link href={`/user/${posted.user_id}`}>
            <div className={styles.profileSection}>
                    <img className={styles.profilePic} src={posted.user_profilepic}/>
                    <h3 className={styles.username}>{posted.user_username}</h3>
            </div>
            </Link>

            <div className={styles.postContent}>
                {/* the post can either be a text format or just a plain image  */}
                {postContent == "image" ?
                    <div>
                        <img className={styles.postImg} src={posted.post_pic} />
                
                        <div className={styles.captionContainer}>
                            {posted.caption !== '' ?
                                <div>
                                    <p className={styles.captionUsername}>{posted.user_username}</p>
                                    <p className={styles.caption}>{posted.caption}</p>
                                </div> :
                                <div>
                                    <p className={styles.blank}>1</p>
                                </div>}
                            
                        </div>
                    </div> :
                    <div>
                        <p className={styles.postText}>{posted.post_text}</p>
                    </div>
                }

                
                
            </div>

            <div className={styles.postInteraction}>
                <span className={styles.likes} onClick={() => { addLike(posted.post_Id) }}>Likes {posted.likes}</span>
                <span className={styles.comments}>Comments</span>
            </div>
            
        </div>
    );
};
