import React from 'react';
import Link from 'next/link';
import styles from '../styles/CommingSoon.module.css';

export default function message() {
  return (
      <div className={styles.container}>
            <h2 className={styles.heading}>This feature will be coming soon!</h2>
          <button className={styles.btn}>
              <Link href={'/home'}>
                  Back
              </Link>
            </button>
    </div>
  )
}