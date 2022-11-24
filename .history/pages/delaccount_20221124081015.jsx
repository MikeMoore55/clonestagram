import React from 'react';
import Link from 'next/link';
import Router,{useRouter} from 'next/router';
import { SupaBaseDB } from '../utils/dbconnect';
import {parseCookies} from '../helpers/cookie'

export default function DelAccount( { data } ) {
    const router = useRouter();
    const id = [data];
    function extractId(arr, prop) {
        const extractedValue = arr.map(item => item[prop]);
        return extractedValue;
    }
    
    const cookieId = extractId(id, 'user');
    const userId = cookieId.toString();
  
    console.log(userId);

    const delAccount = async () => {
        
        const account = await SupaBaseDB
            .from("account")
            .delete()
            .eq("account_id", userId);
        
        const posts = await SupaBaseDB
            .from("posts")
            .delete()
        .eq("user_id", userId)
        
        if (account.error) {
            console.log(account.error['message'])
        }
        else {
            console.log('account deleted successfully')
            router
                .push({
                        pathname: '/', // when successful take to the feed page
                    })
        }
    }

    return (
        <div>
            <h3>Are you sure you want to delete you Clonestagram Account?</h3>
            <button onClick={() => delAccount()}>Confirm</button>
            <button><Link href={'/home'}>Cancel</Link></button>
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
