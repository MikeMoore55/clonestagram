import React,{useState} from 'react';
import { parseCookies } from '../helpers/cookie';
import { SupaBaseDB } from '../utils/dbconnect';
import BottomNav from '../components/Layout/BottomNav';
import DisplayPosts from '../components/posts/DisplayPosts';

export default function Home({ data, posts }) {
    
    const id = [data];
    function extractId(arr, prop) {
        const extractedValue = arr.map(item => item[prop]);
        return extractedValue;
    }

    const cookieId = extractId(id, 'user');
    const userId = cookieId.toString();

    return (

        <div>
            <Head>
                <title>Account</title>
            </Head>
            <div>
                <DisplayPosts post={posts} />
            </div>
            
            <BottomNav userId={userId} />
            
        </div>

    );
};

// get cookies to get userId
export async function getServerSideProps({ req, res }) {
    const data = parseCookies(req);

    if (res) {
        if (Object.keys(data).length === 0 && data.constructor === Object) {
            res.writeHead(301, { Location: "/signin" });
            res.end();
        }
    }

    const post = await SupaBaseDB
        .from("posts")
        .select("*")

    const posts = post.data
    
    return {
        props: {
            data: data && data,
            posts: posts,
        }
    };
};

    


