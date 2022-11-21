import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Index.module.css';
import Link from 'next/link';

export default function Index() {
  return (
    <div className={styles.container}>
      
      <div className={styles.greetingContainer}>
        <p>Welcome to</p>
        <h3>Clonestagram</h3>
        <div className={styles.btnsContainer}>
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

      <div className={styles.backgroundFeature}>
        1
      </div>
      
      <div className={styles.bottomContainer}>
        <p>@Clonestagram2022</p>
      </div>
    </div>
  );
};
