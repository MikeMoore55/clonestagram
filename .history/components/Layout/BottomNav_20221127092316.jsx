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
                    <img className={styles.icon} src={""} alt="home icon"/>
                </Link>
            </div>
                
            <div className={styles.navLink}>
                <Link href={'/users/accounts'}>
                    <img className={styles.icon} src={""} alt="home icon"/>
                </Link>
            </div>
            <div className={styles.navLink}>
                <NewPostBtn />
            </div>
                
            <div className={styles.navLink}>
                <Link href={'/account/[id]'} as={`/account/${id}`}>
                    <img className={styles.icon} src={""} alt="home icon"/>
                </Link>
            </div>
                
            <div className={styles.navLink}>
                <Link href={'/logout'}>
                    <span className={styles.icon}>
                        <BsFillDoorOpenFill />
                    </span>
                </Link>
            </div>
                
        </nav>
    );
};

