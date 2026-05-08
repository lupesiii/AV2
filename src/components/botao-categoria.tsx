import type { ComponentProps } from "react";
import type { Categoria } from "../types/categoria";
import IconCategoria from "./icon-categoria";

interface BotaoCategoriaProps extends ComponentProps<"button"> {
	categoria: Categoria;
	selected?: boolean;
}

export default function BotaoCategoria({
	categoria,
	selected,
	children,
	...props
}: BotaoCategoriaProps) {
	return (
		<button
			type="button"
			className={`inline-flex items-center gap-1 px-1 py-1.5 text-gray-200 rounded-sm ${selected && "bg-white text-gray-700"}`}
			{...props}
		>
			<IconCategoria
				color={selected ? "#364153" : "#e5e7eb"}
				categoria={categoria}
			/>
			{children}
		</button>
	);
}
