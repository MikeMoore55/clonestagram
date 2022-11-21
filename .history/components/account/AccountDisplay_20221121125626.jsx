import React from 'react';
import styles from '../../styles/Account.module.css';

export default function AccountDisplay({ user }) {
    console.log(user)
    return (
        <div className={styles.container}>
            <div className={styles.profile}>
                <div className={styles.img}>
                    <img className={styles.profilePic} src={user.profile_pic}/>
                </div>
                <div className={styles.info}>
                    <h3 className={styles.username}>{user.username}</h3>
                    <p className={styles.dob}>{user.birth_date}</p>
                    <p className={styles.bioHeading}>Bio:</p>
                    <p className={styles.bio}>{user.bio}</p>
                </div>
            </div>

        </div>
    );
};
