import React from 'react';
import CreatePostForm from '../components/posts/CreatePostForm';
import { parseCookies } from '../helpers/cookie';
import { SupaBaseDB } from '../utils/dbconnect';


export default function CreatePost({data, account}) {
  
  const id = [data];
  function extractId(arr, prop) {
      const extractedValue = arr.map(item => item[prop])
      return extractedValue;
  }

  const cookieId = extractId(id, 'user')

  const userId = cookieId.toString()

  console.log(userId);

  function getUserProfile(arr, id) {
        let accNr = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].account_id == id) {
        accNr = i;
        break;
        }
    }
        const profileAccount = [arr[accNr]];
        return profileAccount;

    }

    const postProfiles = getUserProfile(account, userId)
     console.log(postProfiles)
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
          account: account
        }
    };
};
