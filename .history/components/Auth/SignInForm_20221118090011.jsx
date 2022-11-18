import React,{useState} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import styles from '../../styles/SignIn.module.css';

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

            // make sure that the input email matched any of those within the db (accounts)
            var indexNr = -1;
            for(var i=0; i < allAccounts.length; i++) {
                if(allAccounts[i].email == email) {
                indexNr = i;
                break;
                }
            }

            //get user account if email exists in accounts in db
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
                    pathname: '/feed', // when successful take to the feed page
                }) 
            };
        };
    };
    
    return (
        <div className={styles.container}>

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
                placeholder="email@email.com" />
                
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

            <div className={styles.backgroundFeature}>
                1
            </div>        

            <div className={styles.signUpSection}>
                Dont have an Account?
                <span className={styles.signUpText}>
                    <Link href='/signup'>
                        Sign Up!
                    </Link>        
                </span>  
            </div>

        </div>
    );
};
