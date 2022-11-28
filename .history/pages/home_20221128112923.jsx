import React,{useState} from 'react';
import { parseCookies } from '../helpers/cookie';
import { SupaBaseDB } from '../utils/dbconnect';
import Head from 'next/head';
import BottomNav from '../components/Layout/BottomNav';
import DisplayPosts from '../components/posts/DisplayPosts';

// home page / feed page

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
                <title>Home | Clonestagram</title>
            </Head>
            <div>
                <DisplayPosts post={posts} />
            </div>
            
            <BottomNav userId={userId} />
            
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

    


