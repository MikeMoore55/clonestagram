import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { SupaBaseDB } from '../../utils/dbconnect';
import styles from '../../styles/SignUp.module.css'



export default function SignUpForm() {

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');

    const [errMsg, setErrMsg] = useState('');

    const createAccount = async (event) => {
        event.preventDefault();

        //error handling
        if (email == '') {
            setErrMsg('fields cannot be blank');
        }

        if (password == '') {
            setErrMsg('fields cannot be blank');
        }

        if (confirmPassword == '') {
            setErrMsg('fields cannot be blank');
        }



        if (confirmPassword !== password) {
            setErrMsg('passwords dont match, try again');
            setPassword('');
            setConfirmPassword('');
        }
        else {
            const res = await SupaBaseDB
                .from("account")
                .insert([
                    {
                        email: email,
                        password: password,
                        username: username,
                    }
                ]);
            if (res.error) {
                setErrMsg(JSON.stringify(res.error));
            }
            else {
                setErrMsg('');
                router.push("/signin");
            };
        };
    };

    return (
        <div className={styles.container}>
          <form onSubmit={createAccount} className={styles.signUpForm}>
                <h2 className={styles.heading}>
                  Sign Up
                </h2>
                <label className={styles.label}>
                    Email:
                </label>
                <input type='text' className={styles.input}
                    value={email} onChange={(e) => setEmail(e.target.value)} placeholder='example@email.com'/>
                <label className={styles.label}>
                  Username:
                </label>
                <input type='text' className={styles.input}
                value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username'/>
                <label className={styles.label}>
                    Password:
                </label>
                <input type='password' className={styles.input}
                value={password} onChange={(e) => setPassword(e.target.value)} placeholder='******'/>
                <label className={styles.label}>
                    Confirm Password:
                </label>
                <input type='password' className={styles.input}
                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='******'/>
                <p className={styles.errMsg}>
                    {errMsg}
                </p>
                <button type='submit' className={styles.btn}>
                    Create
                </button>
            </form>
            
            <div className={styles.signInSection}>
                Have an Account?
                <span className={styles.signInText}>
                    <Link href={'/signin'}>
                        Sign In!
                    </Link>
                </span>  
            </div>
        </div>
    );
};
