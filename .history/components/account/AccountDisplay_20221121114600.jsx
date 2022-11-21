import React from 'react';

export default function AccountDisplay({ account }) {
    
    return (
        <div>
            {account.map((index, user) => {
                <div key={index}>
                    <p>Account</p>
                    <p>{user.username}</p>
                </div>
            })}
        </div>
    );
};
