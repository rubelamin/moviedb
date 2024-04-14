import Modal from "@/components/movie/Modal";
import MovieDetails from "@/components/movie/MovieDetails";

export default function MoviePageModal({ params }) {
	return (
		<Modal>
			<MovieDetails movieId={params?.movieId} language={params?.lang} />
		</Modal>
	);
}
