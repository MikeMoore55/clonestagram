import React from 'react';

export default function AccountDisplay({ user }) {
    console.log(user)
    return (
        <div>
            <h2>{user.username}</h2>
            
        </div>
    );
};
