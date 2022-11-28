import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Account.module.css'; // use same styling from account page


export default function UserDisplay({user}) {
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
                    <button className={styles.msgBtn}>
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

/* import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Account.module.css';

export default function AccountDisplay({ user }) {
    return (
        <div className={styles.container}>
            <div className={styles.profile}>

                <div className={styles.img}>
                    <img className={styles.profilePic} src={user.profile_pic}/>
                </div>

                <div className={styles.info}>
                    <h3 className={styles.username}>{user.username}</h3>
                    <p className={styles.dob}>{user.birth_date}</p>
                    <p className={styles.bio}>{user.bio}</p>
                </div>
            </div> 
                <div className={styles.accountOptions}>
                    <button className={styles.editBtn}>
                        <Link href={'/editaccount'}>
                            Edit Account
                        </Link>
                    </button>
                    <button className={styles.delBtn}>
                        <Link href={'/delaccount'}>
                            Delete Account
                        </Link>
                    </button>
                </div>
            

            <h4 className={styles.postHeading}>
                Posts
            </h4>

        </div>
    );
};
 */