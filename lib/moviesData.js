const movieDatabase = {
	movies: () =>
		import("../database/movies.json").then((module) => module.default),
};

export const getMovies = async () => movieDatabase.movies();
