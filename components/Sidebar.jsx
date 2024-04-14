import Image from "next/image";
import Link from "next/link";

export default function Sidebar({ dictionary }) {
	return (
		<aside>
			<ul className="space-y-2">
				<li>
					<Link
						className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
						href="#"
					>
						<Image
							src="/assets/icons/trending.svg"
							width="24"
							height="24"
							alt=""
						/>
						<span>{dictionary?.trending}</span>
					</Link>
				</li>
				<li>
					<Link
						className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
						href="#"
					>
						<Image
							src="/assets/icons/newRelease.svg"
							width="24"
							height="24"
							alt=""
						/>
						<span>{dictionary?.newReleases}</span>
					</Link>
				</li>
				<li>
					<Link
						className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
						href="#"
					>
						<Image
							src="/assets/icons/commingSoon.svg"
							width="24"
							height="24"
							alt=""
						/>
						<span>{dictionary?.comingSoon}</span>
					</Link>
				</li>
				<li>
					<Link
						className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
						href="#"
					>
						<Image
							src="/assets/icons/favourite.svg"
							width="24"
							height="24"
							alt=""
						/>
						<span>{dictionary?.favourites}</span>
					</Link>
				</li>
				<li>
					<Link
						className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
						href="#"
					>
						<Image
							src="/assets/icons/watchLater.svg"
							width="24"
							height="24"
							alt=""
						/>
						<span>{dictionary?.watchLater}</span>
					</Link>
				</li>
			</ul>
		</aside>
	);
}
