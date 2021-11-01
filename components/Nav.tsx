import React, { FC } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

import styles from "../styles/components/Nav.module.scss";

/**
 * The nav component used on all pages of the application.
 * @return {JSX.Element} The JSX code for nav component.
 */
const Nav: FC = (): JSX.Element => {
  const { user } = useUser();

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <div className={styles.navRight}>
          {!user ? (
            <li>
              <Link href="/api/auth/login">Login</Link>
            </li>
          ) : (
            <>
              <li>
                <Link href="/api/auth/logout">Logout</Link>
              </li>
              {user.picture && <img src={user.picture} alt="profile-picture" />}
            </>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
