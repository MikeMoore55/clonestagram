import React from 'react';
import Link from 'next/link';
import { AiFillHome } from "react-icons/ai"; // home icon
import { AiOutlineTeam } from "react-icons/ai"; // profiles icon
import { AiOutlineUser } from "react-icons/ai"; // personal profile icon
import { BsFillDoorOpenFill } from "react-icons/bs"; // log put icon



export default function BottomNav({userId}) {
  return (
      <div>
          <nav className={styles.navContainer}>
            <div className={styles.navLink}>
                <Link href={'/home'}>
                    <span className={styles.icon}><AiFillHome/></span>
                </Link>
            </div>
            <div className={styles.navLink}>
                <Link href={'/users/accounts'}>
                    <span className={styles.icon}>
                        <AiOutlineTeam />
                    </span>
                </Link>
            </div>
            <div className={styles.navLink}>
                <Link href={'/account/[id]'} as={`/account/${id}`}>
                    <span className={styles.icon}>
                        <AiOutlineUser />
                    </span>
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
    </div>
  )
};
