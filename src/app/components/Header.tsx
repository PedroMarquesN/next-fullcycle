'use client';
import { useEffect, useState } from "react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect (() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <header className={`${isScrolled && 'bg-black'}  fixed top-0 z-50 flex w-full items-center  transition-all justify-between px-4 py-4 lg:px-10 lg:py-4`}>
      <div className='flex items-center lg:space-x-5'>
        <img
          src='https://rb.gy/ulxxee'
          alt='netflix'
          width={120}
          height={120}
        />

        <ul className='hidden space-x-4  md:flex'>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>My List</li>
        </ul>
      </div>

      <div className='flex items-center space-x-4'>
        <p className='hidden cursor-not-allowed lg:inline'>Kids</p>
        <img 
            src='https://rb.gy/g1pwyx'
            alt='avatar'
            className='rounded cursor-pointer'
        />
      </div>
    </header>
  );
}
