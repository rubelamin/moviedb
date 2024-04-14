import { getDictionary } from "@/app/[lang]/dictionaries";
import Image from "next/image";
import Link from "next/link";
import MovieRating from "./MovieRating";

export default async function MovieCard({ movie, language }) {
	const dictionary = await getDictionary(language);
	return (
		<figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
			<Image
				className="w-full object-cover"
				src={movie?.poster_path}
				width={0}
				height={0}
				sizes="100vw"
				alt={movie?.title}
			/>
			<figcaption className="pt-4">
				<h3 className="text-xl mb-1">{movie?.title}</h3>
				<p className="text-[#575A6E] text-sm mb-2">
					Action/Adventure/Sci-fi
				</p>
				<div className="flex items-center space-x-1 mb-5">
					<MovieRating rating={movie?.vote_average} />
				</div>
				<Link
					className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
					href={`/${language}/movies/${movie?.id}`}
				>
					<Image
						src="/assets/tag.svg"
						width={20}
						height={20}
						alt=""
					/>
					<span>{dictionary?.details}</span>
				</Link>
			</figcaption>
		</figure>
	);
}
