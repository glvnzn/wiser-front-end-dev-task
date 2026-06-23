import Image from 'next/image';
import Link from 'next/link';
import type { Job } from '@/data/mockJobs';
import { BRAND_LOGOS } from './brandLogos';
import { FavouriteButton } from './FavouriteButton';
import styles from './JobRow.module.scss';

type Props = {
  job: Job;
};

export function JobRow({ job }: Props) {
  const logo = BRAND_LOGOS[job.brand];

  return (
    <li className={styles.row}>
      <span className={styles.title}>{job.title}</span>
      <span className={styles.team}>{job.team}</span>
      <div className={styles.brand}>
        {logo ? (
          <Image
            src={logo.src}
            alt={job.brand}
            width={logo.width}
            height={logo.height}
            className={styles.brandLogo}
          />
        ) : (
          <span>{job.brand}</span>
        )}
      </div>
      <span className={styles.location}>{job.location}</span>
      <Link
        href={job.link}
        className={styles.viewJob}
        aria-label={`View job: ${job.title}`}
      >
        View job
      </Link>
      <FavouriteButton jobTitle={job.title} />
    </li>
  );
}
