import React from 'react';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

export default function Logout() {

    const [cookie, setCookie] = useCookies(["user"]);
    setCookie("user", 0, {
                path: "/",
                maxAge: 0,
                sameSite: true,
                });

    return (
        <div>logout</div>
    );
};
// remove cookie
// take to index page