import type { ComponentProps } from "react";
import Text from "./text";

interface ItemCardProps extends ComponentProps<"section"> {
	titulo: string;
	subtitulo: string;
	campo1: string;
	valor1: string | number;
	campo2?: string;
	valor2?: string | number;
	tipo?: string;
}

export default function CatalogoBigItem({
	titulo,
	subtitulo,
	campo1,
	valor1,
	campo2,
	valor2,
	tipo,
	...props
}: ItemCardProps) {
	return (
		<section
			{...props}
			className="flex flex-col w-full items-center border border-black/15 rounded-md shadow-lg overflow-hidden relative group hover:-translate-y-2 transition"
		>
			<div className="overflow-hidden">
				<img
					src="/airplane.jpg"
					alt="a"
					className="aspect-4/3 w-full h-full object-cover rounded-md group-hover:scale-105 transition duration-500"
				/>
			</div>
			<article className="w-full p-5">
				<div className="flex flex-col gap-2 pb-5">
					<Text variant="sm" color="azul-muted">
						{subtitulo}
					</Text>
					<Text>{titulo}</Text>
				</div>

				<div className="flex gap-20 pt-5 border-t border-azul/30">
					<div className="flex flex-col gap-2">
						<Text
							variant="sm"
							color="azul-muted"
							className="first-letter:uppercase"
						>
							{campo1}
						</Text>
						<Text>{valor1}</Text>
					</div>

					<div className="flex flex-col gap-2">
						<Text
							variant="sm"
							color="azul-muted"
							className="first-letter:uppercase"
						>
							{campo2}
						</Text>
						<Text>{valor2}</Text>
					</div>
				</div>
			</article>

			{tipo && (
				<aside className="absolute top-2 right-2 bg-white px-2 py-3 rounded-full flex items-center text-sm leading-0 hover:bg-azul hover:text-white">
					{tipo}
				</aside>
			)}
		</section>
	);
}
