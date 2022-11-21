import React from 'react'

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
