'use client';
import Image from 'next/image';

export const UserProfile = () => {
  return (
    <div className='flex items-center space-x-4'>
      <p className='hidden cursor-not-allowed lg:inline'>Kids</p>
      <Image
        src='/profile.png'
        alt='avatar'
        width={25}
        height={25}
        className='cursor-pointer rounded'
      />
    </div>
  );
};
