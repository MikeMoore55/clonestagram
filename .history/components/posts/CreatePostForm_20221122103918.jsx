import React,{useState} from 'react';
import { SupaBaseDB } from '../../utils/dbconnect';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlinePicture } from "react-icons/ai";
import styles from '../../styles/CreatePostForm.module.css';

export default function CreatePostForm({userId}) {

    const router = useRouter('');

    const id = userId; // id of user
    const [postImg, setPostImg] = useState('');
    const [postText, setPostText] = useState('');
    const [caption, setCaption] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const likes = 0; // set likes to 0 by default
    
    console.log(id);


    const handleImageUpload = async (e) => {
        e.preventDefault();
        
        let file;

        if (e.target.files) {
        file = e.target.files[0];
        }

        const res = await SupaBaseDB
            .storage.from("post-pics").upload("public/" + file?.name, file);
        
        setPostImg("https://brhqhwzkkolxuilfhwkx.supabase.co/storage/v1/object/public/post-pics/" + file.name,file)
        if (res.data) {
        console.log(res.data);
        } else if (res.error) {
        console.log(res.error['message']);
        }
    }

    const createPost = async (event) => {
        event.preventDefault();

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

    return (
        <div className={styles.container}>
            <form onSubmit={createPost} className={styles.form}>
                <h3 className={styles.heading}>
                    Whats on your mind?
                </h3>
                <input
                    className={styles.textInput}
                    type='text'
                    value={postText}
                    onChange={(e)=>setPostText(e.target.value)}
                    placeholder='say something' />
                <p className={styles.text}>or</p>
                <label for='fileInput' className={styles.label}>
                    
                    <span className={styles.imageIcon}>
                        <AiOutlinePicture/>
                    </span>
                    <input
                        id='fileInput'
                        className={styles.fileInput}
                        type='file'
                        accept="image/*"
                        onChange={(e) => { handleImageUpload(e); }}
                    />
                </label>
                <br/>
                <input
                    className={styles.captionInput}
                    type='text'
                    placeholder='Caption'
                />
                <p className={styles.errMsg}>{errMsg}</p>
                <button className={styles.submitBtn} type='submit'>Post</button>
                <Link href={'/home'}>
                    <button className={styles.cancelBtn}>Cancel</button>
                </Link>
            </form>
            <div className={styles.backgroundFeature}>
                1
            </div>
        </div>
    );
};
