import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function NotFound() {
	return (
		<div>
			<Header />
			<main>
				<div className="container flex flex-col items-center py-28">
					<h2>Not Found!</h2>
					<p>Could not find requested resource</p>
					<Link href="/">Return Home</Link>
				</div>
			</main>
			<Footer />
		</div>
	);
}
