import React from 'react';
import Head from 'next/head';
import SignUpForm from '../components/Auth/SignUpForm';

export default function signup() {
    return (

        <div>
              <Head>
                <title>SignUp | Clonestagram</title>
            </Head> 
            <SignUpForm/>
        </div>
    
    );
};
