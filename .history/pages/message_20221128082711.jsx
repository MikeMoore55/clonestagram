import React from 'react';
import Link from 'next/link';
import styles from '../styles/CommingSoon.module.css';

export default function message() {
  return (
      <div className={styles.container}>
            <h2>This feature will be coming soon!</h2>
          <button>
              <Link href={'/home'}>
                  Back
              </Link>
            </button>
    </div>
  )
}