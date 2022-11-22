import React from 'react';
import CreatePostForm from '../components/posts/CreatePostForm';

export default function CreatePost() {
  return (
    <div>
      <br />
      <br/>
      <br/>
      <br/>
      <br/>
    
      <CreatePostForm />
    </div>
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
