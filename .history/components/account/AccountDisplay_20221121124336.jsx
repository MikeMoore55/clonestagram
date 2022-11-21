import React from 'react';
import styles from '../../styles/Account.module.css';

export default function AccountDisplay({ user }) {
    console.log(user)
    return (
        <div >
            <h2>{user.username}</h2>
            <img src={user.profile_pic}/>
            
        </div>
    );
};
