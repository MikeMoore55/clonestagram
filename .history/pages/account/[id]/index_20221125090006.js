import React from 'react';
import { SupaBaseDB } from '../../../utils/dbconnect';
import AccountDisplay from '../../../components/account/AccountDisplay';
import BottomNav from '../../../components/Layout/BottomNav';
import UserPostsList from '../../../components/posts/UserPostsList';

export default function Account({ account, posts }) {

    console.log(posts);

    return (
        <div>
            {
                account.map(user =>
                    <div key={user.account_id}>
                        <AccountDisplay user={user} />
                        <UserPostsList user={user} posts={posts}
                        <BottomNav userId={user.account_id} />
                    </div>
                )
            }
        </div>
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

};