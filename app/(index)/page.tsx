import styles from './page.module.css';
import Link from 'next/link';

const Page = () => {
  return (
    <main className={styles.main}>
      <h1>Welcome to the Home Page</h1>
      <p>Some cool &apos;bout to happen</p>
      <Link href="/about">About</Link>
      <Link href="/param/test">Param: test</Link>
    </main>
  );
}

export default Page;
