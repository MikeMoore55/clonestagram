import React from 'react';
import Link from 'next/link';
import Router,{useRouter} from 'next/router';
import { SupaBaseDB } from '../utils/dbconnect';
import { parseCookies } from '../helpers/cookie';
import styles from '../styles/DelAccount.module.css';
import Footer from '../components/Layout/Footer'

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
        
        // delete the account of user
        const account = await SupaBaseDB
            .from("account")
            .delete()
            .eq("account_id", userId);
        
        // delete all the posts of user too
        const posts = await SupaBaseDB
            .from("posts")
            .delete()
            .eq("user_id", userId);
        
        if (account.error) {
            console.log(account.error['message']);
        }
        else if (posts.error) {
            console.log(posts.error["message"]);
        }
        else {
            console.log('account deleted successfully');
            router
                .push({
                    pathname: '/', // when successful take to the feed page
                });
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.block}>
                <h3 className={styles.heading1}>You Are Leaving Us So Soon 😢 ...</h3>
                <h4 className={styles.heading2}>Are you sure you want to delete you Clonestagram Account?</h4>
                <div className={styles.btnContainer}>
                    <button className={styles.confirm} onClick={() => delAccount()}>Confirm</button>
                    <button className={styles.cancel}><Link href={'/home'}>Cancel</Link></button>
                </div>
            </div>
            {/* for a cool background effect */}
            <div className={styles.backgroundFeature}>
                1
            </div>
            <Footer/>
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
