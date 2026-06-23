/**
 * Brand logo asset map.
 *
 * Assets are exported from the Figma file as SVG and stored in /public/brands/.
 * To add or update a logo: export from Figma → place in /public/brands/ using
 * the filename listed below → adjust width/height if needed after visual review.
 */

type BrandLogo = {
  src: string;
  /** Natural display width in px — tune per logo after visual review. */
  width: number;
  /** Natural display height in px — tune per logo after visual review. */
  height: number;
};

export const BRAND_LOGOS: Record<string, BrandLogo> = {
  NEXT:               { src: '/brands/next.svg',              width: 80,  height: 28 },
  "Victoria’s Secret": { src: '/brands/victorias-secret.svg', width: 130, height: 20 },
  JOULES:             { src: '/brands/joules.svg',            width: 90,  height: 28 },
  GAP:                { src: '/brands/gap.svg',               width: 48,  height: 40 },
  LIPSY:              { src: '/brands/lipsy.svg',             width: 70,  height: 22 },
  'Cath Kidston':     { src: '/brands/cath-kidston.svg',      width: 100, height: 22 },
  MADE:               { src: '/brands/made.svg',              width: 70,  height: 22 },
};
