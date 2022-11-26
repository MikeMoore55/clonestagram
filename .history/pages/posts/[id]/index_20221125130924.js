import React from 'react'

export default function Posts({ posts }) {
    return (
        <div></div>
    );
};


export const getStaticProps = async (context) => {

    const posts = await SupaBaseDB
        .from("posts")
        .select('*')
        .eq('post_id', context.params.id)
    const post = posts.data;

    return {
        props: {
            posts: post,
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