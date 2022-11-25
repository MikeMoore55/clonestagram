import React,{useState} from 'react';
import { SupaBaseDB } from '../../utils/dbconnect';

export default function UserPostItem({ post }) {
    const delPost = async (id) => {
       const posts = await SupaBaseDB
            .from("posts")
            .delete()
            .eq("post_id", id);
        
        
    }

    const EditPost = () => {
        
    }


  return (
    <div>1</div>
  )
}