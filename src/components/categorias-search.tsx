import { cx } from "cva";
import type { ComponentProps } from "react";
import { Categoria } from "../types/categoria";
import BotaoCategoria from "./botao-categoria";

interface CategoriaSearchProps extends ComponentProps<"div"> {
	categoriaSelected: Categoria;
	setCategoriaSelected: (categoria: Categoria) => void;
}

export default function CategoriaSearch({
	categoriaSelected,
	setCategoriaSelected,
	className,
}: CategoriaSearchProps) {
	function handleCategoriaSelected(categoria: Categoria) {
		setCategoriaSelected(categoria);
	}

	return (
		<div
			className={cx(
				"inline-flex w-fit items-center bg-azul rounded-sm py-0.75 px-1.5 gap-5",
				className,
			)}
		>
			{Object.values(Categoria).map((btn, index) => {
				return (
					<BotaoCategoria
						categoria={btn}
						selected={categoriaSelected === btn}
						key={`${index} - ${btn}`}
						onClick={() => handleCategoriaSelected(btn)}
					>
						{btn}
					</BotaoCategoria>
				);
			})}
		</div>
	);
}
