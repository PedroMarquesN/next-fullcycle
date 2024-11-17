'use client';
import { UserProfile } from "./UserProfile";
import { NavLinks } from "./NavLinks";
import { Logo } from "./Logo";
import { useScroll } from "../hooks/useScroll";

export default function Header() {
    const isScrolled = useScroll();
    
  return (
    <header className={`${isScrolled && 'bg-black'}  fixed top-0 z-50 flex w-full items-center  transition-all justify-between px-4 py-4 lg:px-10 lg:py-4`}>
      <div className='flex items-center lg:space-x-5'>
        <Logo />
        <NavLinks />

      </div>

        <UserProfile />

    </header>
  );
}
