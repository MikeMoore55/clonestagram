import React from 'react';

export default function DelDccount() {
    return (
        <div>delaccount</div>
    );
};

export async function getServerSideProps({ req, res }) {
    const data = parseCookies(req);

    if (res) {
        if (Object.keys(data).length === 0 && data.constructor === Object) {
            res.writeHead(301, { Location: "/signin" });
            res.end();
        }
    }
    
    return {
        props: {
            data: data && data,
        }
    };
};
// del from supabase
// take to index page
