import Image from 'next/image';
import { Header } from './components/Header/Header';
import { JobListing } from './components/JobListing/JobListing';
import styles from './page.module.scss';

export default function Page() {
  return (
    <>
      <Header />
      <div className={styles.columns}>
        <main className={styles.content}>
          <JobListing />
        </main>
        <aside className={styles.adPanel}>
          <Image
            src="/ads/ad.png"
            alt=""
            width={338}
            height={647}
            priority
            className={styles.adPhotoDesktop}
          />
          <Image
            src="/ads/ad-mobile.png"
            alt=""
            width={338}
            height={647}
            priority
            className={styles.adPhotoMobile}
          />
        </aside>
      </div>
    </>
  );
}
