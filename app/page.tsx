import { Header } from './components/Header/Header';
import { JobListing } from './components/JobListing/JobListing';
import styles from './page.module.scss';

export default function Page() {
  return (
    <>
      <Header />
      <main className={styles.layout}>
        <div className={styles.content}>
          <JobListing />
        </div>
        <aside className={styles.adPanel}>
          {/* TODO: replace with <Image> once ad photo asset is exported from Figma */}
          <div className={styles.adPlaceholder} aria-hidden="true" />
        </aside>
      </main>
    </>
  );
}
