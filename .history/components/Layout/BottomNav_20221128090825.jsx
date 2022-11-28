import React from 'react';
import Link from 'next/link';
import NewPostBtn from './NewPostBtn';
import { AiFillHome } from "react-icons/ai"; // home icon
import { AiOutlineTeam } from "react-icons/ai"; // profiles icon
import { AiOutlineUser } from "react-icons/ai"; // personal profile icon
import { BsFillDoorOpenFill } from "react-icons/bs"; // log put icon
import styles from "../../styles/BottomNav.module.css"

// we parse id here to be used for the routing
export default function BottomNav({userId}) {
    
    const id = userId;

    return (
        <nav className={styles.navContainer}>
                
            <div className={styles.navLink}>
                <Link href={'/home'}>
                    <img className={styles.icon} src={"https://brhqhwzkkolxuilfhwkx.supabase.co/storage/v1/object/public/app-icons/iconmonstr-home-7-240.png?t=2022-11-27T07%3A24%3A10.944Z"}/>
                </Link>
            </div>
                
            <div className={styles.navLink}>
                <Link href={'/search'}>
                    <img className={styles.icon} src={"https://brhqhwzkkolxuilfhwkx.supabase.co/storage/v1/object/public/app-icons/iconmonstr-magnifier-lined-240.png?t=2022-11-27T07%3A30%3A45.656Z"} />
                </Link>
            </div>
            <div className={styles.navLink}>
                <NewPostBtn />
            </div>
                
            <div className={styles.navLink}>
                <Link href={'/account/[id]'} as={`/account/${id}`}>
                    <img className={styles.icon} src={"https://brhqhwzkkolxuilfhwkx.supabase.co/storage/v1/object/public/app-icons/iconmonstr-user-6-240.png?t=2022-11-27T07%3A27%3A44.970Z"}/>
                </Link>
            </div>
                
            <div className={styles.navLink}>
                <Link href={'/logout'}>
                    <img className={styles.icon} src={"https://brhqhwzkkolxuilfhwkx.supabase.co/storage/v1/object/public/app-icons/iconmonstr-log-out-2-240.png?t=2022-11-27T07%3A37%3A04.063Z"}/>
                </Link>
            </div>
                
        </nav>
    );
};

