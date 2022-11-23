import React,{useState} from 'react';
import { parseCookies } from '../helpers/cookie';
import Link from 'next/link';
import BottomNav from '../components/Layout/BottomNav';
import NewPostBtn from '../components/Layout/NewPostBtn';
import CreatePostForm from '../components/posts/CreatePostForm';

export default function Home({ data }) {
    
    const id = [data];
    function extractId(arr, prop) {
        const extractedValue = arr.map(item => item[prop])
        return extractedValue;
    }

    const cookieId = extractId(id, 'user')

    function arrayId(arr) {
        const arrValue = arr.map(value => value)
        return arrValue;
    }
    const userId = arrayId(cookieId)
    console.log(userId);

/*    const id = [router.query];
    function extractId(arr, prop) {
        const extractedValue = arr.map(item => item[prop]);
        return extractedValue;
    }
    const userId = extractId(id, 'id') */

    return (
        <div>
            <div>

            </div>
            
            <BottomNav userId={userId}/>
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

    return {
        props: {
            data: data && data,
        }
    };
};

    


