import React from 'react';
import { parseCookies } from '../helpers/cookie';

export default function Home({ data }) {
    console.log(data)
    return (
        <div>Home</div>
    );
};

export async function getServerSideProps({ req, res }) {
    const data = parseCookies(req);

  // And then get element from cookie by name
    if (res) {
        if (Object.keys(data).length === 0 && data.constructor === Object) {
            res.writeHead(301, { Location: "/" });
            res.end();
        }
    }

    return {
        props: { data: data && data, }
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
    


