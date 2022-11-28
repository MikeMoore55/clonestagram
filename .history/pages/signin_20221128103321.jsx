import React from 'react';
import { SupaBaseDB } from '../utils/dbconnect';
import SignInForm from '../components/Auth/SignInForm';

export default function signin({ accounts }) {
  
  return (

    <div>
        <Head>
          <title>Account</title>
        </Head>
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
