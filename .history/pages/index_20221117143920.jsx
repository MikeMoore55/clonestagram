import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      
      <div className={styles.btnContainer}>
        <button className={styles.btn}>
          <Link href='/signin'>
            Sign In
          </Link>
        </button>
      
        <button className={styles.btn}>
          <Link href='/signup'>
            Sign Up
          </Link>
        </button>
      </div>

    </div>
  );
};
