import Header from './components/Header';
import { MovieRow } from './components/MovieRow';
import { Banner } from './components/Banner';

export default function Home() {
  return (
    <div className='relative h-screen overflow-hidden bg-gradient-to-b lg:h-full'>
      <Header />
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <Banner />

        <MovieRow sectionTitle='Featured' />
        <MovieRow sectionTitle='Popular' />
        <MovieRow sectionTitle='Top Rated' />
      </main>
    </div>
  );
}
