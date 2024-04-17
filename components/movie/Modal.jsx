"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }) {
	const modalOverly = useRef(null);
	const modalWrapper = useRef(null);
	const router = useRouter();

	const onDisMiss = useCallback(() => {
		router.back();
	}, [router]);

	const onClick = useCallback(
		(e) => {
			if (
				e.target === modalOverly.current ||
				e.target === modalWrapper.current
			) {
				if (onDisMiss) onDisMiss();
			}
		},
		[onDisMiss, modalOverly, modalWrapper]
	);

	const onKeyDown = useCallback(
		(e) => {
			console.log(e.key);
			if (e.key === "Escape") {
				onDisMiss();
			} else if (e.key === "ArrowLeft") {
				onDisMiss();
			}
		},
		[onDisMiss]
	);

	useEffect(() => {
		document.addEventListener("keydown", onKeyDown);

		return () => document.removeEventListener("keydown", onKeyDown);
	}, [onKeyDown]);

	return createPortal(
		<div
			ref={modalOverly}
			onClick={onClick}
			className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50 flex justify-center items-center overflow-y-auto"
		>
			<section
				ref={modalWrapper}
				className="absolute left-0 top-0 w-full grid place-items-center bg-slate-800/50 backdrop-blur-sm z-50"
			>
				<div className="relative w-11/12 mx-auto bg-slate-900 p-4 my-9 border border-slate-600/50 rounded-lg shadow-lg shadow-slate-400/10">
					<div className="flex absolute top-[-0.85rem] right-[-0.85rem] bg-slate-700 size-7 justify-center items-center border rounded-full">
						<button className="text-white" onClick={onDisMiss}>
							X
						</button>
					</div>
					{children}
				</div>
			</section>
		</div>,
		document.getElementById("movie-modal-content")
	);
}
