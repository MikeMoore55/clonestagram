import React from 'react';
import Link from 'next/link';
import {SupaBaseDB} from '../utils/dbconnect'

export default function DelDccount() {
    return (
        <div>
            <h3>Are you sure you want to delete you Clonestagram Account?</h3>
            <
        </div>
    );
};

export async function getServerSideProps({ req, res }) {
    const data = parseCookies(req);

    if (res) {
        if (Object.keys(data).length === 0 && data.constructor === Object) {
            res.writeHead(301, { Location: "/signin" });
            res.end();
        }
    }
    
    return {
        props: {
            data: data && data,
        }
    };
};
// del from supabase
// take to index page
