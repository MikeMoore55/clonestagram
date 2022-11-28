import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Footer from '../components/Layout/Footer';
import styles from '../styles/CommingSoon.module.css';

// message page [coming soon]

export default function message() {
    return (
        <div>

            <Head>
                <title>Coming Soon</title>
            </Head>

            <div className={styles.container}>
                <h2 className={styles.heading}>This feature will be coming soon 🥳!</h2>
                <button className={styles.btn}>
                    <Link href={'/home'}>
                        Back
                    </Link>
                </button>
            </div>

            {/* for a cool background effect */}
            <div className={styles.backgroundFeature}>
                1
            </div>
            
            <Footer/>
        </div>
    
    );
};