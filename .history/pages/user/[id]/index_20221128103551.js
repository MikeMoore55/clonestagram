import React from 'react';
import { SupaBaseDB } from '../../../utils/dbconnect';
import Head from 'next/head';
import UserDisplay from '../../../components/users/UserDisplay';
import BottomNav from '../../../components/Layout/BottomNav';
import UsersPostsList from '../../../components/users/UsersPostList';

export default function Account({ account, posts }) {


    return (
        <div>
            <Head>
                <title>User | Clonestagram</title>
            </Head>
            {
                account.map(user =>
                    <div key={user.account_id}>
                        <UserDisplay user={user} />
                        <UsersPostsList posts={posts} />
                        <BottomNav userId={user.account_id} />
                    </div>
                )
            }
        </div>
    );
};

export const getStaticProps = async (context) => {

    // get user account
    const accounts = await SupaBaseDB
        .from("account")
        .select('*')
        .eq('account_id', context.params.id)
    const account = accounts.data;

    // get user posts
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

};