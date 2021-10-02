import styles from "../../styles/Header.module.css";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";

function Header() {
  const [session, loading] = useSession();

  return (
    <div className={styles.header}>
      <a href="#default" className={styles.logo}>
        CompanyLogo
      </a>
      <div className={styles.header_right}>
        <a className={styles.active} href="#home">
          Home
        </a>
        <Link href="/dashboard">
          <a>Dashboard</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        {!loading && !session && (
          <Link href="/api/auth/signin">
            <a
              onClick={(e) => {
                e.preventDefault(), signIn();
              }}
            >
              Sign In
            </a>
          </Link>
        )}

        {session && (
          <Link href="/api/auth/signout">
            <a
              onClick={(e) => {
                e.preventDefault(), signOut();
              }}
            >
              Sign Out
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
