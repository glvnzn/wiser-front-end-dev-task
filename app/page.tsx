import Image from 'next/image';
import { Header } from './components/Header/Header';
import { JobListing } from './components/JobListing/JobListing';
import styles from './page.module.scss';

export default function Page() {
  return (
    <div className={styles.layout}>
      <div className={styles.headerArea}>
        <Header />
      </div>
      <aside className={styles.adPanel}>
        <Image
          src="/ads/ad.png"
          alt=""
          fill
          className={styles.adPhoto}
          sizes="500px"
        />
      </aside>
      <main className={styles.content}>
        <JobListing />
      </main>
    </div>
  );
}
