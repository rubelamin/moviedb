import { getDictionary } from "@/app/[lang]/dictionaries";
import { getMovieById } from "@/lib/movies";

import Image from "next/image";
import DetailsNotFound from "./DetailsNotFound";

export default async function MovieDetails({ movieId, language }) {
	const movie = await getMovieById(parseInt(movieId));
	const dictionary = await getDictionary(language);

	return (
		<>
			{movie ? (
				<section>
					<div>
						<Image
							className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
							width={100}
							height={100}
							sizes="100vw"
							src={movie?.backdrop_path}
							alt={movie?.title}
						/>
					</div>

					<div className="grid grid-cols-12 py-12 gap-8">
						<div className="col-span-2">
							<Image
								width={100}
								height={100}
								sizes="100vw"
								src={movie?.poster_path}
								alt={movie?.title}
							/>
						</div>
						<div className="col-span-8">
							<h2 className="font-bold text-slate-300 text-2xl">
								{movie?.title}
							</h2>
							<p className="my-2 text-slate-400 italic">
								{movie?.overview}
							</p>
							<ul className="text-slate-300 space-y-2 my-8">
								<li>
									{dictionary?.releaseDate} :{" "}
									{movie?.release_date}
								</li>
								<li>
									{dictionary?.averageVote} :{" "}
									{movie?.vote_average}
								</li>
								<li>
									{dictionary?.voteCount} :{" "}
									{movie?.vote_count}
								</li>
								<li>
									{dictionary?.popularity} :{" "}
									{movie?.popularity}
								</li>
							</ul>
						</div>
						<div className="col-span-2 space-y-4">
							<button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
								{dictionary?.streamHD}
							</button>
							<button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
								{dictionary?.downloadHD}
							</button>
						</div>
					</div>
				</section>
			) : (
				<section>
					<DetailsNotFound />
				</section>
			)}
		</>
	);
}
