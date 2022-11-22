import React,{useState} from 'react';
import { SupaBaseDB } from '../../utils/dbconnect';
import Link from 'next/link';

export default function CreatePostForm() {

    const [postImg, setPostImg] = useState('');
    const [postText, setPostText] = useState('');
    const [caption, setCaption] = useState('');
    const likes = 0; // set likes to 0 by default
    

    const handleImageUpload = () => {
        
    }

    const handlePostUpload = () => {

    }

    return (
        <div>
            <form>
                <label>Whats on your mind?</label>
                <input type='text' placeholder='say something' />
                <p>or</p>
                <label>Post Something?</label>
                <input type='file' />
                <label>Caption</label>
                <input type='text' placeholder='How was your day?' />
                <button type='submit'>Post</button>
                <Link href={'/home'}>
                    <button>cancel</button>
                </Link>
            </form>
        </div>
    );
};
