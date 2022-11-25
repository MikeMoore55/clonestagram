import React,{useState} from 'react';
import { SupaBaseDB } from '../../utils/dbconnect';
import styles from '../../styles/UserPostItem.module.css';

export default function UserPostItem({ posted }) {

    const [delMsg, setDelMsg] = useState('')
    console.log(posted)

    const delPost = async (id) => {
       const posts = await SupaBaseDB
            .from("posts")
            .delete()
            .eq("post_id", id);
        
        if (posts.error) {
            setDelMsg(JSON.stringify(posts.error['message']));
        }
        else {
            setDelMsg("posted deleted successfully");
        }
    }

    const EditPost = () => {
        
    }


    return (
        <div>
            <p>{posted.post_id}</p>
        </div>
    );
};