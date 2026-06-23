import styles from './Hero.module.scss';

export function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heading}>Careers</h1>
      <p className={styles.subtext}>
        Whatever your ambition, there&apos;s a role here to match it. Search our live
        opportunities and discover where you can make an impact.
      </p>
      <form role="search" className={styles.searchForm}>
        <label htmlFor="hero-search" className={styles.srOnly}>
          Search careers, teams, locations
        </label>
        {/* Figma: magnifier exported as /public/brands/magnifier.svg — inlined for currentColor theming */}
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          aria-hidden="true"
          className={styles.searchIcon}
        >
          <path
            d="M11.6669 22.3338C17.5581 22.3338 22.3338 17.5581 22.3338 11.6669C22.3338 5.77573 17.5581 1 11.6669 1C5.77573 1 1 5.77573 1 11.6669C1 17.5581 5.77573 22.3338 11.6669 22.3338Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M24.9973 25.0017L19.1971 19.2015"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
          />
        </svg>
        <input
          id="hero-search"
          type="search"
          placeholder="Search careers, teams, locations..."
          className={styles.searchInput}
        />
      </form>
    </section>
  );
}
