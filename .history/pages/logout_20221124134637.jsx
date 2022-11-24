import React from 'react';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

export default function Logout() {

    const [cookie, setCookie] = useCookies(["user"]);

    return (
        <div>logout</div>
    );
};
// remove cookie
// take to index page