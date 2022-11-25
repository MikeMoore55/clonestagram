import React from 'react';
import styles from '../../styles/PostItem.module.css';

export default function PostItem({ posted }) { 
    
    console.log(posted)
    let postContent; 

    if (posted.post_text == '') {
        postContent = "image"
    }
    
    if (posted.post_pic == '') {
        postContent = "text"
    }
    
    return (
        <div className={styles.container}>

            <div className={styles.profileSection}>
                <img className={styles.profilePic} src={posted.user_profilepic}/>
                <h3 className={styles.username}>{posted.user_username}</h3>
            </div>

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
                                </div>}
                            
                        </div>
                    </div> :
                    <div>
                        <p className={styles.postText}>{posted.post_text}</p>
                    </div>
                }

                
                
            </div>

            <div className={styles.postInteraction}>
                <span className={styles.likes}>Likes</span>
                <span className={styles.comments}>Comments</span>
            </div>
            
        </div>
    );
};
