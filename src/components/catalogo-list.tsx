import type { Dispatch, SetStateAction } from "react";
import { useContext } from "react";
import { ItemContext } from "../context/itemContext";
import type { Aeronave } from "../types/aeronave";
import type { Categoria } from "../types/categoria";
import type { Etapa } from "../types/etapa";
import type { Peca } from "../types/peca";
import type { Teste } from "../types/teste";
import CatalogoBigItem from "./catalogo-Bigitem";
import CatalogoSmallItem from "./catalogo-SmallItem";

interface CatalogoListProps {
	data: Aeronave[] | Etapa[] | Peca[] | Teste[];
	categoria: Categoria;
	setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function CatalogoList({
	data,
	categoria,
	setModalOpen,
}: CatalogoListProps) {
	const itemValue = useContext(ItemContext);

	function handleItem(item: Aeronave | Etapa | Peca | Teste) {
		itemValue?.setItem(item);
		setModalOpen((prev: boolean) => !prev);
	}

	return data.map((item, index) => {
		if ("fornecedor" in item) {
			return (
				<CatalogoBigItem
					titulo={item.nome}
					subtitulo={item.tipo}
					campo1="Fornecedor"
					valor1={item.fornecedor}
					campo2="Status"
					valor2={item.status}
					key={`${index} - ${categoria}`}
					onClick={() => handleItem(item)}
				/>
			);
		}

		if ("prazo" in item) {
			return (
				<CatalogoSmallItem
					titulo={item.nome}
					subtitulo={item.prazo}
					adicional={item.status}
					key={`${index} - ${categoria}`}
					onClick={() => handleItem(item)}
				/>
			);
		}

		if ("resultado" in item) {
			return (
				<CatalogoSmallItem
					titulo={item.id}
					subtitulo={item.tipo}
					adicional={item.resultado}
					key={`${index} - ${categoria}`}
					onClick={() => handleItem(item)}
				/>
			);
		}

		return (
			<CatalogoBigItem
				titulo={item.codigo}
				subtitulo={item.modelo}
				campo1="Alcance"
				valor1={item.alcance.toString()}
				campo2="Capacidade"
				valor2={item.capacidade.toString()}
				key={`${index} - ${categoria}`}
				onClick={() => handleItem(item)}
			/>
		);
	});
}
