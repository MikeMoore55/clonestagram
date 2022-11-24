import React from 'react';
import { SupaBaseDB } from '../utils/dbconnect';
import { parseCookies } from '../helpers/cookie';
import EditAccountForm from '../components/account/EditAccount';

export default function EditAccount() {
  return (
    <div>
        <EditAccountForm/>
    </div>
  )
}

export async function getServerSideProps({ req, res }) {
    const data = parseCookies(req);

    if (res) {
        if (Object.keys(data).length === 0 && data.constructor === Object) {
            res.writeHead(301, { Location: "/signin" });
            res.end();
        }
    }

    const account = await SupaBaseDB
        .from("account")
        .select("*")

    const accounts = account.data
    
    return {
        props: {
            data: data && data,
            accounts: accounts,
        }
    };
};
