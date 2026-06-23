'use client';

import { useState } from 'react';
import styles from './JobRow.module.scss';

type Props = {
  jobTitle: string;
};

export function FavouriteButton({ jobTitle }: Props) {
  const [saved, setSaved] = useState(false);

  return (
    <button
      type="button"
      className={`${styles.favourite} ${saved ? styles.favouriteSaved : ''}`}
      onClick={() => setSaved((prev) => !prev)}
      aria-label={saved ? `Remove "${jobTitle}" from saved jobs` : `Save "${jobTitle}"`}
      aria-pressed={saved}
    >
      {/*
       * Figma: 20×19.02px star, stroke 1px #000, fill #000 when saved.
       * Designer note (Figma comment #1 · Page 1 — Wiz Warde-Aldam):
       * "Optional hover state for favourite jobs"
       */}
      <svg
        width="20"
        height="19"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    </button>
  );
}
