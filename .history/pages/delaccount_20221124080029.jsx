import React from 'react';
import Link from 'next/link';
import Router,{useRouter} from 'next/router';
import { SupaBaseDB } from '../utils/dbconnect';

export default function DelAccount() {
    const id = [data];
    function extractId(arr, prop) {
        const extractedValue = arr.map(item => item[prop]);
        return extractedValue;
    }
    
    const cookieId = extractId(id, 'user');
    const userId = cookieId.toString();
  
    console.log(userId);

    const delAccount = async () => {
        const { error } = await SupaBaseDB
            .from("account")
            .delete()
            .eq("account_id", userId);
        
        if (error) {
            console.log(error['message'])
        }
        else{}
    }

    /* const { error } = await supabase
  .from('countries')
  .delete()
  .eq('id', 1) */


    return (
        <div>
            <h3>Are you sure you want to delete you Clonestagram Account?</h3>
            <button>Confirm</button>
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
