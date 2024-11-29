
import Header from "../../components/Header";
import Player from "../../components/Player";
import { getMovieById } from "../../service/MovieService";
import { Movie } from "../../types/movie";

interface IWatchProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Watch({ params }: IWatchProps) {
  const { id } = await params; 

  const movie: Movie | null = await getMovieById(id);

  if (!movie) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <Header />
        <main className="flex flex-col items-center justify-center">
          <h1 className="mb-4 text-2xl font-bold">
            Desculpe, mas esse filme não está disponível no momento.
          </h1>
        </main>
      </div>
    );
  }

  return (
    <div className="h-screen">
      <Header />
      <Player movie={movie} />
    </div>
  );
}
