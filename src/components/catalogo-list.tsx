import type { Dispatch, SetStateAction } from "react";
import { useBlur } from "@/hooks/useBlur";
import { useItem } from "@/hooks/useItem";
import type { Funcionario } from "@/types/funcionario";
import type { Aeronave } from "../types/aeronave";
import { Categoria } from "../types/categoria";
import type { Etapa } from "../types/etapa";
import type { Peca } from "../types/peca";
import type { Teste } from "../types/teste";
import CatalogoBigItem from "./catalogo-Bigitem";
import CatalogoSmallItem from "./catalogo-SmallItem";

interface CatalogoListProps {
	data: Aeronave[] | Etapa[] | Peca[] | Teste[] | Funcionario[];
	setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function CatalogoList({
	data,
	setModalOpen,
}: CatalogoListProps) {
	const { setVisible } = useBlur();
	const { setItem } = useItem();

	function handleItem(item: Aeronave | Etapa | Peca | Teste | Funcionario) {
		setItem(item);
		setVisible(true);
		setModalOpen(true);
	}

	return data.map((item) => {
		if (item.type === Categoria.peça) {
			return (
				<CatalogoBigItem
					titulo={item.nome}
					subtitulo={item.tipo}
					campo1="Fornecedor"
					valor1={item.fornecedor}
					campo2="Status"
					valor2={item.status}
					key={item.id}
					onClick={() => handleItem(item)}
				/>
			);
		}

		if (item.type === Categoria.etapa) {
			return (
				<CatalogoSmallItem
					titulo={item.nome}
					subtitulo={item.prazo}
					adicional={item.status}
					key={item.id}
					onClick={() => handleItem(item)}
				/>
			);
		}

		if (item.type === Categoria.teste) {
			return (
				<CatalogoSmallItem
					titulo={item.id}
					subtitulo={item.tipo}
					adicional={item.resultado}
					key={item.id}
					onClick={() => handleItem(item)}
				/>
			);
		}

		if (item.type === Categoria.funcionario) {
			return (
				<CatalogoSmallItem
					titulo={item.usuario}
					subtitulo={item.nome}
					adicional={item.nivelPermissao}
					key={item.id}
					onClick={() => handleItem(item)}
				/>
			);
		}

		return (
			<CatalogoBigItem
				titulo={item.codigo}
				subtitulo={item.modelo}
				campo1="Alcance"
				valor1={item.alcance}
				campo2="Capacidade"
				valor2={item.capacidade}
				key={item.id}
				onClick={() => handleItem(item)}
			/>
		);
	});
}
