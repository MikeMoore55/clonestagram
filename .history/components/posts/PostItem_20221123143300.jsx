import React from 'react';
import styles from '../../styles/PostItem.module.css';

export default function PostItem({ posted }) {

    
    function getUserProfile(arr, id) {
        let accNr = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].account_id == id) {
        accNr = i;
        break;
        }
    }
        const profileAccount = [arr[accNr]];
        return profileAccount;

    }

    const postProfiles = getUserProfile(account, posted.user_id)


    return (
        <div className={styles.container}>
            <div className={styles.profileSection}>
                {postProfiles.map(profile => {
                    <div key={profile.account_id}>
                        <h4>{profile.username}</h4>
                    </div>
                })}
            </div>
            <div className={styles.postContent}>
                {/* the post can either be a text format or just a plain image  */}
                <img className={styles.postImg} src={posted.post_pic} />
                
                <p className={styles.caption}>{posted.caption}</p>
                
                <p className={styles.postText}>{posted.post_text}</p>                
            </div>
            <div className={styles.postInteraction}>
                <span className={styles.likes}>Likes</span>
                <span className={styles.comments}>Comments</span>
            </div>
        </div>
    );
};
