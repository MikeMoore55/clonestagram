import React from 'react';
import { parseCookies } from '../helpers/cookie';

export default function Home({ user }) {
    console.log(user)
    return (
        <div>Home</div>
    );
};

export async function getServerSideProps({ req }) {
    const data = parseCookies(req);

  // And then get element from cookie by name
    if (res) {
        if (Object.keys(data).length === 0 && data.constructor === Object) {
            res.writeHead(301, { Location: "/" });
            res.end();
        }
    }

    return {
        data: data && data,
    }
}

/* if (res) {
        if (Object.keys(data).length === 0 && data.constructor === Object) {
            res.writeHead(301, { Location: "/" });
            res.end();
        }
    }

    return {
        data: data && data,
    } */
    


