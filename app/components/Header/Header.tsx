import Image from 'next/image';
import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <Image
        src="/brands/next-logo.svg"
        alt="NEXT Careers"
        width={88}
        height={41}
        priority
      />
      <nav className={styles.nav} aria-label="Header actions">
        <button type="button" className={styles.iconBtn} aria-label="Saved jobs">
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" aria-hidden="true">
            <path d="M10.5 0.5L13.59 6.76L20.5 7.77L15.5 12.64L16.68 19.52L10.5 16.27L4.32 19.52L5.5 12.64L0.5 7.77L7.41 6.76L10.5 0.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button type="button" className={styles.iconBtn} aria-label="Account">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="currentColor"/>
            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button type="button" className={styles.jobsBtn}>
          Jobs
        </button>
      </nav>
    </header>
  );
}
