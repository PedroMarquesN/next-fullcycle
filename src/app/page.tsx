import Header from './components/Header';
import { MovieRow } from './components/MovieRow';
import { Banner } from './components/Banner';
import { getFeaturedMovie } from './service/MovieService';

export default async function Home() {
  const featuredMovie = await getFeaturedMovie('101');
  return (
    <div className='relative h-screen overflow-hidden bg-gradient-to-b lg:h-full'>
      <Header />
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <Banner movie={featuredMovie}/>

        <MovieRow sectionTitle='Featured' />
        <MovieRow sectionTitle='Popular' />
        <MovieRow sectionTitle='Top Rated' />
      </main>
    </div>
  );
}
