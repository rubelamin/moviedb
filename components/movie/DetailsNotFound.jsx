"use client";

import { useParams } from "next/navigation";

export default function DetailsNotFound() {
	const params = useParams();

	return <div>This movie with {params.movieId} id was not found!</div>;
}
