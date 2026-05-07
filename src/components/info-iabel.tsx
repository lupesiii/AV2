import type { ComponentProps } from "react";

interface InfoLabel extends ComponentProps<"div"> {
	label: string;
	info: string;
}

export default function InfoLabel({ label, info }: InfoLabel) {
	return (
		<div className="flex flex-col ">
			<label htmlFor={info} className="first-letter:uppercase">
				{label}
			</label>
			<input
				type="text"
				id={info}
				disabled
				value={info}
				className="border border-black w-fit p-1 rounded-md"
			/>
		</div>
	);
}
