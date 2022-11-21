import React from 'react';
import styles from '../../styles/Account.module.css';

export default function AccountDisplay({ user }) {
    console.log(user)
    return (
        <div className={styles.container}>
            <div className={styles.profile}>
            <h3 className={styles.username}>{user.username}</h3>
            <img className={styles.profilePic} src={user.profile_pic}/>
            <p className={styles.dob}>{user.birth_date}</p>
            <p>Bio:</p>
            <p>{user.bio}</p>
            </div>
        </div>
    );
};
