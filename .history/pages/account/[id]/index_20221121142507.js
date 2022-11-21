import React from 'react';
import { SupaBaseDB } from '../../../utils/dbconnect';
import AccountDisplay from '../../../components/account/AccountDisplay';
import BottomNav from '../../../components/Layout/BottomNav'

export default function Account({ account }) {

    return (
        <div>
            {
                account.map(user =>
                    <AccountDisplay key={user.account_id} user={user} />

                )
            }
        </div>
    );
};

export const getStaticProps = async (context) => {

    const res = await SupaBaseDB
        .from("account")
        .select('*')
        .eq('account_id', context.params.id)
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

    const ids = account.map(account => account.account_id);

    const paths = ids.map(id => ({ params: { id: id.toString() } }));

    return {
        paths: paths,
        fallback: false
    };

};