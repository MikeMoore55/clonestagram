import React from 'react';
import { SupaBaseDB } from '../../../utils/dbconnect';

export default function Account() {
    return (
        <div>Account</div>
    );
};

export const getStaticProps = async (context) => {

    const res = await SupaBaseDB
        .from("account")
        .select('*')
        .eq('account_id', context.params.userId)
    const account = res.data;

    return {
        props: {
            account: account
        }
    };

};


export const getStaticPaths = async () => {

    const res = await SupaBaseDB
        .from("account")
        .select('*')
    const account = res.data;

    const ids = account.map(account => account.id);

    const paths = ids.map(id => ({ params: { id: id.toString() } }));

    return {
        paths: paths,
        fallback: false
    };

};