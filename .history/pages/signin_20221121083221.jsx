import React from 'react';
import { SupaBaseDB } from '../utils/dbconnect';
import SignInForm from '../components/Auth/SignInForm';

export default function signin({ accounts }) {
  
  console.log(accounts)
  return (
    <div>
      <SignInForm accounts={accounts} />
    </div>
  );
};

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
