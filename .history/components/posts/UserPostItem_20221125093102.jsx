import React,{useState} from 'react';
import { SupaBaseDB } from '../../utils/dbconnect';
import styles from '../../styles/UserPostItem.module.css';

export default function UserPostItem({ post }) {

    const [delMsg, setDelMsg] = useState('')

    const delPost = async (id) => {
       const posts = await SupaBaseDB
            .from("posts")
            .delete()
            .eq("post_id", id);
        
        if (posts.error) {
            setDelMsg(JSON.stringify(posts.error['message']));
        }
        else {
            setDelMsg("post deleted successfully");
        }
    }

    const EditPost = () => {
        
    }


  return (
      
    <div>
          
    </div>
  )
}