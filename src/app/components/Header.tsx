'use client';
import { UserProfile } from './UserProfile';
import { NavLinks } from './NavLinks';
import { Logo } from './Logo';
import { useScroll } from '../hooks/useScroll';
import { useState } from 'react';
import { SearchForm } from './SearchForm';
import { useRouter,} from 'next/navigation';
import Link from 'next/link';

//finalmente PRontooooOooO

export default function Header() {
  const isScrolled = useScroll();
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState<string>('');

  const onSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?title=${searchTerm}`);

   
  };

  return (
    <header
      className={`${isScrolled && 'bg-black'} fixed top-0 z-50 flex w-full items-center justify-between bg-gradient-to-t from-transparent to-black p-2 px-4 py-4 transition-all lg:px-16 lg:py-4`}
    >
      <div className='flex items-center lg:space-x-5'>
        <Link href='/'>
        <Logo />
        </Link>

        <NavLinks />
      </div>

      <div className='flex items-center lg:space-x-5'>
        <SearchForm
          searchTerm={searchTerm}
          onSearchTermChange={onSearchTermChange}
          onSearch={onSearch}
        />
        <UserProfile />
      </div>
    </header>
  );
}
