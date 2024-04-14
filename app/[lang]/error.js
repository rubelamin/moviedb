"use client";

export default function MoviesErrorPage({ error, reset }) {
	return (
		<div className="flex justify-center py-10">
			<h1>Somethig went wrong!</h1>
			<p>{error?.message}</p>
			<button onClick={() => reset()}>Try Again</button>
		</div>
	);
}
