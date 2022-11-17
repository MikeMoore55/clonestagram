import React from 'react';
import { SupaBaseDB } from '../utils/dbconnect';

export default function signin() {
  return (
    <div>signin</div>
  )
}

export const getStaticProps = async () => {
    const accounts = await SupaBaseDB
      .from("account")
      .select('*')
  
    const userAccounts = accounts.data;

    return {
        props: {
            accounts: userAccounts
        }
    };
};
