import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Account.module.css'; // use same styling from account page

// account display of user from the post


// similar layout to accountDisplay.jsx but this does not have the delete buttons or post page links
export default function UserDisplay({ user }) {
    
    return (

        <div className={styles.container}>
            <div className={styles.profile}>

                <div className={styles.img}>
                    <img className={styles.profilePic} src={user.profile_pic} />
                </div>

                <div className={styles.info}>
                    <h3 className={styles.username}>{user.username}</h3>
                    <p className={styles.dob}>{user.birth_date}</p>
                    <p className={styles.bio}>{user.bio}</p>
                </div>
            </div>

            <div className={styles.accountOptions}>
                    <button className={styles.editBtn}>
                        <Link href={'/message'}>
                            Message
                        </Link>
                    </button>
                    <button className={styles.cancelBtn}>
                        <Link href={'/home'}>
                            Back
                        </Link>
                    </button>
                </div>

            <h4 className={styles.postHeading}>
                Posts
            </h4>
        </div>

    );
};
