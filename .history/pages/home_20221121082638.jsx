import React from 'react';
import { parseCookies } from '../helpers/cookie';

export default function Home({ user }) {
    console.log(user)
    return (
        <div>Home</div>
    );
};

export async function getServerSideProps({ req }) {
    const cookies = parseCookies(req);

  // And then get element from cookie by name
  
  return { 
     props: {
        user: cookies,
     } 
  }
}
    


