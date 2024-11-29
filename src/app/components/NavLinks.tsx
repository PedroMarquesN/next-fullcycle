'use client';

import Link from 'next/link';

export const NavLinks = () => {
  return (
    <ul className='hidden cursor-pointer space-x-4 md:flex'>
      <Link href='/search?genre=Comedy'>Comedy</Link>
      <Link href='/search?genre=Action'> Action </Link>
      <Link href='/search?genre=Adventure'>Adventure</Link>
      <Link href='/search?genre=Animation'> Animation </Link>
    </ul>
  );
};
