import { getMovies } from "./moviesData";

export const getAllMovies = async () => {
	const movieData = await getMovies();

	return movieData?.movieList?.results;
};

export const getMovieById = async (id) => {
	const movieData = await getMovies();

	const movie = movieData?.movieList?.results.find((mv) => mv.id === id);

	return movie;
};
