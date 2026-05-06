import {
	FileQuestionIcon,
	IdCardLanyard,
	NotebookIcon,
	Plane,
	TestTube2,
	Wrench,
} from "lucide-react";
import { type ComponentProps, useState } from "react";
import { Categoria } from "../types/categoria";
import Icon from "./icon";

const icons = [
	{ categoria: Categoria.aeronave, icon: Plane },
	{ categoria: Categoria.etapa, icon: NotebookIcon },
	{ categoria: Categoria.teste, icon: TestTube2 },
	{ categoria: Categoria.peça, icon: Wrench },
	{ categoria: Categoria.funcionario, icon: IdCardLanyard },
];

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
	const [color, setColor] = useState<"#e5e7eb" | "#364153">("#e5e7eb");

	const svgComponent = icons.find((icon) => {
		if (icon.categoria === categoria) return icon.icon;
		return null;
	});

	return (
		<button
			type="button"
			className={`inline-flex items-center gap-1 px-1 py-1.5 text-gray-200 rounded-sm hover:bg-white hover:text-gray-700 ${selected && "bg-white text-gray-700"}`}
			onMouseOver={() => setColor("#364153")}
			onFocus={() => setColor("#364153")}
			onMouseLeave={() => setColor("#e5e7eb")}
			{...props}
		>
			<Icon
				color={selected ? "#364153" : color}
				svg={svgComponent?.icon || FileQuestionIcon}
			/>
			{children}
		</button>
	);
}
