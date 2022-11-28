import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import Footer from '../components/Layout/Footer';
import styles from '../styles/Logout.module.css';
import Head from 'next/head';

export default function Logout() {

    const router = useRouter();

    const [cookie, setCookie] = useCookies(["user"]);
    const logout = (e) => {

        e.preventDefault();

        setCookie("user", 0, {
                path: "/",
                maxAge: 0,
                sameSite: true,
        });
        router.push("/");
    }

    

    return (
        <div className={styles.container}>
              <Head>
                <title>Logout | Clonestagram</title>
            </Head>
            <div className={styles.block}>
                <h3 className={styles.heading1}>We hope to see you again soon</h3>
                <p className={styles.text}>Are you sure you want to Logout?</p>
                <div className={styles.btnContainer}>
                    <button className={styles.confirm} onClick={(e) => { logout(e) }}>Confirm</button>
                    <button className={styles.cancel}>
                        <Link href={'/home'}>Cancel</Link>
                    </button>
                </div>
            </div>
            {/* for a cool background effect */}
            <div className={styles.backgroundFeature}>
                1
            </div>
            <Footer/>
        </div>
    );
};
// remove cookie
// take to index page