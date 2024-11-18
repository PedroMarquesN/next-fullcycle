'use client';
import Image from 'next/image';

export const Logo = () => {
  return (
    <Image
      src='/logo.svg'
      alt='netflix'
      width={120}
      height={120}
      className='cursor-pointer'
    />
  );
};
