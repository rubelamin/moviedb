export default function ImageSkeleton() {
	return (
		<div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
			<div class="animate-pulse flex space-x-4">
				<div class="rounded bg-slate-700 h-100 w-20"></div>
			</div>
		</div>
	);
}
