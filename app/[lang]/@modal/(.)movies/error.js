"use client";

export default function ModalError({ error, reset }) {
	return (
		<div>
			<p>Modal error {error.message}</p>
		</div>
	);
}
