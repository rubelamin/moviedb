import MovieCard from "@/components/movie/MovieCard";
import { getAllMovies } from "@/lib/movies";
import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }) {
	const dict = await getDictionary(lang);

	const movies = await getAllMovies();

	return (
		<div className="content">
			<div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
				{movies.length > 0 &&
					movies.map((movie) => (
						<MovieCard
							key={movie.id}
							movie={movie}
							language={lang}
						/>
					))}
			</div>
		</div>
	);
}
