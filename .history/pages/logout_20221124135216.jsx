import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

export default function Logout() {

    const router = useRouter();

    const [cookie, setCookie] = useCookies(["user"]);
    const logout = (e) => {

        e.preventDefault();

        setCookie("user", 0, {
                path: "/",
                maxAge: 0,
                sameSite: true,
        });
        router.push("/");
    }

    

    return (
        <div>
            <div>
                <h3>We hope to see you again soon</h3>
                <p>Are you sure you want to Logout?</p>
                <div>
                    <button onClick={(e) => { logout(e) }}>Confirm</button>
                    <button>
                        <Link href={'/home'}>cancel</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};
// remove cookie
// take to index page