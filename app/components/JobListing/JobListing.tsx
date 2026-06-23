import { mockJobs } from '@/data/mockJobs';
import { JobRow } from '@/app/components/JobRow/JobRow';
import styles from './JobListing.module.scss';

export function JobListing() {
  return (
    <main className={styles.jobListing}>
      <div className={styles.toolbar}>
        <p className={styles.jobCount}>
          <strong className={styles.jobCountNumber}>{mockJobs.length}</strong>
          {' '}open jobs
        </p>
        {/* Sort is presentational — no sort logic against mock data */}
        <div className={styles.sortWrapper}>
          <label htmlFor="sort-select" className={styles.srOnly}>Sort jobs by</label>
          <select id="sort-select" className={styles.sortSelect} defaultValue="newest">
            <option value="newest">Newest to Oldest</option>
            <option value="oldest">Oldest to Newest</option>
          </select>
          <svg
            className={styles.sortChevron}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <hr className={styles.divider} />

      <ul className={styles.list} role="list">
        {mockJobs.map((job) => (
          <JobRow key={job.id} job={job} />
        ))}
      </ul>
    </main>
  );
}
