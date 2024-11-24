import { Movie, Movies } from '../types/movie';
import { ApiRequest, RequestOptions } from './ApiRequest';

export const getMovieById = async (id: number): Promise<Movie> => {
  return ApiRequest(`movies/${encodeURIComponent(id)}`);
};

export const getFeaturedMovie = async (id: number): Promise<Movie> => {
  return ApiRequest(`featured/${id}`);
};

export const getMoviesByGenre = async (
  genre: string,
  options: RequestOptions
): Promise<Movies> => {
  return ApiRequest(
    `movies`,
    { genres_like: encodeURIComponent(genre) },
    options
  );
};

export const searchMovies = async (
  title: string,
  genre: string,
  options: RequestOptions
): Promise<Movies> => {
  return ApiRequest(
    `movies`,
    {
      title_like: encodeURIComponent(title),
      genres_like: encodeURIComponent(genre),
    },
    options
  );
};
