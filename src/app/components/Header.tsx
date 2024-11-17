export default function Header() {
  return (
    <header className='fixed top-0 z-50 flex w-full items-center justify-between px-4 py-4 lg:px-10 lg:py-4'>
      <div className="flex  items-center lg:space-x-5">
        <img
          src='https://rb.gy/ulxxee'
          alt='netflix'
          width={120}
          height={120}
        />

        <ul className="hidden md:flex space-x-4 text-black">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>My List</li>
        </ul>
      </div>
    </header>
  );
}
