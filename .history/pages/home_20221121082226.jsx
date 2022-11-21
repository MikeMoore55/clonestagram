import React from 'react';
import { parseCookies } from '../helpers/cookie';

export default function Home({ user }) {
    console.log(user)
    return (
        <div>Home</div>
    );
};

export async function getServerSideProps({ req, res }) {
    const data = parseCookies(req);

    if (res) {
        if (Object.keys(data).length === 0 && data.constructor === Object) {
            res.writeHead(301, { Location: "/" });
            res.end();
        }
    }

    return {
        props:{
            user: data && data,
        }
    }
}
    


