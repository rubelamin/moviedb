"use client";

import Image from "next/image";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const LanguageSwitcher = () => {
	const router = useRouter();
	const pathname = usePathname();

	const languages = [
		{
			code: "en",
			language: "English",
		},
		{
			code: "bn",
			language: "Bangla",
		},
	];
	const found = languages.find((lang) => pathname.includes(lang.code));
	const [selectedLanguage, setSelectedLanguage] = useState(
		found ?? languages[0]
	);
	const [showManu, setShowManu] = useState(false);

	const handleLanguageChange = (lang) => {
		setSelectedLanguage({
			...selectedLanguage,
			code: lang,
			language: lang === "en" ? "English" : "Bangla",
		});
		setShowManu(false);
		const ln = JSON.stringify(lang);
		localStorage.setItem("preferLang", ln);
		router.push(`/${lang}`);
	};

	return (
		<div className="flex gap-4 items-center">
			<div className="relative">
				<button
					className="flex items-center gap-2"
					onClick={() => setShowManu(!showManu)}
				>
					<Image
						className="max-w-8"
						src={`/${
							selectedLanguage.code === "en" ? "usa" : "bd"
						}.png`}
						alt="bangla"
						height={100}
						width={165}
					/>
					{selectedLanguage.language}
				</button>
				{showManu && (
					<ul className="absolute right-0 top-full mt-2 w-40 rounded-md bg-slate-700 p-2 z-10 shadow-lg">
						{languages.map((entry) => (
							<li
								key={entry.code}
								onClick={() => handleLanguageChange(entry.code)}
								className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100 hover:text-slate-700"
							>
								<Image
									className="max-w-8"
									src={`/${
										entry.code === "en" ? "usa" : "bd"
									}.png`}
									alt={entry.language}
									height={100}
									width={165}
								/>
								{entry.language}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default LanguageSwitcher;
