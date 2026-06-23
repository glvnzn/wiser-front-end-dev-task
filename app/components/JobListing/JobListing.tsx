import { mockJobs } from '@/data/mockJobs';
import { JobRow } from '@/app/components/JobRow/JobRow';
import styles from './JobListing.module.scss';

export function JobListing() {
  return (
    <main className={styles.jobListing}>
      <ul className={styles.list} role="list">
        {mockJobs.map((job) => (
          <JobRow key={job.id} job={job} />
        ))}
      </ul>
    </main>
  );
}
