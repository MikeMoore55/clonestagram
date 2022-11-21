import React from 'react';

function Account() {
    return (
        <div>Account</div>
    );
};

export default Account;

export const getStaticProps = async (context) => {

    const res = await SupaBaseDB
        .from("account")
        .select('*')
        .eq('id', context.params.id)
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