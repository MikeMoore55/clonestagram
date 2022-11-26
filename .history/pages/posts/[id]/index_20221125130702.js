import React from 'react'

export default function Posts() {
    return (
        <div></div>
    );
};


export const getStaticProps = async (context) => {

    const accounts = await SupaBaseDB
        .from("account")
        .select('*')
        .eq('account_id', context.params.id)
    const account = accounts.data;

    const posts = await SupaBaseDB
        .from("posts")
        .select('*')
        .eq('user_id', context.params.id)

    const userPosts = posts.data

    return {
        props: {
            account: account,
            posts: userPosts,
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

}