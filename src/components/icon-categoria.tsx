import {
	FileQuestionIcon,
	IdCardLanyard,
	type LucideProps,
	NotebookIcon,
	Plane,
	TestTube2,
	Wrench,
} from "lucide-react";
import { Categoria } from "../types/categoria";
import Icon from "./icon";

const icons = [
	{ categoria: Categoria.aeronave, icon: Plane },
	{ categoria: Categoria.etapa, icon: NotebookIcon },
	{ categoria: Categoria.teste, icon: TestTube2 },
	{ categoria: Categoria.peça, icon: Wrench },
	{ categoria: Categoria.funcionario, icon: IdCardLanyard },
];

interface IconCategoriaProps extends LucideProps {
	categoria: Categoria;
}

export default function IconCategoria({
	categoria,
	...props
}: IconCategoriaProps) {
	const svgComponent = icons.find((icon) => {
		if (icon.categoria === categoria) return icon.icon;
		return null;
	});

	return <Icon {...props} svg={svgComponent?.icon || FileQuestionIcon} />;
}
