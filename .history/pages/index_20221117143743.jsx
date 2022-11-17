import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      
      <div>
        <button>
          <Link href='/signup'>
            sign up
          </Link>
        </button>
      </div>

      <div>
        <button>
          <Link href='/signup'>
            sign up
          </Link>
        </button>
      </div>
      
    </div>
  );
};
