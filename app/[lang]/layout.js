import Sidebar from "@/components/Sidebar";
import { getDictionary } from "./dictionaries";

export default async function Home({ children, modal, params: { lang } }) {
	const dict = await getDictionary(lang);

	return (
		<>
			{modal}
			<div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
				<Sidebar dictionary={dict} />

				{children}
			</div>
		</>
	);
}
