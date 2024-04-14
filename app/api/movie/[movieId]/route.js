import { NextResponse } from "next/server";

import { getAllMovies, getMovieById } from "@/lib/movies";

export async function GET(request, { params }) {
	const movieId = params?.movieId;

	const movie = await getMovieById(parseInt(movieId));

	return NextResponse.json(movie);
}

export async function DELETE(request, { params }) {
	const movieId = params?.movieId;
	const movieData = await getAllMovies();

	const updatedMovies = movieData.filter((mv) => mv.id !== parseInt(movieId));

	const res = {
		status: "Deleted",
		message: `Successfully deleted movie with id: ${movieId} `,
		data: updatedMovies,
	};

	return NextResponse.json(res);
}

export async function PATCH(request, { params }) {
	const resBody = await request.json();

	const movieId = params?.movieId;
	const movieData = await getAllMovies();

	if (resBody.title || resBody.original_title) {
		const updatedMovies = movieData.map((mv) => {
			if (mv.id === parseInt(movieId)) {
				return {
					...mv,
					title: resBody.title,
					original_title: resBody.title,
				};
			}
			return mv;
		});

		const updatedMovie = updatedMovies.find(
			(m) => m.id === parseInt(movieId)
		);

		const res = {
			status: "Updated",
			message: `Successfully Updated title of movie with id: ${movieId} `,
			data: updatedMovie,
		};

		return NextResponse.json(res);
	} else {
		const res = {
			status: "Rejected",
			message: `Can not be Updated title of movie with id: ${movieId} `,
		};

		return NextResponse.json(res);
	}
}
