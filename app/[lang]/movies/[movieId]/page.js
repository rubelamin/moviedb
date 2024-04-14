import MovieDetails from "@/components/movie/MovieDetails";

export default function MoviePage({ params }) {
	return <MovieDetails movieId={params?.movieId} language={params?.lang} />;
}
