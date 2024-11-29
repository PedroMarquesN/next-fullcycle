import Header from "@/app/components/Header";
import Player from "@/app/components/Player";
import { getMovieById } from "@/app/service/MovieService";

interface IWatchProps {
    params: {
        id: string;
    }
}

export default async function Watch({ params }: IWatchProps) {
    const movie = await getMovieById(params.id);

    if (!movie) {
        <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <Header />
        <main className='flex flex-col items-center justify-center'>
          <h1 className='mb-4 text-2xl font-bold'>
           Desculpe , mas esse filme não está disponível no momento.
          </h1>

        </main>
      </div>
    }
    return (
        <Player movie={movie} />

    )
}