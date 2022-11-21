import React from 'react';
import { parseCookies } from '../helpers/cookie';

export default function Home({ data }) {
    
    const userId = [data];
    console.log(userId);

    return (
        <div>
            
            <br />
            <br />
            <br />
            <br />
            {userId}</div>
    );
};


// get cookies to get userId
export async function getServerSideProps({ req, res }) {
    const data = parseCookies(req);

    if (res) {
        if (Object.keys(data).length === 0 && data.constructor === Object) {
            res.writeHead(301, { Location: "/" });
            res.end();
        }
    }

    return {
        props: {
            data: data && data,
        }
    };
};

    


