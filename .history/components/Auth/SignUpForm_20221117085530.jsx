import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { SupaBaseDB } from '../../utils/dbconnect';


export default function SignUpForm() {

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const [birth_date, setDob] = useState('');

    const [errMsg, setErrMsg] = useState('');


/* user will use this later, not in sign up 
    // function to upload profile image
    const handleUpload = async (e) => {

        e.preventDefault();
        let file;

        if (e.target.files) {
        file = e.target.files[0];
        }

        const res = await SupaBaseDB
            .storage.from("images").upload("public/" + file?.name, file);
        
        setAvatar("https://gwcwwvglnfdznumwgtfl.supabase.co/storage/v1/object/public/images/public/" + file.name,file)

        if (res.data) {
        console.log(res.data);
        } else if (error) {
        console.log(res.error);
        }
    }; */


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

        if (birth_date == '') {
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
                        birth_date: birth_date,
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
        <div>
          <form onSubmit={createAccount}>
                <h2>
                  Create Your Profile
                </h2>
                <label>
                    Email:
                </label>
                <input type='text' 
                    value={email} onChange={(e) => setEmail(e.target.value)} />
               
                <label className={styles.label}>
                  Username:
                </label>
                <input type='text' 
                value={username} onChange={(e) => setUsername(e.target.value)} />
                <label>
                    Date Of Birth:
                </label>
                <input type='date' 
                    value={birth_date} onChange={(e) => setDob(e.target.value)} />
                <label className={styles.label}>
                    Password:
                </label>
                <input type='text' 
                value={password} onChange={(e) => setPassword(e.target.value)} />
                <label>
                    Confirm Password:
                </label>
                <input type='text' 
                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <p>
                    {errMsg}
                </p>
                <button type='submit'>
                    Create
                </button>
            </form>
            
            <div className={styles.signInArea}>
                Have an Account?
                <span>
                    <Link href={'/signin'}>
                        Sign In!
                    </Link>
                </span>  
            </div>
        </div>
    );
};
