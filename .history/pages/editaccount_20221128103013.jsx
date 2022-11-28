import React from 'react';
import { SupaBaseDB } from '../utils/dbconnect';
import { parseCookies } from '../helpers/cookie';
import EditAccountForm from '../components/account/EditAccount';
import Head from 'next/head';


export default function EditAccount({ data, accounts }) {

  // user id from cookie
  const id = [data];

  function extractId(arr, prop) {
    const extractedValue = arr.map(item => item[prop])
    return extractedValue;
  };

  const cookieId = extractId(id, 'user');
  const userId = cookieId.toString();

  
  /*
    --- did the following here and not in "getServerSideProps" because i don't know how 
    to get "extracted value" from cookie within function --- 
  */
  
  // get account where id = id 
  function getUserProfile(arr, id) {
        let accNr = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].account_id == id) {
        accNr = i;
        break;
      };
    };

    const profileAccount = [arr[accNr]];
    return profileAccount;
  
  };

  const profiles = getUserProfile(accounts, userId);

  return (
    <div>

      <EditAccountForm account={profiles} />
    
    </div>
  );
};


export async function getServerSideProps({ req, res }) {
  const data = parseCookies(req);

  if (res) {
    if (Object.keys(data).length === 0 && data.constructor === Object) {
        res.writeHead(301, { Location: "/signin" });
        res.end();
    };
  };

  const account = await SupaBaseDB
    .from("account")
    .select("*");

  const accounts = account.data;
    
    return {
        props: {
            data: data && data,
            accounts: accounts,
        }
    };
};
