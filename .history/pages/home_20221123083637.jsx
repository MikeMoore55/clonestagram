import React,{useState} from 'react';
import { parseCookies } from '../helpers/cookie';
import Link from 'next/link';
import BottomNav from '../components/Layout/BottomNav';
import NewPostBtn from '../components/Layout/NewPostBtn';
import CreatePostForm from '../components/posts/CreatePostForm';

export default function Home({ data }) {
    
    const userId = data.user;

    console.log(userId);

    const [isActive, setIsActive] = useState(false);
    const [msg, setMsg] = useState('new post')

    const styles = {
        appear:{
            display: isActive ? "none" : "block",
        }
    };

    return (
        <div>
            <div>

            </div>
            <div>
                <button onClick={() => { setIsActive(true) }}>
                    {msg}
                </button>
            </div>
            <div className={styles.appear}>
                <CreatePostForm userId={userId} />
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

    


