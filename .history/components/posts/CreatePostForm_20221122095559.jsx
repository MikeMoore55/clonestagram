import React,{useState} from 'react';
import { SupaBaseDB } from '../../utils/dbconnect';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function CreatePostForm({userId}) {

    const router = useRouter('');

    const id = userId; // id of user
    const [postImg, setPostImg] = useState('');
    const [postText, setPostText] = useState('');
    const [caption, setCaption] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const likes = 0; // set likes to 0 by default
    
    console.log(id);


    const handleImageUpload = async(event) => {
        event.preventDefault();
        
        let file;

        if (e.target.files) {
        file = e.target.files[0];
        }

        const res = await SupaBaseDB
            .storage.from("posts").upload("public/" + file?.name, file);
        
        setAvatar("https://gwcwwvglnfdznumwgtfl.supabase.co/storage/v1/object/public/images/public/" + file.name,file)

        if (res.data) {
        console.log(res.data);
        } else if (error) {
        console.log(res.error);
        }
    }

    const createPost = async (event) => {
        event.preventDefault();

        if (postImg == '' || postText == '') {
            setErrMsg('please post something')
        }
        else {
            const res = await SupaBaseDB
                .from("posts")
                .insert([
                    {
                        user_id: id,
                        post_pic: postImg,
                        post_text: postText,
                        likes: likes,
                        caption: caption,
                    }
                ]);
            
            if (res.error) {
                setErrMsg(JSON.stringify(res.error['message']))
            } else {
                setErrMsg('');
                router.push('/home')
            }
    
        }
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
