import React,{useState} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import styles from '../../styles/SignIn.module.css'


export default function SignInForm({accounts}) {

    const allAccounts = accounts;

    const router = useRouter();  

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errmsg, setErrmsg] = useState('');
    
    const [cookie, setCookie] = useCookies(["user"]);

    const handleSignIn = async (event) => {

        if (email === '' && password === '') {
            event.preventDefault();
            setErrmsg('Fields cannot be left blank');
        }

        else {
            event.preventDefault();


            // make sure that the input email matched any of those in the db
            var indexNr = -1;
            for(var i=0; i < allAccounts.length; i++) {
                if(allAccounts[i].email == email) {
                indexNr = i;
                break;
                }
            }


            //get account based if email account exists
            const account = allAccounts[indexNr] 

            if (password !== account.password) {
                setErrmsg('password is incorrect, try again');
            }
            else {
                //have the user id set as cookie to be used across the application
                setCookie("user", account.id, {
                path: "/",
                maxAge: 1800,
                sameSite: true,
                });
                setErrmsg('');
                router
                .push({
                    pathname: '/feed',
                }) 
            };
        };
    };
    
    return (
        <div>
            <form onSubmit={handleSignIn} className={styles.signInForm}>
                <h2 className={styles.heading}>
                    Sign In
                </h2>
                <label className={styles.label}>
                    Email
                </label>
                <input 
                className={styles.input} 
                type='email' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="email@email.com"/>
                <label className={styles.label}>
                    Password
                </label>
                <input 
                className={styles.input} 
                type='password' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="*******" />
                <p className={styles.errMsg}>
                    {errmsg}
                </p>
                <button className={styles.btn} type='submit'>
                    Sign In
                </button>
            </form>
            <div className={styles.signUpArea}>
                Dont have an Account?
                <span className={styles.signUpText}><Link href={'/auth/createaccount'}>
                    Create one!
                </Link></span>  
            </div>
        </div>
    );
};
