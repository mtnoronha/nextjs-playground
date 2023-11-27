import styles from './page.module.css';
import Link from 'next/link';

const Page = () => {
  return (
    <main className={styles.main}>
      <h1>Welcome to the Home Page</h1>
      <p>Something cool &apos;bout to happen</p>
      <Link href="about">About</Link>
      <Link href="param/test">Param: test</Link>
      <Link href="layout-loading">Loading</Link>
      <Link href="login">Login</Link>
    </main>
  );
}

export default Page;
