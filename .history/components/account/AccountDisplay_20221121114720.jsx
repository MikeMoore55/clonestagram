import React from 'react';

export default function AccountDisplay({ account }) {
    console.log(account.map(user => user))
    return (
        <div>
            <h2>user account</h2>
            <div>
            {account.map((index, user) => 
                <div key={index}>
                    <p>Account</p>
                    <p>{user.username}</p>
                </div>
            )}
            </div>
        </div>
    );
};
