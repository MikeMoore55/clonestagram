import React from 'react';
import CreatePostForm from '../components/posts/CreatePostForm';
import { parseCookies } from '../helpers/cookie';

export default function CreatePost({data}) {
  
  const id = [data];
  function extractId(arr, prop) {
      const extractedValue = arr.map(item => item[prop])
      return extractedValue;
  }

  const cookieId = extractId(id, 'user')

  const userId = cookieId.toString()
  console.log(userId);

  return (
    <div>    
      <CreatePostForm userId={userId} />
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
  
   const accounts = await SupaBaseDB
        .from("account")
        .select("*")

    const account = accounts.data

    return {
        props: {
            data: data && data,
        }
    };
};
