import React from 'react';
import { SupaBaseDB } from '../../utils/dbconnect';

export default function UserPostItem({ post }) {
    const delPost = async () => {
       const posts = await SupaBaseDB
            .from("posts")
            .delete()
            .eq("user_id", userId);
    }

    const EditPost = () => {
        
    }


  return (
    <div>1</div>
  )
}